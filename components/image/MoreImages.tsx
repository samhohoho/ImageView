import {
  Box,
  Flex,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import {AiOutlineArrowUp} from 'react-icons/ai'

export default function MoreImages({data, openPreview}: any) {
  const {url, likes, name, link, author} = data
  return (
    <Box
      backgroundColor="gray.100"
      borderRadius={['sm', null, 'md']}
      overflow="hidden"
      fontSize={'smaller'}
    >
      <Box
        h="250px"
        bgImage={`url(${url})`}
        bgSize={'cover'}
        objectFit="cover"
        overflow="hidden"
        onClick={() => openPreview({url, link})}
      >
        {/* <Image src={url} alt="" /> */}
      </Box>
      <Flex px="4" py="2" alignItems={'center'} justifyContent="space-between">
        <Text>
          Published by{' '}
          <Link fontWeight={'semibold'} href={author} isExternal>
            {name}
          </Link>
        </Text>
        <Flex alignItems={'center'} gap={2}>
          <AiOutlineArrowUp />
          <Text lineHeight={0}>{likes}</Text>
        </Flex>
      </Flex>
    </Box>
  )
}
