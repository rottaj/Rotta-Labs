import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import AppContainer from "../../components/AppContainer";
import { AccountContext } from '../../utils/contexts';


export default function App () {

    const [ walletType, setWalletType ] = useState<string>(null);
    const [ walletAddress, setWalletAddress ] = useState<string>(null);
    const [ walletNetwork, setWalletNetwork ] = useState<string>("Ethereum");

    const values = {
        walletType,
        setWalletType,
        walletNetwork,
        setWalletNetwork,
        walletAddress,
        setWalletAddress
    }

    return (
        <AccountContext.Provider
            value={values}
        >
            <ChakraProvider>
                <AppContainer/>
            </ChakraProvider>
        </AccountContext.Provider>

    )
}