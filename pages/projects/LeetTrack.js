import { Container,Badge,List,ListItem,Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title,ProjectImage,Meta } from "../../components/project";
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';
import {GoOctoface} from "react-icons/go";


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
            <Link href='https://leettrack-411d7.web.app/' isExternal display='inline-flex'> Source &nbsp; <GoOctoface mx='2px'/> </Link>
            </span>
          </ListItem>
        </List>
        <ProjectImage src='/projects/LeetTrack.png' alt='LeetTrack'/>
      </Container>
    </Layout>
  )
}

export default Project