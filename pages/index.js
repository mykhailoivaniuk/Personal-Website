import NextLink from 'next/link';
import {Container,Button,Box,Heading,Image,useColorModeValue,Link, ListItem,List,Icon,SimpleGrid,Text} from '@chakra-ui/react';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { ExternalLinkIcon,ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection,Bio2Years,BioFall,BioWinter,BioSummer } from '../components/bio';
import Layout from '../components/layouts/article';
import { IoLogoGithub, IoLogoTwitter} from 'react-icons/io';
import { TechnologyGridItem } from '../components/grid-item';
import javaLogo from '../public/images/java.svg'
import pythonLogo from '../public/images/python.svg'
import reactLogo from '../public/images/react.svg'
import jsLogo from '../public/images/javascriptlogo.svg'
import postgreLogo from '../public/images/postgresql.svg'


const Page = () => {
  return (
  <Layout>
    <Container>
      <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} p={3} mb={6} align='center'>
      Hello, I am junior studying CS at Northwestern!
      </Box>
      <Box display={{md: 'flex'}}>
        <Box flexGrow={1}>
          <Heading as='h2' variant="page-title">
            Misha Ivaniuk
          </Heading>
          <Link href='mailto:mykhailo.ivaniuk@gmail.com' target='_blank' isExternal colorScheme='purple'> 
            <Text color = 'purple.400'
                fontFamily='M PLUS Rounded 1c'
                fontWeight='bold'
                ml={0.5}>
                mykhailo.ivaniuk@gmail.com
            </Text>
          </Link>
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
      <Heading as='h3' variant='section-title'> About me </Heading>
      <Paragraph> Junior majoring in Computer Science and Statistics with experience in Python,
            Javascript and Java interested in a way technology can be used to drive impact 
            in all industries. It all wasn&apos;t possible without{' '}
            <Link href='https://www.ugs.foundation/' isExternal  color='purple.400'>
            Ukraine Global Scholars <ExternalLinkIcon mx='2px' />
            </Link>  
      </Paragraph>
      <Box align='center' my={4}>
        <NextLink href='/projects'>
          <Button rightIcon={<ChevronRightIcon/>} colorScheme='purple'>
            My Projects
          </Button>
        </NextLink>
      </Box>
    </Section>
    <Section delay={0.2}>
      <Heading as='h3' variant='section-title'> Short Bio </Heading>
      <BioSection>
        <BioSummer>Summer 2022</BioSummer>Intern at Palantir Technologies
      </BioSection>
      <BioSection>
        <BioWinter>Winter 2022</BioWinter>Peer mentor for {' '}
        <Link href='https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/397-497-23.html' 
              isExternal  
              color='purple.400'>
        CS497 - Data Privacy
        </Link>
      </BioSection>
      <BioSection>
        <BioFall>Fall 2021</BioFall>Peer mentor for {' '}
        <Link href='https://catalogs.northwestern.edu/undergraduate/courses-az/stat/' 
              isExternal  
              color='purple.400'>
        Stat303 - Data Science
        </Link>
      </BioSection>
      <BioSection>
        <Bio2Years>2020-2021</Bio2Years> Intern at Kargo Technologies
      </BioSection>
      <BioSection>
        <Bio2Years>2019-2023</Bio2Years> Combined BS/MS in Computer Science at Northwestern
      </BioSection>
    </Section>
    <Section delay={0.3}>
      <Heading as='h3' variant='section-title' my={8}> 
        Technologies I&apos;ve worked with 
      </Heading>
      <SimpleGrid columns={6} gap={6}>
          <TechnologyGridItem title='java' thumbnail={javaLogo}/>
          <TechnologyGridItem title='js' thumbnail={jsLogo}/>
          <TechnologyGridItem title='python' thumbnail={pythonLogo}/>
          <TechnologyGridItem title='postgre' thumbnail={postgreLogo}/>
          <TechnologyGridItem title='react' thumbnail={reactLogo}/>
      </SimpleGrid>
    </Section>
    <Section delay={0.4}>
      <Heading as='h3' variant='section-title'>
        On the web
      </Heading>
      <List>
        <ListItem>
          <Link isExternal
                target='_blank'
                href='https://github.com/mykhailoivaniuk/projects'>
          <Button variant='ghost'
                  colorScheme='purple'
                  leftIcon={<Icon as={IoLogoGithub}/>}>
            @mykhailoivaniuk
          </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link isExternal
                target='_blank'
                href='https://twitter.com/IvaniukMisha'>
          <Button variant='ghost'
                  colorScheme='purple'
                  leftIcon={<Icon as={IoLogoTwitter}/>}>
            @mykhailoivaniuk
          </Button>
          </Link>
        </ListItem>
      </List>
    </Section>
    <Section delay={0.5}>
    <Box align='center' my={4}>
        <NextLink href='/posts'>
          <Button rightIcon={<ChevronRightIcon/>} colorScheme='purple'>
            My Posts
          </Button>
        </NextLink>
      </Box>
    </Section>
    </Container>
  </Layout>
    
  )
}

export default Page