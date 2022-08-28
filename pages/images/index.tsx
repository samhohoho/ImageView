import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Skeleton,
  Stack,
  useDisclosure,
} from '@chakra-ui/react'
import React, {useEffect, useState} from 'react'
import {FiExternalLink, FiRepeat} from 'react-icons/fi'
import useSWR from 'swr'
import useSWRInfinite from 'swr/infinite'
import MoreImages from '../../components/image/MoreImages'
import MainLayout from '../../components/MainLayout'
import {PreviewImage} from '../../components/PreviewImage'
import {fetcher} from '../../libs/fetcher'

interface ISelectedImage {
  url: string
  link: string
}

const PAGE_SIZE = 10

const getKey = (pageIndex: any) => {
  return `https://api.unsplash.com/search/photos?client_id=N9a24y9OSM_GZ38koCo4bZs8JXcW9yEabZe7BbJUKcQ&page=${
    pageIndex + 1
  }&per_page=${PAGE_SIZE}&query=architecture&orientation=landscape`
}

export default function index() {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const [selectedImage, setSelectedImage] = useState<ISelectedImage | null>(
    null
  )

  const {data, error, mutate, size, setSize, isValidating} = useSWRInfinite(
    getKey,
    fetcher
  )

  const issues: any = data ? [].concat(...data) : []
  const isLoadingInitialData = !data && !error
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === 'undefined')
  const isEmpty = data?.[0]?.length === 0
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE)
  const isRefreshing = isValidating && data && data.length === size

  const openPreview = ({url, link}: {url: string; link: string}) => {
    setSelectedImage({url, link})
    onOpen()
  }

  // const arr = [
  //   {results: [{links: ''}, {links: ''}, {links: ''}]},
  //   {results: [{links: ''}, {links: ''}, {links: ''}]},
  // ]

  if (data) {
    const arr = []

    for (let i = 0; i < issues.length; i++) {
      let newArr = issues[i].results

      for (let j = 0; j < newArr.length; j++) {
        arr.push({
          id: newArr[j].id,
          url: newArr[j].urls.regular,
          likes: newArr[j].likes,
          name: newArr[j].user.name,
          link: newArr[j].links.html,
          author: newArr[j].user.links.html,
          download: newArr[j].links.download,
        })
      }
    }

    console.log(issues)

    return (
      <MainLayout>
        <Hero />
        <Container maxW={'container.xl'}>
          <SimpleGrid
            minChildWidth="30%"
            spacing={'15px'}
            columns={{base: 1, md: 2, lg: 3}}
          >
            {arr.map((e: any) => (
              <MoreImages key={e.id} data={e} openPreview={openPreview} />
            ))}

            {isLoadingInitialData ||
              (isLoadingMore &&
                Array.from(Array(issues.length), (x, i) => i).map((s, i) => (
                  <Skeleton key={i} h={'250px'} w={'100%'} />
                )))}
          </SimpleGrid>
          {/* {selectedImage && (
            <PreviewImage
              isOpen={isOpen}
              onClose={onClose}
              image={selectedImage}
            />
          )} */}
          <Box textAlign={'center'} mt={8}>
            <Button leftIcon={<FiRepeat />} onClick={() => setSize(size + 1)}>
              Load More
            </Button>
          </Box>
        </Container>

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
                <Img src={selectedImage?.url} />
              </Box>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
              <Button
                ml={3}
                variant="ghost"
                as="a"
                rightIcon={<FiExternalLink />}
                href={selectedImage?.link}
                target="_blank"
                mr={3}
              >
                Open in Unsplash
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </MainLayout>
    )
  }
}

const Hero = () => {
  return (
    <Container maxW={'6xl'}>
      <Stack
        textAlign={'center'}
        align="center"
        spacing={{base: 8, md: 4}}
        py={{base: 20, md: 28}}
      >
        <Heading
          letterSpacing={'tight'}
          fontWeight="extrabold"
          fontSize={{base: '2xl', sm: '4xl', md: '5xl'}}
        >
          ARCHITECTURE
        </Heading>
        <Heading
          letterSpacing={'tight'}
          fontWeight="extrabold"
          fontSize={{base: '2xl', sm: '4xl', md: '5xl'}}
        >
          Something
        </Heading>
      </Stack>
    </Container>
  )
}
