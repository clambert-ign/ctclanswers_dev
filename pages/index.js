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

export async function getServerSideProps(context, props) {
    
  const {req, res} = context
  
  //if served domain = protectedDomain serve basic auth dialog
  if(req.headers.host === config.basicAuth.protectedDomain){
    await basicAuthCheck(req, res)
  }
  
  const locale = `/${context.locale}`
  const acousticQuery = acousticHelper.getAcousticHomepage(locale)
  const acousticReq = await acousticAPI.get(acousticQuery)
  const acousticResult = acousticReq.data

  if (!acousticResult.documents) {
    return {
      notFound: true
    }
  }

  const content = acousticResult.documents
  const elements = content[0]?.document?.elements
  const pageCategory = elements?.category?.categories[0].split('/').pop().replace(/\s/g, `\\ `);
  if (!elements) {
    return {
      notFound: true
    }
  }
                
  let pageContentOrdered = []
  let pageContent = []
  let pageContentNew = []
  
  try {
    if (elements?.category?.categories) {
      const pageContentQuery = acousticHelper.getAcousticPageContent(locale, pageCategory)
      const pageContentQueryRender = acousticHelper.getAcousticPageContent(locale, pageCategory, true)

      const pageContentReq  = await acousticAPI.get(pageContentQuery)
      const pageContentReq2 = await acousticAPI.get(pageContentQueryRender)

      if (pageContentReq.data.documents) {
        
        // filter 'Kanso - Template -Flexi' out of the array...we're only interested in the components associated with it's category
        const unorderedPageContent = pageContentReq.data.documents.filter((item) => item.id !== content[0]?.document.id)
                
        // Need to keep Template Flexi and look within it to pull out the content, removes the need for app position
        const newObj = pageContentReq2.data.documents[0].document.elements.pageContent.values
        console.log('new', newObj)
        newObj.map(function (element) {
          //let resultNew = pageContentReq2.data.documents.find((item) => element.id === item.id)
          let pageContentObjNew = { document: {} }
          pageContentObjNew.id = element.id
          pageContentObjNew.type = element.type
          pageContentObjNew['document'].elements = element.elements
          pageContent.push(pageContentObjNew)
        })
        
        console.log('new elements', elements)
        console.log('new pagecontent', pageContent)
        
        
        // order the array based on the Positioning category assigned to each of the components (AppPosition01, ...02, -> AppPositionN)
       //pageContentOrdered = _.sortBy(unorderedPageContent, (o) => o.categoryLeaves.filter((item) => item.includes('AppPosition')))
        
        // once we have the correct order create a custom array and add the full rendered elements that we need
        // pageContentOrdered.map(function (element) {
        //   let result = pageContentReq2.data.documents.find((item) => element.id === item.id)
        //   let pageContentObj = { document: {} }
        //   pageContentObj.id = element.id
        //   pageContentObj.type = element.type
        //   pageContentObj['document'].elements = result.document.elements
        //   pageContent.push(pageContentObj)
        // })
        // console.log('old',pageContent)
      }
    }
  } catch (error) {
    console.log(error)
  }
  return {
    props: { elements, pageContent}
  }
}

const index = (props) => {
  return <FlexiTemplate data={props}></FlexiTemplate>
}

export default index
