import {
    Box,
    HStack,
    Image,
    Text,
    Link,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex,
    useDisclosure

} from "@chakra-ui/react";

import { useContext } from "react";
import { AccountContext } from "../../utils/contexts";
import ConnectWallet from "../Modals/ConnectWallet";


const TopNavBarApp = () => {

    const { walletAddress, walletNetwork, walletType, setWalletNetwork } = useContext(AccountContext);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { 
        isOpen: isOpenConnectWallet, 
        onOpen: onOpenConnectWallet, 
        onClose: onCloseConnectWallet
    } = useDisclosure()


    return (

        <HStack
            //background="linear-gradient(90deg, rgba(14,67,112,1) 0%, rgba(27,27,27,1) 50%, rgba(27,27,27,1) 100%)"
            background="#153047"
            margin="0"
            //justifyContent="center"
            px="10px"
            spacing="40px"
            textAlign="center"
            alignItems="center"
            color="#b9b9b9"

        >

            <Box
                pr="70%"
            >
                <Link href="/">
                </Link>
            </Box>
            <Box>
                <Menu
                    isOpen={isOpen}
                >
                    <MenuButton
                        color="white"
                        onMouseEnter={onOpen}
                        onMouseLeave={onClose}
                    >
                        <Flex
                            background="#191b1f"
                            borderRadius="20px"
                            padding="10px"
                            pr="40px"
                        >
                            <Image src={`/networks/${walletNetwork}.svg`} boxSize="25px"></Image>
                            <Text pl="8px">{walletNetwork}</Text>
                        </Flex>
                    </MenuButton>
                    <MenuList
                        onMouseEnter={onOpen}
                        onMouseLeave={onClose}
                        color="white"
                        bg={"#030123"}
                    >
                            <MenuItem onClick={() => setWalletNetwork("Ethereum")}>
                                <Flex>
                                    <Image src="/networks/Ethereum.svg" boxSize="25px"></Image>
                                    <Text pl="10px">Ethereum</Text>
                                </Flex>
                            </MenuItem>
                            <MenuItem onClick={() => setWalletNetwork(() => "Polygon")}>
                                    <Image src="/networks/Polygon.svg" boxSize="25px"></Image>
                                    <Text pl="10px">Polygon</Text>
                            </MenuItem>
                            <MenuItem onClick={() => setWalletNetwork(() => "Avalanche")}>
                                    <Image src="/networks/Avalanche.svg" boxSize="25px"></Image>
                                    <Text pl="10px">Avalanche</Text>
                            </MenuItem>
                            <MenuItem onClick={() => setWalletNetwork(() => "BSC")}>
                                    <Image src={`/networks/BSC.svg`} boxSize="25px"></Image>
                                    <Text pl="10px">Binance Smart Chain</Text>
                            </MenuItem>
                    </MenuList>
                </Menu>
            </Box>
            <Box
                fontFamily="Inter, sans-serif"
                borderRadius="20px"
                px="10px"
                padding="10px"
                width="12%"
                py="0.3%"
                backgroundColor="#a0c5e8"
                color="black"
            >
                {walletAddress ?
                    <Flex>
                            <Image src={`/wallets/${walletType}`} boxSize="25px"></Image>
                            <Text>{walletAddress.substr(0,6)}...{walletAddress.substr(walletAddress.length - 4)}</Text>
                    </Flex>
                    :
                    <Text onClick={onOpenConnectWallet}>Connect Wallet</Text>
                }
            </Box>
            <ConnectWallet isOpen={isOpenConnectWallet} onOpen={onOpenConnectWallet} onClose={onCloseConnectWallet}/>
        </HStack>
    )
}

export default TopNavBarApp;