import { Container,SimpleGrid,Heading } from "@chakra-ui/react";
import Section from "../components/section";
import { ProjectGridItem } from "../components/grid-item";
import pathFindingThumb from '../public/projects/pathFinding.gif'
import leetTrackThumb from '../public/projects/LeetTrack.png'
import nimbleThumb from '../public/projects/nimble.png'
import loraThumb from '../public/projects/lorasharkDesign.png'
import schedulerThumb from '../public/projects/courseScheduler.png'
import swiftThumb from '../public/projects/swift.png'
import reutersThumb from '../public/projects/reuters2.png'
import Layout from '../components/layouts/article'


const Projects = () => {
  return (
  <Layout title='Projects'>
    <Container>
      <Heading as='h3' fontSize={20} my={4}>
        Projects
      </Heading>
      <SimpleGrid columns={[1,1,2]} gap={6}>
      <Section delay={0.1}>
          <ProjectGridItem id='PathFinder' title='Path Finding visualizer' thumbnail={pathFindingThumb}>
            Interactive Visualization tool for path-finding algorithms.
          </ProjectGridItem>
        </Section>
        <Section delay={0.1}>
          <ProjectGridItem id='LoraShark' title='LoRaWan Sniffer' thumbnail={loraThumb}>
            Gateway and Sniffer for LoRaWan Protocol
          </ProjectGridItem>
        </Section>
        <Section delay={0.1}>
        <ProjectGridItem id='LeetTrack' title='Leetcode Tracker' thumbnail={leetTrackThumb}>
            Tool for preparing to technical interviews that has everything you need!
          </ProjectGridItem>
        </Section>
        <Section delay={0.1}>
          <ProjectGridItem id='ReutersAnalyzer' title='ReutersAnalyzer' thumbnail={reutersThumb}>
            Tool to track sentinment in the articles and overlay that data with stock prices
          </ProjectGridItem>
        </Section>
        <Section delay={0.1}>
          <ProjectGridItem id='Swift' title='My attempts at Swift' thumbnail={swiftThumb}>
            Twitter and Instagram clones built with Swift
          </ProjectGridItem>
        </Section>
        <Section delay={0.1}>
          <ProjectGridItem id='Scheduler' title='Course Scheduler' thumbnail={schedulerThumb}>
            CS Course Scheduler
          </ProjectGridItem>
        </Section>
        <Section delay={0.1}>
          <ProjectGridItem id='Nimble' title='Nimble' thumbnail={nimbleThumb}>
            A small project that aims to equally distribute tasks between team members.
          </ProjectGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
  )
}

export default Projects;

