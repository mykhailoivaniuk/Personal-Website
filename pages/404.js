import NextLink from 'next/link';
import { Container,Box,Divider,Button,Text,Heading } from '@chakra-ui/react';

const NotFound = () => {
  return (
    <Container>
      <Box align='center' my={3}>
        <Heading as='h1'>Page Not Found</Heading>
        <Text> The page you&apos;re looking for was not found. </Text>
      </Box>
      <Divider my={6}/>

      <Box my={6} align='center'>
        <NextLink href='/'>
          <Button colorScheme='teal'>
            Return to the home page
          </Button>
        </NextLink>
      </Box>
    </Container>
  )

}

export default NotFound;