import {
    HStack,
    Box,
    Image,
    Text,
    List,
    ListItem,
    Link,
    Divider,
    InputGroup,
    Input,
    InputRightElement,
    Button
} from "@chakra-ui/react";


const FooterContainer = () => {
    return (
        <Box>
            <>
            <HStack
                pl="300px"
                backgroundColor="1a1e23"
                height="200px"
                spacing="600px"
            >
                <Box
                    pt="25px"
                >
                    <Box
                        justifyContent="center"
                        alignItems="center"
                        textAlign="center"
                    >
                        <Box>
                            {/*
                            <Image
                                width="300px"
                                src="https://static.wixstatic.com/media/7e6adf_fe0b8c58889141b2b2cfd772ecedb883~mv2.png/v1/fill/w_774,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%201%20-%20Blue.png"
                            >
                            </Image>
                            */}
                        </Box>


                    </Box>
                    <HStack>
                        <Box
                        textAlign="left"
                        pl="80px"
                        >
                            <List
                            >
                                <ListItem
                                    pb="10px"
                                    fontSize="15px"
                                >
                                    <Link
                                        href="/app"
                                        isExternal
                                    >
                                        App
                                    </Link>
                                </ListItem>

                                <ListItem
                                    pb="10px"
                                    fontSize="15px"
                                >
                                    <Link
                                        href="https://test-155.gitbook.io/test/"
                                        isExternal
                                    >
                                        About
                                    </Link>
                                </ListItem>

                                <ListItem
                                    fontSize="15px"
                                >
                                    <Link
                                        href="https://test-155.gitbook.io/test/company/careers"
                                        isExternal
                                    >
                                        Careers
                                    </Link>
                                </ListItem>
                            </List>
                        </Box>
                        <Box
                            px="30px"
                        >
                            <List
                            >
                                <ListItem
                                    pb="10px"
                                    fontSize="15px"
                                >
                                    <Link
                                        href="#"
                                        isExternal
                                    >
                                        Discord
                                    </Link>
                                </ListItem>

                                <ListItem
                                    pb="10px"
                                    fontSize="15px"
                                >
                                    <Link
                                        href="https://twitter.com/"
                                        isExternal
                                    >
                                        Twitter
                                    </Link>
                                </ListItem>

                                <ListItem
                                    fontSize="15px"
                                >
                                    <Link
                                        href="https://medium.com/"
                                        isExternal
                                    >
                                        Blog
                                    </Link>
                                </ListItem>
                            </List>
                        </Box>
                    </HStack>
                </Box>

                <Box>
                    <Text color="black">Get the freshest news from rottaj!</Text>
                    <InputGroup size='lg' width="500px">
                        <Input
                            pr='4.5rem'

                            placeholder='Your email here'
                        />
                        <InputRightElement width='4.5rem' pr="15px">
                            <Button h='1.75rem'  size='sm' >
                                Subscribe!
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </Box>
            </HStack>

            <Divider size="lg" color="black" orientation="horizontal"/>
            <Box
                padding="20px"
            >
                <Text color="black" fontSize="12px">© 2023 rottaj, Inc. All Rights Reserved.</Text>
            </Box>
            </>
        </Box>
    )
}

export default FooterContainer;