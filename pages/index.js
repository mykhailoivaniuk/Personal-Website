import {Container,Box,Heading} from '@chakra-ui/react';


const Page = () => {
  return (
    <Container>
      <Box borderRadius='lg' bg='red' p={3} mb={6} align='center'>
      Hello, I am junior studying CS at Northwestern!
      </Box>
      <Box display={{md: 'flex'}}>
        <Box flexGrow={1}>
          <Heading as='h2' variant="page-title">
            Misha Ivaniuk
          </Heading>
          <p>Junior majoring in Computer Science and Statistics with experience in Python,Javascript and Java interested in a way technology can be used to drive impact in all industries. </p>
        </Box>
      </Box>
    </Container>
    
  )
}

export default Page