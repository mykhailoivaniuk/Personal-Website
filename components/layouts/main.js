import Head from "next/head";
import NavBar from '../navbar';
import {Box, Container} from "@chakra-ui/react";
import VoxelRobot from "../voxel-robot";
import NoSsr from "../no-ssr";

const Main = ({children, router}) => {
  return (
    <Box as='main' pb={8}>
      <Head meta='viewport' content='width=device-width,initial-scale=1'>
        <meta name="description" content="Misha's homepage" />
        <meta name="author" content="Misha Ivaniuk" />
        <meta name="author" content="Mykhailo Ivaniuk" />
        <meta name="author" content="mykhailoivaniuk" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:site" content="@ivaniukmisha" />
        <meta property="og:site_name" content="Misha Ivaniuk's Homepage" />
        <title> Misha Ivaniuk - Homepage </title>
      </Head>
      <NavBar path={router.asPath} />
      <Container maxW='container.md' pt={14}>
        <NoSsr>
          <VoxelRobot/>
        </NoSsr>
        {children}
      </Container>
    </Box>
  )
}
export default Main


