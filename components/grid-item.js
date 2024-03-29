import NextLink from 'next/link';
import Image from 'next/image';
import {Box,Text,LinkBox,LinkOverlay} from '@chakra-ui/react'
import { Global } from '@emotion/react';
import { motion } from 'framer-motion';


export const GridItem = ({children,href,title,thumbnail}) => {
  return (
    <Box w='100%' align='center'>
      <LinkBox cursor='pointer'>
        <Image src={thumbnail}
                alt={title}
                className='grid-item-thumbnail'
                placeholder='blur'
                loading='lazy'/>
        <LinkOverlay href={href} target='_blank'> 
          <Text mt={2} >{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  )
}

export const ProjectGridItem = ({children, id, title, thumbnail}) => {
  return (
    <Box w='100%' align='center'>
      <NextLink href={`/projects/${id}`}>
        <LinkBox cursor='pointer'>
        <Image src={thumbnail}
                alt={title}
                className='grid-item-thumbnail'/>
        <LinkOverlay href={`/projects/${id}`}>
          <Text mt={2} fontSize={20}> {title}</Text>
        </LinkOverlay>
        <Text fontSize={14} mb={5}>{children}</Text>
        </LinkBox>
      </NextLink>
    </Box>
  )
}

export const PostGridItem = ({children, id, title, thumbnail}) => {
  return (
    <Box w='100%' align='center'>
      <NextLink href={`/posts/${id}`}>
        <LinkBox cursor='pointer'>
        <Image src={thumbnail}
                alt={title}
                className='grid-item-thumbnail'/>
        <LinkOverlay href={`/posts/${id}`}>
          <Text mt={2} fontSize={20}> {title}</Text>
        </LinkOverlay>
        <Text fontSize={14} mb={5}>{children}</Text>
        </LinkBox>
      </NextLink>
    </Box>
  )
}
export const TechnologyGridItem = ({title, thumbnail}) => {
  return (
    <Box w='100%' align='center'>
      <motion.div className="technologyGridItem" whileHover={{
                position: 'relative',
                zIndex: 1,
                scale: 1.3  ,
                transition: {
                  duration: .2
                }
              }}>
          <Image src={thumbnail}
                alt={title}
                className='grid-item-thumbnail'
                placeholder='empty'/>
        </motion.div>
    </Box>
  )
}

export const GridItemStyle = () => {
  return (
    <Global styles={`
    .grid-item-thumbnail {
      border-radius: 12px;
    }
      `}/>
  )}
