import { Container,SimpleGrid,Divider,Heading } from "@chakra-ui/react";
import Section from "../components/section";
import { ProjectGridItem } from "../components/grid-item";
import pathFindingThumb from '../public/projects/pathFinder2.png'
import leetTrackThumb from '../public/projects/LeetTrack.png'
import Layout from '../components/layouts/article'


const Projects = () => {
  return (
  <Layout>
    <Container>
      <Heading as='h3' fontSize={20} my={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1,1,2]} gap={6}>
        <Section delay={0.1}>
        <ProjectGridItem id='LeetTrack' title='Leetcode Tracker' thumbnail={leetTrackThumb}>
            Tool for preparing to technical interviews that has everything you need!
          </ProjectGridItem>
        </Section>
        <Section delay={0.1}>
          <ProjectGridItem id='pathFinder' title='Path Finding visualizer' thumbnail={pathFindingThumb}>
            Interactive Visualization tool for path-finding algorithms.
          </ProjectGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
  )
}

export default Projects;

