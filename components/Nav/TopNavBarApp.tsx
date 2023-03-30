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
            <Link
                href="/"
            >
            <Box>
                Welcome
            </Box>
            </Link>
            <Box>
                Our Team
            </Box>
            <Link
                href="/app"
            >
                <Box>
                    Projects
                </Box>
            </Link>
        </HStack>
    )
}

export default TopNavBarApp;