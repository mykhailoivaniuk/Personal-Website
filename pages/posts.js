import {Container, Heading, SimpleGrid} from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { PostGridItem } from '../components/grid-item';
import kpThumb from '../public/images/kpThumb2.jpeg'


const Posts = () => {
  return (
    <Layout title='Posts'>
      <Container>
        <Heading as='h3' variant='section-title'>
          Posts
        </Heading>
        <SimpleGrid columns={[1,1,2]} gap={6}>
          <Section delay={0.1}>
              <PostGridItem id="Essay1" title='What impact do I want to have on the world?' thumbnail={kpThumb}>
                
              </PostGridItem>
          </Section>
          <Section delay={0.2}>
              <PostGridItem id="Essay2" title='My most meaningful experience' thumbnail={kpThumb} >
                
              </PostGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>

  )
}

export default Posts
