import { Container,List,ListItem,Link,Button,Icon } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title,ProjectImage,Meta } from "../../components/project";
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';
import {IoLogoGithub} from "react-icons/io";


const Project = () => {
  return (
    <Layout title='LoraShark'>
      <Container>
        <Title>
          LoraShark     
          <span display='inline-flex'>
            <Link href='https://github.com/mykhailoivaniuk/LoRaShark' target='_blank' isExternal> 
              <Button variant='ghost' colorScheme='purple' rightIcon={<Icon as={IoLogoGithub}/>}>
                Source
              </Button>
            </Link>
        </span>
        </Title>
        
        <P>
          Internet of Things technologies have rapidly progressed during last years. 
          In response to the rapid growth of the IoT, Low Power Wide Area Network 
          (LPWAN) technologies have gained prominence. LoRaWan is one of the protocols used to enable LPWAN
          , however, it lacks a tool that lets programmer easily receive and decode LoRaWan packets. We built
          a decoder for Wireshark because of it&apos;s wide adoption and ease of usage. For technical details read our
          writeup below!
        </P>
        <List my={4}>
          <ListItem>
            <Meta>Article</Meta>
            <Link href='https://github.com/mykhailoivaniuk/LoRaShark/blob/main/LoRaShark.pdf' 
            isExternal> LoRaShark WriteUp<ExternalLinkIcon mx='2px'/> </Link>
          </ListItem>
          <ListItem>
            <Meta>Built with</Meta>
            <span>Python, C++, Heltec ESP32</span>
          </ListItem>
        
        </List>
        <ProjectImage src='/projects/dissection.png' alt='PacketDissection'/>
        <ProjectImage src='/projects/lorasharkDesign.png' alt='LoraDesign'/>
      </Container>
    </Layout>
  )
}

export default Project