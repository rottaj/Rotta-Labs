import { useState, useContext } from 'react';
import {
    Box,
    Button,
    Flex,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    Spinner,
    Select,
    Grid,
    HStack,
    Image
} from "@chakra-ui/react";
import { AccountContext } from '../../utils/contexts';
import { RiContactsBookLine, RiNumber1, RiNumber2 } from 'react-icons/ri';


type ConnectWalletProps = {
    isOpen: boolean;
    onOpen: any;
    onClose: any;
}

declare let window: any;
const ConnectWallet = (props: ConnectWalletProps) => {

    const { 
        setWalletAddress,
        setWalletNetwork,
        setWalletType 
    } = useContext(AccountContext);


    const handleWalletConnect = async () => {
        console.log('handle wallet connect');
        const accounts = await window.ethereum.request({method:'eth_requestAccounts'});
        console.log('accounts', accounts)
        setWalletAddress(accounts[0]);
    }



    return (
        <Box>
            <Modal size="2xl" isOpen={props.isOpen} onClose={props.onClose}>
                <ModalOverlay />
                <ModalContent bgColor="#131823" borderRadius="20px">
                    <ModalHeader>
                        <Flex color="white" justify="center" fontSize="34px">
                            <Text>Rotta&nbsp;</Text>
                            <Text color="#0a4e91">&nbsp;Labs</Text>
                        </Flex>
                    </ModalHeader>
                    <ModalBody>

                        <Box
                            pt="8%"
                            
                        >
                                {/* PARAGRAPH 1 */}
                            <Text
                                color="white"
                            >
Welcome to Rotta Labs, your go-to source for cutting-edge security solutions in the blockchain and information security space. Our company specializes in researching and developing exciting projects that push the boundaries of what's possible in the world of security.
                            </Text>
                                {/* PARAGRAPH 2 */}
                            <Text
                                color="white"
                                pt="20px"
                            >
At Rotta Labs, we are passionate about using the power of blockchain technology to create more secure, transparent, and trustworthy systems. Our team of expert researchers and developers is constantly exploring new ways to leverage blockchain technology to enhance security across a wide range of applications, from financial transactions to identity management.
                            </Text
                            >
                                {/* PARAGRAPH 3 */}
                            <Text
                                color="white"
                                pt="20px"
                            >
In addition to our work in blockchain security, we also specialize in information security, working to develop innovative solutions that protect against cyber threats and keep your data safe. Whether you're looking to secure your organization's infrastructure or protect your personal information, Rotta Labs has the expertise and experience you need.
                            </Text>
                                {/* PARAGRAPH 4 */}
                            <Text
                                color="white"
                                pt="20px"
                            >
Our website offers a range of resources and information for those interested in learning more about our company and the exciting work we're doing in the security space. From blog posts and white papers to case studies and product demos, we provide a wealth of information that will help you stay up-to-date on the latest trends and best practices in security.
                            </Text>

                                {/* PARAGRAPH 5 */}
                            <Text
                                color="white"
                                pt="20px"
                            >
So whether you're a business owner looking to secure your operations, a developer interested in working with cutting-edge security technology, or just someone who's passionate about security and blockchain, we invite you to explore our website and learn more about what Rotta Labs has to offer.
                            </Text>


                            <Box
                                mt="20px"
                                textAlign="center"
                                fontFamily="Inter, sans-serif"
                                border="1px solid white"
                                borderRadius="10px"
                                width="20%"
                                py="5px"
                                backgroundColor="#a0c5e8"
                                color="white"
                                borderColor="black"
                                _hover={{
                                    background: "#192936",
                                    borderWidth:"2px"
                                }}
                                onClick={props.onClose}
                            >
                                Explore App
                            </Box>
                        </Box>
                        
                    </ModalBody>

                    <ModalFooter>
                        <Flex>

                        </Flex>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default ConnectWallet;