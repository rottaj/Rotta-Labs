import HomeContainer from '../components/HomeContainer';
import FooterContainer from '../components/FooterContainer';
import TopNavBar from '../components/Nav/TopNavBar';
import { ChakraProvider } from '@chakra-ui/react'


export default function Home() {
  return (
    <ChakraProvider>
        <TopNavBar/>
        <HomeContainer/>
        <FooterContainer/>
    </ChakraProvider>
  )
}
