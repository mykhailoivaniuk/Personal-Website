import { Container } from "@chakra-ui/react";
import { PostTitle } from "../../components/project";
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';


const Post = () => {
  return (
    <Layout title='Essay2'>
      <Container>
        <PostTitle>
         Describe your most meaningful experience(s) and why they matter to you 
        </PostTitle>
        <P>
          I was super passionate about studying religious studies when I first arrived on campus. I was planning to take those interesting philosophy and history classes to learn more about the history of religion. I was going to analyze works of the most prominent thought leaders and hundred year old religious texts.
        </P>
        <P>
          Yet, something felt wrong. Every essay did not prompt us to explore new ideas, but rather analyze, extend someone’s ideas. Intro to Programming I was taking to satisfy my curriculum requirement felt like a breath of fresh air. We were allowed to experiment, design our own programs, try out iteration vs recursion and compare the two for ourselves. The ability to create something with a series of carefully crafted Racket functions felt groundbreaking. That was the first time in my life I have made something completely from scratch by myself. The class culminated in us making a snake game and I spent way too much time on it, but it felt great. I learned how to build things.
        </P>
        <P>
          I could not go back to Religious Studies ever since. Programming allows me to create disproportionate amounts of value by just having my laptop and Internet connection. It allows me to be in the creators seat and continuously experiment with new ideas and concepts while learning something new every day. That first Computer Science class helped me transition from being an observer to being a creator who is not afraid to fail hundreds of times until making something great.
        </P>
      </Container>
    </Layout>
  )
}

export default Post
