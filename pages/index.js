import {Container,Box,Heading,Image,useColorModeValue} from '@chakra-ui/react';


const Page = () => {
  return (
    <Container>
      <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} p={3} mb={6} align='center'>
      Hello, I am junior studying CS at Northwestern!
      </Box>
      <Box display={{md: 'flex'}}>
        <Box flexGrow={1}>
          <Heading as='h2' variant="page-title">
            Misha Ivaniuk
          </Heading>
          <p> Junior majoring in Computer Science and Statistics with experience in Python,
            Javascript and Java interested in a way technology can be used to drive impact 
            in all industries. </p>
        </Box>
        <Box flexShrink={1}  
            mt={{base: 4, md: 0}} 
            ml={{md: 6}}
            align='center'>
          <Image borderColor='whiteAlpha.800'
                borderWidth={2}
                borderStyle='solid'
                maxWidth="100px"
                display='inline-block'
                borderRadius='full'
                alt='Profile Image'
                src='/images/misha.png'/>
        </Box>
      </Box>
    </Container>
    
  )
}

export default Page