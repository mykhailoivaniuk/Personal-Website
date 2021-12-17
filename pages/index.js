import NextLink from 'next/link';
import {Container,Button,Box,Heading,Image,useColorModeValue,Link} from '@chakra-ui/react';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { ExternalLinkIcon,ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection,BioYear,Bio2Years,BioSeason } from '../components/bio';
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
    <Section delay={0.1}>
      <Heading as='h3' variant='section-title'> Work </Heading>
      <Paragraph> Junior majoring in Computer Science and Statistics with experience in Python,
            Javascript and Java interested in a way technology can be used to drive impact 
            in all industries. It all wasn&apos;t possible without{' '}
            <Link href='https://www.ugs.foundation/' isExternal>
            Ukraine Global Scholars <ExternalLinkIcon mx='2px' />
            </Link>  
      </Paragraph>
      <Box align='center' my={4}>
        <NextLink href='/projects'>
          <Button rightIcon={<ChevronRightIcon/>} colorScheme='teal'>
            My Projects
          </Button>
        </NextLink>
      </Box>
    </Section>
    <Section delay={0.2}>
      <Heading as='h3' variant='section-title'> Short Bio </Heading>
      <BioSection>
        <Bio2Years>2019-2023</Bio2Years> Combined BS/MS in Computer Science at Northwestern
      </BioSection>
      <BioSection>
        <Bio2Years>2020-2021</Bio2Years> Intern at Kargo Technologies
      </BioSection>
      <BioSection>
        <BioSeason>Fall 2021</BioSeason>Peer mentor for {' '}
        <Link href='https://catalogs.northwestern.edu/undergraduate/courses-az/stat/' isExternal>Stat303 - Data Science</Link>
      </BioSection>
      <BioSection>
        <BioSeason>Wint 2022</BioSeason>Peer mentor for {' '}
        <Link href='https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/397-497-23.html' isExternal>
        CS497 - Data Privacy</Link>
      </BioSection>
      <BioSection>
        <BioYear>2022</BioYear>Intern at Palantir Technologies
      </BioSection>
    </Section>
    <Section>
    <Heading as='h3' variant='section-title'> Technologies I&apos;ve worked with </Heading>
    </Section>
    </Container>
    
  )
}

export default Page