import { extendTheme } from '@chakra-ui/react'

const config = {
    initialColorMode: 'light',
    useSystemColorMode: true,
}

// Custom theme with resume colors
const theme = extendTheme({
    config,
    colors: {
        brand: {
            50: '#f0f4e6',
            100: '#d9e3bf',
            200: '#c1d196',
            300: '#a9bf6d',
            400: '#91ae44',
            500: '#5d7000', // Primary resume color
            600: '#4a5700',
            700: '#374100',
            800: '#242b00',
            900: '#121500',
        },
        primary: {
            50: '#f0f4e6',
            100: '#d9e3bf',
            200: '#c1d196',
            300: '#a9bf6d',
            400: '#91ae44',
            500: '#5d7000',
            600: '#4a5700',
            700: '#374100',
            800: '#242b00',
            900: '#121500',
        }
    },
    styles: {
        global: (props) => ({
            html: {
                bg: props.colorMode === 'dark' ? '#1a1a1a' : 'white',
            },
            body: {
                bg: props.colorMode === 'dark' ? '#1a1a1a' : 'white',
                color: props.colorMode === 'dark' ? 'white' : 'gray.800',
            }
        })
    },
    components: {
        Heading: {
            baseStyle: {
                _dark: {
                    color: 'white'
                }
            }
        },
        Text: {
            baseStyle: {
                _dark: {
                    color: 'gray.200'
                }
            }
        }
    }
})

export default theme