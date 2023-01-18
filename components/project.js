import NextLink from 'next/link';
import {Box,Heading,Image,Link,Badge} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

export const Title = ({ children }) => {
  return (
    <Box>
      <NextLink href='/projects'>
        <Link>Projects</Link>
      </NextLink>
      <span>
        &nbsp;
        <ChevronRightIcon/>
        &nbsp;
      </span>
      <Heading dispaly='inline-block' mb={3} as='h3' fontSize={20}>
        {children}
      </Heading>
    </Box>
  )
}

export const PostTitle = ({ children }) => {
  return (
    <Box>
      <NextLink href='/posts'>
        <Link>Posts</Link>
      </NextLink>
      <span>
        &nbsp;
        <ChevronRightIcon/>
        &nbsp;
      </span>
      <Heading dispaly='inline-block' mb={3} as='h3' fontSize={20}>
        {children}
      </Heading>
    </Box>
  )
}

export const ProjectImage = ({ src, alt }) =>{
  return (
    <Image src={src} alt={alt} borderRadius='lg' w='full' mb={3}/>
  )
}

export const Meta = ({ children }) => {
  return (
    <Badge colorScheme='purple' mr={2}>
      {children}
    </Badge>
  )
}
