import {
  Box,
  Button,
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import React from 'react'
import {FiExternalLink} from 'react-icons/fi'

export const PreviewImage = ({isOpen, onClose, image}: any) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      scrollBehavior="inside"
      size={'2xl'}
      motionPreset={'slideInBottom'}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box w={'100%'}>
            <Img src={`${image}`} />
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
          <Button
            ml={3}
            variant="ghost"
            as="a"
            rightIcon={<FiExternalLink />}
            href={''}
            target="_blank"
            mr={3}
          >
            Open in Unsplash
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
