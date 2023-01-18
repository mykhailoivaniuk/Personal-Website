import NextLink from 'next/link';
import {Container,Button,Box,Heading,Image,useColorModeValue,Link, ListItem,List,Icon,SimpleGrid,Text} from '@chakra-ui/react';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection,BioYear } from '../components/bio';
import Layout from '../components/layouts/article';
import { IoLogoGithub, IoLogoTwitter,IoLogoLinkedin} from 'react-icons/io';
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
        <Text fontWeight='bold' >
          Hello, I am junior studying CS at Northwestern!
        </Text>
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
      <Paragraph> Hi, I am an undergraduate student at {' '}
       <Link href='https://www.northwestern.edu/' color='purple.400' target='_blank'>
       Northwestern University
       </Link> from Ukraine. I am double-majoring in {' '}
        <Link href='https://www.mccormick.northwestern.edu/computer-science/' target='_blank' color='purple.400'>
        Computer Science
        </Link> and {' '}
        <Link href='https://www.math.northwestern.edu/' target='_blank' color='purple.400'>
        Math
        </Link>, as well as hoping to do a combined 
        {' '}
        <Link href='https://www.mccormick.northwestern.edu/academics/undergraduate/programs/honors-and-combined-degrees/combined-bachelors-masters-program/' 
              target='_blank' 
              color='purple.400'>
        BS/MS 
        </Link> program with Artificial Intelligence track.
      </Paragraph>
      <Paragraph>
        Right now I&nbsp;m playing around with compilers and large language models. Check out my latest 
        <Link href="https://kiddo.ai" target="_blank" color="purple.400"> project </Link>.
      </Paragraph>
      <Paragraph>
      This wouldn&apos;t have been possible without {' '}
            <Link href='https://www.ugs.foundation/' 
                  isExternal  
                  color='purple.400'
                  target='_blank'>
             Ukraine Global Scholars 501(c)(3)
             </Link> - a non-profit that assists selected students in applying to US schools. To 
        give back, I helped select new cohorts, organize their summer bootcamp, and mentor students&apos; application process.
      </Paragraph>
      <Paragraph>
      To learn about who influences me intellectually, {' '}
            <Link href='https://twitter.com/IvaniukMisha' 
                  isExternal  
                  color='purple.400'
                  target='_blank'>
             follow me on Twitter! 
            </Link> I don&apos;t usually post but I often like or repost things that interest me.
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
        <BioYear>2022</BioYear>Intern at Palantir Technologies
      </BioSection>
      <BioSection>
        <BioYear>2022</BioYear>Peer mentor for {' '}
        <Link href='https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/397-497-23.html' 
              isExternal  
              color='purple.400'>
        CS497 - Data Privacy
        </Link>
      </BioSection>
      <BioSection>
        <BioYear>2021</BioYear>Peer mentor for {' '}
        <Link href='https://catalogs.northwestern.edu/undergraduate/courses-az/stat/' 
              isExternal  
              color='purple.400'>
        Stat303 - Data Science
        </Link>
      </BioSection>
      <BioSection>
        <BioYear>2020</BioYear>Intern at Kargo Technologies
      </BioSection>
      <BioSection>
        <BioYear>2023</BioYear>BS/MS in Computer Science at &nbsp;Northwestern
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
            @IvaniukMisha
          </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link isExternal
                target='_blank'
                href='https://www.linkedin.com/in/mykhailoivaniuk/'>
          <Button variant='ghost'
                  colorScheme='purple'
                  leftIcon={<Icon as={IoLogoLinkedin}/>}>
            Misha Ivaniuk
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
