import { useSelector } from 'react-redux'
import _ from 'lodash'
import config from '@config/config'
import initializeBasicAuth from 'nextjs-basic-auth'
import acousticHelper from '@services/utilities/acousticHelper'
import acousticAPI from '@services/api/acousticAPI'
import FlexiTemplate from '@templates/flexiTemplate/FlexiTemplate'

/**
 * Add Basic HTTP Auth to your Next.js application
 * URL: https://www.npmjs.com/package/nextjs-basic-auth
 */
const basicAuthCheck = initializeBasicAuth({users: config.basicAuth.users})

export async function getServerSideProps(context) {

  const {req, res} = context
  
  //if served domain = protectedDomain serve basic auth dialog
  if(req.headers.host === config.basicAuth.protectedDomain){
    await basicAuthCheck(req, res)
  }    

  const locale = `/${context.locale}`
  const slug = `/${context.params.slug.join('/')}`
  const acousticQuery = acousticHelper.getAcousticPage(locale, slug)
  const acousticReq = await acousticAPI.get(acousticQuery)
  const acousticRes = acousticReq.data

  if (!acousticRes.documents) {
    return {
      notFound: true
    }
  }

  const content = acousticRes.documents.filter((item) => item?.document?.elements?.pageSlug?.value === slug)
  const elements = content[0]?.document?.elements

  if (!elements) {
    return {
      notFound: true
    }
  }

  let pageContentOrdered = []
  let pageContent = []
  try {
    if (elements?.category?.categories) {
      // The category might have spaces in between words. The Acoustic search query handles spaces like this: '\%20'
      // ...But axios doesn't like it so escape the slash using '\\ ' instead
      const pageContentQuery = acousticHelper.getAcousticPageContent(locale, elements?.category?.categories[0].split('/').pop().replace(/\s/g, `\\ `))
      const pageContentQueryRender = acousticHelper.getAcousticPageContent(locale, elements?.category?.categories[0].split('/').pop().replace(/\s/g, `\\ `), true)

      const pageContentReq = await acousticAPI.get(pageContentQuery)
      const pageContentReq2 = await acousticAPI.get(pageContentQueryRender)

      if (pageContentReq.data.documents) {
        // filter 'Kanso - Template -Flexi' out of the array...we're only interested in the components associated with it's category
        const unorderedPageContent = pageContentReq.data.documents.filter((item) => item.id !== content[0]?.document.id)

        // order the array based on the Positioning category assigned to each of the components (AppPosition01, ...02, -> AppPositionN)
        pageContentOrdered = _.sortBy(unorderedPageContent, (o) => o.categoryLeaves.filter((item) => item.includes('AppPosition')))

        // once we have the correct order create a custom array and add the full rendered elements that we need
        pageContentOrdered.map(function (element) {
          let result = pageContentReq2.data.documents.find((item) => element.id === item.id)
          let pageContentObj = { document: {} }
          pageContentObj.id = element.id
          pageContentObj.type = element.type
          pageContentObj['document'].elements = result.document.elements
          pageContent.push(pageContentObj)
        })
      }
    }
  } catch (error) {
    console.log(error)
  }
  return {
    props: { elements, pageContent }
  }
}

export default function AcousticPage({ ...props }) {    
  return <FlexiTemplate data={props}></FlexiTemplate>
}