import { Container,List,ListItem,Link,Button,Icon } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title,ProjectImage,Meta } from "../../components/project";
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';
import {IoLogoGithub} from "react-icons/io";


const Project = () => {
  return (
    <Layout title='Nimble'>
      <Container>
        <Title>
          Nimble    
          <span display='inline-flex'>
            <Link href='https://github.com/397-f21/coffee-nimble' target='_blank' isExternal> 
              <Button variant='ghost' colorScheme='purple' rightIcon={<Icon as={IoLogoGithub}/>}>
                Source
              </Button>
            </Link>
        </span>
        </Title>
        <P>
          Nimble is a small tool we built for distributing tasks between team members based on 
          task difficulty and task priority. We also learned how to setup CI/CD pipeline using Cypress and 
          Github Actions for automatic testing and deployment.
        </P>
        <List my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://nimble-1e01f.web.app/' 
            isExternal> Nimble <ExternalLinkIcon mx='2px'/> </Link>
          </ListItem>
          <ListItem>
            <Meta>Built with</Meta>
            <span>React, Firebase, Cypress, Github Actions</span>
          </ListItem>
        
        </List>
        <ProjectImage src='/projects/nimble.png' alt='PacketDissection'/>
      </Container>
    </Layout>
  )
}

export default Project