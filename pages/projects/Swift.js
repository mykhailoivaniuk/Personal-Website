import { Container,List,ListItem,Link,Button,Icon} from "@chakra-ui/react";
import { Title,ProjectImage,Meta } from "../../components/project";
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';
import {IoLogoGithub} from "react-icons/io";
import { SimpleGrid } from "@chakra-ui/react";

const Project = () => {
  return (
    <Layout title='Swift'>
      <Container>
        <Title>
           Swift Apps
           <span display='inline-flex'>
            <Link href='https://github.com/mykhailoivaniuk/Twitter_ios_clone' target='_blank' isExternal> 
              <Button variant='ghost' colorScheme='purple' rightIcon={<Icon as={IoLogoGithub}/>}>
                Twitter Source
              </Button>
            </Link>
        </span>
        <span display='inline-flex'>
            <Link href='https://github.com/mykhailoivaniuk/Instagram' target='_blank' isExternal> 
              <Button variant='ghost' colorScheme='purple' rightIcon={<Icon as={IoLogoGithub}/>}>
                Instagram Source
              </Button>
            </Link>
        </span>
        </Title>
        <P>
          These are two small clones of Twitter and Instagram that implement some part of
          the original apps functionality. I wanted to learn some mobile development, however,
          using Swift/Kotlin for writing two versions of the app is too expensive and time consuming
          , so I decided to use React Native whenever I need to write a mobile app.
        </P>
        <List my={4}>
          <ListItem>
            <Meta>Built with</Meta>
            <span>Swift</span>
          </ListItem>
        </List>
        <SimpleGrid columns={[1,1,2]} gap={6}>
        <ProjectImage src='https://camo.githubusercontent.com/49baf5269b70741073c7796360b22e3b96bb75c3612cc6101ed502e76c6060ac/687474703a2f2f672e7265636f726469742e636f2f42436e71716570687a732e676966' alt='Instagram'/>
        <ProjectImage src='https://camo.githubusercontent.com/e34e41d24d4518c51b8ba37447379168b43fb8e6eea3e5a3111b7c40362c6282/687474703a2f2f672e7265636f726469742e636f2f3744446535727349636c2e676966' alt='Twitter'/>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Project