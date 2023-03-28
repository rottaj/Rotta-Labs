import {
    Box,
    HStack,
    Image,
    Text,
    Link

} from "@chakra-ui/react";


const TopNavBar = () => {
    return (

        <HStack
            background="linear-gradient(90deg, rgba(14,67,112,1) 0%, rgba(27,27,27,1) 50%, rgba(27,27,27,1) 100%)"
            margin="0"
            //justifyContent="center"
            spacing="40px"
            textAlign="center"
            alignItems="center"
            color="#b9b9b9"

        >

            <Box
                pr="50%"
            >

            </Box>
            <Box
                _hover={{color:"white"}}
            >
                <Link
                    href="https://test-155.gitbook.io/test/"
                    isExternal
                >
                    <Text
                        fontSize="20px"
                    >
                        Docs
                    </Text>
                </Link>
            </Box>
            <Box
                _hover={{color:"white"}}
            >
                <Text
                    fontSize="20px"
                >
                    Discord
                </Text>
            </Box>
            <Box
                _hover={{color:"white"}}
            >
                <Link href="https://twitter.com/ThrackleLabs" isExternal>
                    <Text
                        fontSize="20px"
                    >
                        Twitter
                    </Text>
                </Link>
            </Box>
            <Box
                _hover={{color:"white"}}
            >
                <Link href="https://medium.com/thrackle" isExternal>
                    <Text
                        fontSize="20px"
                    >
                        Blog
                    </Text>
                </Link>
            </Box>
            <Box
                _hover={{color:"white"}}
            >
                <Link href="https://test-155.gitbook.io/test/company/careers" isExternal>
                    <Text
                        fontSize="20px"
                    >
                        Jobs
                    </Text>
                </Link>
            </Box>
            <Link href='/app'>
                <Box
                    fontFamily="Inter, sans-serif"
                    border="1px solid white"
                    borderRadius="10px"
                    px="12px"
                    py="10px"
                    backgroundColor="#a0c5e8"
                    color="black"
                >
                    <Text>Launch App</Text>
                </Box>
            </Link>

        </HStack>
    )
}

export default TopNavBar;