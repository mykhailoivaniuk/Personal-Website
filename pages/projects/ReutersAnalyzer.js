import { Container,List,ListItem,Link,Button,Icon } from "@chakra-ui/react";
import { Title,ProjectImage,Meta } from "../../components/project";
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';
import {IoLogoGithub} from "react-icons/io";


const Project = () => {
  return (
    <Layout title='ReutersAnalyzer'>
      <Container>
        <Title>
          ReutersAnalyzer    
          <span display='inline-flex'>
            <Link href='https://github.com/mykhailoivaniuk/reutersanalyzer' target='_blank' isExternal> 
              <Button variant='ghost' colorScheme='purple' rightIcon={<Icon as={IoLogoGithub}/>}>
                Source
              </Button>
            </Link>
        </span>
        </Title>
        <P>
          ReutersAnalyzer is a Python package open for downloading at &nbsp;
          <Link href="https://pypi.org/project/reutersana7yzer/" target="_blank" isExternal>
           PyPi.&nbsp;
          </Link>
          It provides the ability to download news articles about stocks and 
          extract stocks mentioned in the article. Once the stocks are extracted, it connects to the
          Polygon or IEX API(whichever one is more convenient for user) and pulls the data for the stocks
          mentioned in that article after 0, 1 and 10 days after the date article was published.
        </P>
        <List my={4}>
          <ListItem>
            <Meta>Built with</Meta>
            <span>Python, IEX API, BeautifulSoup</span>
          </ListItem>
        
        </List>
        <ProjectImage src='/projects/reuters2.png' alt='reuters'/>
        <ProjectImage src='/projects/dataExample.png' alt='dataExample'/>
      </Container>
    </Layout>
  )
}

export default Project