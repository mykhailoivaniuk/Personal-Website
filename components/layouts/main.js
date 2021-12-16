import Head from "next/head";
import NavBar from '../navbar';
import {Box, Container} from "@chakra-ui/react";

const Main = ({children, router}) => {
  return (
    <Box as='main' pb={8}>
      <Head meta='viewport' content='width=device-width,initial-scale=1'>
        <title> Misha Ivaniuk - Homepage </title>
      </Head>
      <NavBar path={router.asPath} />
      <Container maxW='container.md' pt={14}>
        {children}
      </Container>
    </Box>
  )
}
export default Main

