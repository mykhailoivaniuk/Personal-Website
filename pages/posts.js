import {Container, Heading, SimpleGrid} from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { GridItem} from '../components/grid-item';
import sampleThumb from '../public/images/comingSoonNeon.jpeg'


const Posts = () => {
  return (
    <Layout title='Posts'>
      <Container>
        <Heading as='h3' variant='section-title'>
          Posts
        </Heading>
        <SimpleGrid columns={[1,1,2]} gap={6}>
          <Section delay={0.1}>
              <GridItem title='Post 1' thumbnail={sampleThumb} href='/404'>
                Under development
              </GridItem>
          </Section>
          <Section delay={0.2}>
              <GridItem title='Post 2' thumbnail={sampleThumb} href='/404'>
                Under development
              </GridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>

  )
}

export default Posts
