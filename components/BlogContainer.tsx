import react from 'react';
import {
    Box,
    Text
} from "@chakra-ui/react";

const BlogContainer = () => {
    return (
        <Box
            className="glass-card-grid"
        >

                <BlogPost/>
                <BlogPost/>
                <BlogPost/>
                <BlogPost/>
        </Box>
    )
}

export default BlogContainer;


const BlogPost = () => {
    return (
        <Box>
          <Box>
          <Text className="glass-card-title">
            <a href="#"> Title </a>
          </Text>
          <Box className="tags">
            <a href="#" rel="tag">tag 1</a>
            <a href="#" rel="tag">tag 2</a>
          </Box>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
            excepturi veritatis vitae corporis! Dolorum soluta similique qui
            assumenda. Suscipit in voluptatibus nam iure obcaecati. Officiis
            minima illo inventore magni odio.
          </Text>
          <Box className="author-row">
            <a className="author-name" href="#"> Author </a>
          </Box>
        </Box>
        <Box className="glass-card">
          <Text className="glass-card-title">
            <a href="#"> Title </a>
          </Text>
          <Box className="tags">
            <a href="#" rel="tag">tag 1</a>
            <a href="#" rel="tag">tag 2</a>
          </Box>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
            excepturi veritatis vitae corporis! Dolorum soluta similique qui
            assumenda. Suscipit in voluptatibus nam iure obcaecati. Officiis
            minima illo inventore magni odio.
          </Text>
          <Box className="author-row">
            <a className="author-name" href="#"> Author </a>
          </Box>
        </Box>
        <Box className="glass-card">
          <Text className="glass-card-title">
            <a href="#"> Title </a>
          </Text>
          <Box className="tags">
            <a href="#" rel="tag">tag 1</a>
            <a href="#" rel="tag">tag 2</a>
          </Box>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
            excepturi veritatis vitae corporis! Dolorum soluta similique qui
            assumenda. Suscipit in voluptatibus nam iure obcaecati. Officiis
            minima illo inventore magni odio.
          </Text>
          <Box className="author-row">
            <a className="author-name" href="#"> Author </a>
          </Box>
          </Box>
        </Box>
    )
}