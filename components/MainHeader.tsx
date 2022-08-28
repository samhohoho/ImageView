import {Box, Flex, Link, Stack} from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'
import {BsImage} from 'react-icons/bs'
import {useRouter} from 'next/router'

export default function MainHeader() {
  return (
    <Box position="sticky" top={0} color="gray.300" bg="rgba(0,0,0,0.8)">
      <Flex minH={'50px'} alignItems="center" justifyContent={'center'}>
        <DesktopNav />
      </Flex>
    </Box>
  )
}

interface NavItem {
  label: string
  href: string
  isExternal: boolean
}

const DesktopNav = () => {
  const router = useRouter()
  const path = router.asPath

  const NAV_ITEMS: Array<NavItem> = [
    {label: 'About', href: '/images', isExternal: false},
    {label: 'Blog', href: '/#', isExternal: false},
    {label: 'Register', href: '/#', isExternal: false},
    {label: 'Login', href: '/#', isExternal: false},
  ]

  return (
    <Stack direction={'row'} spacing={8} alignItems="center">
      <Box>
        <NextLink href="/">
          <Link fontSize={'lg'}>
            <BsImage />
          </Link>
        </NextLink>
      </Box>

      {NAV_ITEMS.map((navItem) => {
        let isActivePage: boolean = path === navItem.href

        return (
          <Box key={navItem.label}>
            <NextLink href={navItem.href} passHref>
              <Link
                isExternal={navItem.isExternal}
                fontWeight="500"
                // p={2}
                fontSize={'md'}
                borderBottom={isActivePage ? '1px' : '0'}
                color={isActivePage ? 'white' : ''}
                _hover={{
                  textDecoration: 'none',
                  color: 'white',
                  borderBottom: '1px',
                }}
              >
                {navItem.label}
              </Link>
            </NextLink>
          </Box>
        )
      })}
    </Stack>
  )
}
