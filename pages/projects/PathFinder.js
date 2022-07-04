import { Container,List,ListItem,Link,Button,Icon } from "@chakra-ui/react";
import { Title,ProjectImage,Meta } from "../../components/project";
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';
import {IoLogoGithub} from "react-icons/io";


const Project = () => {
  return (
    <Layout title='PathFinder'>
      <Container>
        <Title>
          Path-Finding Visualizer   
          <span display='inline-flex'>
            <Link href='https://github.com/mykhailoivaniuk/Path_Finder' target='_blank' isExternal> 
              <Button variant='ghost' colorScheme='purple' rightIcon={<Icon as={IoLogoGithub}/>}>
                Source
              </Button>
            </Link>
        </span>
        </Title>
        <P>
          Interactive python program that allows users to see how path-finding 
          algorithms work on a 2D grid. Featured algorithms are: Dijkstra, A*, DFS, BFS.
          For a guide on how to use it visit the source page.
        </P>
        <List my={4}>
          <ListItem>
            <Meta>Built with</Meta>
            <span>Python, PyGame</span>
          </ListItem>
        </List>
        <ProjectImage src='/projects/pathFinding.gif' alt='PathFinder'/>
      </Container>
    </Layout>
  )
}

export default Project