import { useContext } from "react";
import { AccountContext } from "../utils/contexts";
import Head from 'next/head';
import {
    Box,
} from "@chakra-ui/react";
import AppBaseContainer from "./BaseContainers/AppBaseContainer";
import TopNavBarApp from "./Nav/TopNavBarApp";
import BlogContainer from "./BlogContainer";

const AppContainer = () => {

    const { walletAddress, walletType } = useContext(AccountContext);

    return (
        <Box
            background="linear-gradient(to top, #1b1b1b 0%, #153047 100%)"
            height="100vh"
        >
            <Head>
                <title>Rottaj Labs</title>
                <link rel="shortcut icon" href="/thrackle_logo.ico" />
            </Head>
            {/*<TopNavBarApp/> */}
            <AppBaseContainer/>
            <BlogContainer/>
        </Box>
    )
}

export default AppContainer;