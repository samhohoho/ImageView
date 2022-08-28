import React, {useState} from 'react'
import styles from './Image.module.css'
import {FiExternalLink} from 'react-icons/fi'
import {HiDownload} from 'react-icons/hi'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Link,
  VStack,
  HStack,
} from '@chakra-ui/react'

const OVERLAY: any = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 1000,
}

const Image = ({imageUrl, modalTitle, unsplashUrl, downloadUrl}: any) => {
  const [showMoadal, setShowModal] = useState(false)
  const {isOpen, onOpen, onClose} = useDisclosure()

  // console.log(unsplashUrl)

  return (
    <>
      {showMoadal && (
        <div>
          <div onClick={() => setShowModal((prev) => !prev)} style={OVERLAY} />
          <span style={{position: 'absolute', color: 'white', zIndex: 10000}}>
            {imageUrl}
          </span>
        </div>
      )}
      <div className={styles.image_container}>
        {/* <div
        className={styles.image}
        style={{backgroundImage: `url(${imageUrl})`}}
      ></div> */}
        <img src={imageUrl} alt="" onClick={onOpen} />
      </div>
      <Modal
        isCentered
        scrollBehavior="inside"
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
        size="xl"
      >
        <ModalOverlay />
        <ModalContent overflowY="scroll">
          <ModalHeader>{modalTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <img src={imageUrl} alt="" />
          </ModalBody>
          <ModalFooter>
            <HStack>
              <Button colorScheme="blue" onClick={onClose}>
                Close
              </Button>
              {/* <Link href={downloadUrl} isExternal> */}
              <Button as="a" href={downloadUrl} target="_blank">
                <HiDownload />
              </Button>
              {/* </Link> */}
              <Link href={unsplashUrl} isExternal>
                <Button rightIcon={<FiExternalLink />}>Open in Unsplash</Button>
              </Link>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Image
