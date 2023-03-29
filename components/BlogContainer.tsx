import react from 'react';
import {
    Box,
    Grid,
    GridItem,
    Text
} from "@chakra-ui/react";

const BlogContainer = () => {
    return (
        <Grid
            templateColumns='repeat(3, 1fr)' 
            gap={6}
            className="glass-card-grid"

        >

                <BlogPost 
                  title="EVM Explorer" 
                  description="Ethereum EVM tooling for your terminal! ❤️"
                  author="rottaj"
                  tag_one="Ethereum"
                  tag_two="EVM"
                  tag_three="Go"
                  />
                <BlogPost
                  title="RaffleHouse" 
                  description="Fun Games 4 Frens, hosted on Ethereum."
                  author="rottaj"
                  tag_one="Ethereum"
                  tag_two="NFT"
                  tag_three="Gambling"
                />
                <BlogPost
                  title="Cookie Monster" 
                  description="Session Hijacking malware written in Go"
                  author="rottaj"
                  tag_one="Penetration Testing"
                  tag_two="Hacking"
                  tag_three="Malware Analysis"
                />
                <BlogPost
                  title="Eyescream NFT" 
                  description="NFT Project hosted on Ethereum."
                  author="rottaj"
                  tag_one="Ethereum"
                  tag_two="NFT"
                  tag_three=""
                />
                <BlogPost
                  title="Smart Wallet" 
                  description="An Ethereum wallet extension for browsers running chrome"
                  author="rottaj"
                  tag_one="Ethereum"
                  tag_two="Chrome extensions"
                  tag_three="Cryptography"
                />
                <BlogPost
                  title="Awesome Web Punk" 
                  description="A list of Information Security resources and other awesome reads."
                  author="rottaj"
                  tag_one="Information Security"
                  tag_two="Hacking"
                  tag_three=""
                />
                <BlogPost
                  title="Fun DAO" 
                  description="A Non-Plutonian DAO for Ethereum"
                  author="rottaj"
                  tag_one="Ethereum"
                  tag_two="DeFi"
                  tag_three=""
                />
        </Grid>
    )
}

export default BlogContainer;


type BlogPostProps = {
  title: string;
  description: string;
  author: string;
  tag_one: string;
  tag_two: string;
  tag_three: string;
}

const BlogPost = (props: BlogPostProps) => {
    return (
        <GridItem>
          <Box className="glass-card">
            <Text className="glass-card-title">
              <a href="#"> {props.title} </a>
            </Text>
            <Box className="tags">
              <a href="#" rel="tag">{props.tag_one}</a>
              <a href="#" rel="tag">{props.tag_two}</a>
              <a href="#" rel="tag">{props.tag_three}</a>
            </Box>
            <Text>
              {props.description}
            </Text>
            <Box className="author-row">
              <a className="author-name" href="#"> {props.author}</a>
            </Box>
          </Box>
        </GridItem>
    )
}