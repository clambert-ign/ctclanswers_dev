import { useState } from "react"
import { getValue, getValues, getFullUrl, getSelectionValue, getFullImageStr } from '@services/utilities/utilityHelper'
import Button from './Button'
import EditorialText from "@atoms/editorialText/EditorialText"
import Modal from "@components/modal/Modal"
import ModalContent from "@components/modal/ModalContent"
import ModalFooter from "@components/modal/ModalFooter"
import ConfirmationDialog from "@patterns/confirmationDialog/ConfirmationDialog"

const ButtonAcousticData = (props) => {
  const { 
    behaviourReference,
    clickEvent,
    downloadFilename,
    externalText,
    icon,
    iconAlign,
    id,
    isDisabled,
    isExternal,
    isDownload,
    link,
    text,
    type
  } = props.data

  const [showModal, setShowModal] = useState(false)
  const toggleModal = (e) => {
    e.preventDefault()           
    setShowModal(!showModal)
  }
  const openWindow = (e) => {
    e.preventDefault()           
    if (typeof window !== 'undefined') {
      window.open(getValue(link), '_blank')
    }
  }

  return (
    <>
      <Button
        type={getSelectionValue(type)} 
        text={getValue(text)}  
        icon={getSelectionValue(icon)} 
        iconAlign={getSelectionValue(iconAlign)} 
        link={getValue(link)}
        isDisabled={getValue(isDisabled)}
        isDownload={getValue(isDownload)}
        downloadFilename={getValue(downloadFilename)}
        isExternal={getValue(isExternal)}
        onClick={getValue(isExternal) ? toggleModal : null}
      />
      {isExternal && (
        <ConfirmationDialog>
          <Modal 
            show={showModal} 
            title="Warning!"
            titleTag="h3"
            align="center"
            onClose={(value) => {
              setShowModal(value)
            }}
          >
            <ModalContent>
              {getValue(externalText)}
            </ModalContent>
            <ModalFooter>
              <Button type="primary" text="Confirm" onClick={openWindow} />
              <Button type="secondary" text="Cancel" onClick={toggleModal} />
            </ModalFooter>
          </Modal>
        </ConfirmationDialog>
      )}
    </>
  )
}

export default ButtonAcousticData
