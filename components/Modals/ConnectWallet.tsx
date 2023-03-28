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
                            <Text>Connect&nbsp;</Text>
                            <Text color="#0a4e91">&nbsp;Wallet</Text>
                        </Flex>
                    </ModalHeader>
                    <ModalBody>

                        <Box
                            pt="8%"
                        >
                            <Flex>
                                <Box
                                    background="#324054"
                                    padding="10px"
                                    borderRadius="60px"
                                >
                                    <RiNumber1 color="white"/>
                                </Box>
                                <Box
                                    px="15px"
                                    pt="0.3rem"
                                >
                                    <Text color="white" fontWeight="bold">Choose Network</Text>
                                </Box>
                            </Flex>
                            <HStack
                                px="30px"
                                py="10px"
                            >
                                <Box
                                    padding="20px"
                                    borderRadius="20px"
                                    _hover={{background:"#09111a"}}
                                >
                                    <Image src="networks/Ethereum.svg" boxSize="60px"></Image>
                                    <Text color="white" fontSize="15px">Ethereum</Text>
                                </Box>
                                <Box
                                    padding="20px"
                                    borderRadius="20px"
                                    _hover={{background:"#09111a"}}
                                >
                                    <Image src="networks/Polygon.svg" boxSize="60px"></Image>
                                    <Text color="white" fontSize="15px">Polygon</Text>
                                </Box>
                                <Box
                                    padding="20px"
                                    borderRadius="20px"
                                    _hover={{background:"#09111a"}}
                                >
                                    <Image src="networks/Avalanche.svg" boxSize="60px"></Image>
                                    <Text color="white" fontSize="15px">Avalanche</Text>
                                </Box>
                                <Box
                                    padding="20px"
                                    borderRadius="20px"
                                    _hover={{background:"#09111a"}}
                                >
                                    <Image src="networks/BSC.svg" boxSize="60px"></Image>
                                    <Text color="white" fontSize="15px">BNB Chain</Text>
                                </Box>
                                <Box
                                    padding="20px"
                                    borderRadius="20px"
                                    _hover={{background:"#09111a"}}
                                >
                                    <Image src="networks/Arbitrum.svg" boxSize="60px"></Image>
                                    <Text color="white" fontSize="15px">Arbitrum</Text>
                                </Box>

                            </HStack>
                        </Box>
                        <Box py="15%">
                            <Flex>
                                <Box
                                    background="#324054"
                                    padding="10px"
                                    borderRadius="60px"
                                >
                                    <RiNumber2 color="white"/>
                                </Box>
                                <Box
                                    px="15px"
                                    pt="0.3rem"
                                >
                                    <Text color='white' fontWeight="bold">Choose Wallet</Text>
                                </Box>
                            </Flex>
                            <HStack
                                px="30px"
                                py="10px"
                            >
                                <Box
                                    onClick={() => {handleWalletConnect(); setWalletType("metamask_2.png")}}
                                    padding="20px"
                                    borderRadius="20px"
                                    _hover={{background:"#09111a"}}
                                >
                                    <Image src="wallets/metamask_2.png" boxSize="60px"></Image>
                                    <Text color="white" fontSize="15px">Metamask</Text>
                                </Box>
                                <Box
                                    padding="20px"
                                    borderRadius="20px"
                                    _hover={{background:"#09111a"}}
                                >
                                    <Image src="wallets/wallet-link.svg" boxSize="60px"></Image>
                                    <Text color="white" fontSize="15px">Coinbase </Text>
                                </Box>
                                <Box
                                    padding="20px"
                                    borderRadius="20px"
                                    _hover={{background:"#09111a"}}
                                >
                                    <Image src="wallets/wallet-connect.svg" boxSize="60px"></Image>
                                    <Text color="white" fontSize="15px">Connect</Text>
                                </Box>


                                <Box
                                    padding="20px"
                                    borderRadius="20px"
                                    _hover={{background:"#09111a"}}
                                >
                                    <Image src="wallets/trust-wallet.svg" boxSize="60px"></Image>
                                    <Text color="white" fontSize="15px">TrustWallet</Text>
                                </Box>


                            </HStack>
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