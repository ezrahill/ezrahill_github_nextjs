// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import theme from "/utils/theme"
import NavBar from '../components/navbar'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <NavBar />
            <Component {...pageProps} />
            <Footer />
        </ChakraProvider>
    )
}

export default MyApp