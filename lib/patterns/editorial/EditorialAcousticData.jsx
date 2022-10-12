import { getValue, getSelectionValue } from '@services/utilities/utilityHelper'
import Editorial from './Editorial'
import EditorialTextAcousticData from '@atoms/editorialText/EditorialTextAcousticData'
import ImageAcousticData from '@atoms/image/ImageAcousticData'
import VideoAcousticData from '@atoms/video/VideoAcousticData'
import { getComponentName } from '@services/utilities/acousticMappings'

const EditorialAcousticData = (props) => {
  const { 
    columns,
    content 
  } = props.data

  console.log('editorial',props.data)

  return (  
    <Editorial>
      {content?.values?.map((content, index) => {
        if (getComponentName(content.type) === 'EditorialText') {
          return <EditorialTextAcousticData data={content?.elements} />
        }
        if (getComponentName(content.type) === 'Image') {
          return <ImageAcousticData data={content?.elements} />
        }
        if (getComponentName(content.type) === 'Video') {
          return <VideoAcousticData data={content?.elements} />
        }
      })}
    </Editorial>
  )
}

export default EditorialAcousticData
