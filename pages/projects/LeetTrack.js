import { Container,Badge,List,ListItem,Link,Button,Icon } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title,ProjectImage,Meta } from "../../components/project";
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';
import {IoLogoGithub} from "react-icons/io";


const Project = () => {
  return (
    <Layout title='LeetTrack'>
      <Container>
        <Title>
          LeetTrack <Badge>2021-</Badge>
        </Title>
        <P>
          An app to track your progress across Leetcode problems to be prepared for your coding interview!
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://leettrack-411d7.web.app/' isExternal> LeetTrack <ExternalLinkIcon mx='2px'/> </Link>
          </ListItem>
          <ListItem>
            <Meta>Built with</Meta>
            <span>ReactJS,localStorage</span>
          </ListItem>
          <ListItem>
            <Meta>Source Code</Meta>
            <span display='inline-flex'>
            <Link href='https://leettrack-411d7.web.app/' target='_blank' isExternal> 
              <Button variant='ghost' colorScheme='purple' rightIcon={<Icon as={IoLogoGithub}/>}>
                Source
              </Button>
            </Link>
            </span>
          </ListItem>
        </List>
        <ProjectImage src='/projects/LeetTrack.png' alt='LeetTrack'/>
      </Container>
    </Layout>
  )
}

export default Project