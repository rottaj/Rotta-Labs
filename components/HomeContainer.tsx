import { ParticlesContainer } from './ParticlesContainer'; 
import { useEffect, useState } from 'react';
import Head from 'next/head';
import {
    Flex,
    Box,
    HStack,
    Heading,
    Text,
    Button,
    Image,
} from '@chakra-ui/react';
import Link from 'next/link';
import BarOne from './Rive/BarOne';
import BarTwo from './Rive/BarTwo';
import BarThree from './Rive/BarThree';

//import Logo from '../media/Logo.riv';

const HomeContainer = () => {

    return (
        <Box
            //background="rgb(14,67,112)"
            py="8%"
            px="15%"
            pb="30%"
            background="linear-gradient(90deg, rgba(14,67,112,1) 0%, rgba(27,27,27,1) 50%, rgba(27,27,27,1) 100%)"
        >
            <Head>
                <title>Rottaj Labs - Home</title>
                <link rel="shortcut icon" href="/thrackle_logo.ico" />
            </Head>
            <ParticlesContainer/>
                <Box
                    width="500px"
                >
                    <Text
                        //fontFamily="Montserrat"
                        fontFamily="Inter, sans-serif"
                        //color="#0e5093"
                        lineHeight="60px"
                        color="#a0c5e8"
                        fontSize="50px"
                    >
                        {/*<Image src="Logo.gif"></Image>*/}
                        We're researchers and developers focused on blockchain and information security. {/*Sit Upet Olmet Colondor Sitenorein Ropesten*/}

                    </Text>
                    <Box
                        fontFamily="Inter, sans-serif"
                        color="#d1d9dc"
                        letterSpacing="normal"
                        lineHeight="30px"
                    >
                       <Text>Welcome to our research and development group! We are a team of continuous learners who are passionate about tackling difficult and challenging problems in the blockchain and information security space. </Text>
                    </Box>
                    <HStack
                        pt="10px"
                        pl="15px"
                    >
                        <Link href="/app">
                            <Box
                                fontFamily="Inter, sans-serif"
                                border="1px solid white"
                                borderRadius="10px"
                                px="6%"
                                py="4%"
                                backgroundColor="#a0c5e8"
                                color="black"
                                _hover={{
                                    background: "#365166",
                                    borderWidth:"2px"
                                }}
                            >
                                Explore!
                            </Box>
                        </Link>
                        <Box
                            fontFamily="Inter, sans-serif"
                            border="1px solid white"
                            borderRadius="10px"
                            color="#d1d9dc"
                            px="6%"
                            py="4%"
                            _hover={{
                                background: "#a0c5e8", 
                                color: "black",
                                borderWidth:"2px"
                            }}
                        >
                            <Link
                                href=""
                            >
                                Learn More
                            </Link>
                        </Box>
                    </HStack>



                </Box>

                <Flex
                    height="500px"
                    pl="50%"
                    mt="-35%"
                    //margin="0"
                >
                        {/*<RiveComponent/>*/}
                        <BarOne/>
                        <BarTwo/>
                        <BarThree/>
                </Flex>
        </Box>
    )
}

export default HomeContainer;