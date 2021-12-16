import Logo from './logo';
import NextLink from 'next/link';
import {Container,Box, Link,Stack,Heading,Flex,Menu,MenuItem,MenuList,MenuButton,IconButton,useColorModeValue} from '@chakra-ui/react';
import {HamburgerIcon} from '@chakra-ui/icons';
import Head from 'next/head';


const LinkItem = ({href,path,children}) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200','whiteAlpha.900');

  return (
    <NextLink href={href}>
      <Link p = {2} 
          bg={active? 'glassTeal' : undefined} 
          color={active? '#202023' : inactiveColor}>
      {children}
      </Link>
    </NextLink>
  )
}


const NavBar = props => {
  const { path } = props;

  return (
    <Box as='nav' 
        position='fixed' 
        w='100%' 
        bg={useColorModeValue('#ffffff40','#20202380')} 
        style={{backdropFilter:'blur(10px'}} 
        zIndex={1} 
        {...props}>
      <Container display='flex'
                  p={2}
                  maxW="container.md"
                  wrap='wrap'
                  align='center'
                  justify='space-between'>
      
        <Flex align='center' mr={5}>
          <Heading as='h1' letterSpacing={'tighter'} size='lg'>
            <Logo/>
          </Heading>
        </Flex>

        <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}>

            <LinkItem href="/projects" path={path}> Projects </LinkItem>
            <LinkItem href="/posts" path={path}> Posts </LinkItem>
            <LinkItem href="/mycv" path={path}> My CV</LinkItem>

        </Stack>
      </Container>
    </Box>
  )

}

export default NavBar;