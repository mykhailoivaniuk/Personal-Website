import { Container,Link,Button,Icon } from "@chakra-ui/react";
import { Title } from "../../components/project";
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';
import {IoLogoGithub} from "react-icons/io";


const Project = () => {
  return (
    <Layout title='Compiler'>
      <Container>
        <Title>
          Compiler in Kotlin
          <span display='inline-flex'>
            <Link href='/404' target='_blank' isExternal> 
              <Button variant='ghost' colorScheme='purple' rightIcon={<Icon as={IoLogoGithub}/>}>
                In Progress
              </Button>
            </Link>
          </span>
        </Title>
        <P>
          During one of my classes I&apos;ve worked on an interpreter that supported bindings, state 
          deferred substitutions, control types, garbage collection.
         In order to learn Kotlin better I plan on writing an interpreter and eventually a compiler that will support
        all those features in JS like language.
        </P>
      </Container>
    </Layout>
  )
}

export default Project