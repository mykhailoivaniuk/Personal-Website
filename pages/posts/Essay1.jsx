import { Container } from "@chakra-ui/react";
import { PostTitle } from "../../components/project";
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';


const Post = () => {
  return (
    <Layout title='Essay1'>
      <Container>
        <PostTitle>
          What impact do you want to have on the world and why? 
        </PostTitle>
        <P> 
	I want to create 20 successful companies during my lifetime and make at least two of them publicly traded. I want to show that you can build great tech businesses with small teams and have them scaled to support millions of users. I do not know how many failed tries it will take me, but I am confident that it is possible. I think this way I will be able to create the most impact on the world. To be honest, I am not sure what kind of impact I will have, but I think by just trying to achieve my goal I will be able to help a lot of other people either by creating new products that make their lives better or by creating new opportunities for them.  
</P>
      </Container>
    </Layout>
  )
}

export default Post
