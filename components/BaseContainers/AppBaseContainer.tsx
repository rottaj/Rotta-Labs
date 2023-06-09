import { useContext } from "react";
import { AccountContext } from "../../utils/contexts";
import {
    Box,
    useDisclosure
} from "@chakra-ui/react";
import ConnectWallet from "../Modals/ConnectWallet";
import TopNavBarApp from "../Nav/TopNavBarApp";

const AppBaseContainer = () => {

    const { walletAddress, walletType } = useContext(AccountContext);

    const { isOpen, onOpen, onClose } = useDisclosure({defaultIsOpen: true});

    return (
        <Box
        >
            <TopNavBarApp/>
            {!walletAddress &&
                <ConnectWallet isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
            }
        </Box>
    )
}

export default AppBaseContainer;