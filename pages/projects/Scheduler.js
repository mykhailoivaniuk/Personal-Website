import { Container,List,ListItem,Link,Button,Icon } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title,ProjectImage,Meta } from "../../components/project";
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';
import {IoLogoGithub} from "react-icons/io";


const Project = () => {
  return (
    <Layout title='Scheduler'>
      <Container>
        <Title>
          CS Course Scheduler    
          <span display='inline-flex'>
            <Link href='https://github.com/mykhailoivaniuk/scheduler' target='_blank' isExternal> 
              <Button variant='ghost' colorScheme='purple' rightIcon={<Icon as={IoLogoGithub}/>}>
                Source
              </Button>
            </Link>
        </span>
        </Title>
        <P>
         Super simple CS course scheduler that shows conflicts between different classes.
         This was one of my first attempts at React and JS.
        </P>
        <List my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://scheduler-bcc1f.web.app/' 
            isExternal> Course Scheduler <ExternalLinkIcon mx='2px'/> </Link>
          </ListItem>
          <ListItem>
            <Meta>Built with</Meta>
            <span>React, Firebase</span>
          </ListItem>
        
        </List>
        <ProjectImage src='/projects/courseScheduler.png' alt='PacketDissection'/>
      </Container>
    </Layout>
  )
}

export default Project