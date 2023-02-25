import { Box, Button, Center, Code, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, HStack, Heading, Image, Link, ListItem, OrderedList, Spacer, Text, Tooltip, UnorderedList, VStack, useColorMode } from "@chakra-ui/react"
import NextLink from "next/link"

export default function NavBar(props) {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Box sx={{ "top": "0px", "position": "sticky", "backgroundColor": "rgba(0, 0, 0, 0.2)", "backdropFilter": "blur(4px)", "boxShadow": "rgba(0, 0, 0, 0.1) 0px 10px 13px", "zIndex": 99 }}>
            <HStack sx={{ "padding": "6px" }}>
                <Spacer />
                <Box sx={{ "display": ["none", "block", "block", "block"] }}>
                    <HStack>
                        <NextLink
                            passHref={true}
                            href="https://github.com/ezrahill">
                            <Link isExternal={true}>
                                <Tooltip
                                    label="My GitHub profile"
                                    hasArrow={true}>
                                    <Button sx={{ "_hover": { "opacity": 0.85 }, "bg": "#6b9080" }}>
                                        <Image src="/github.png" sx={{ "height": "1.5em" }} />
                                    </Button>
                                </Tooltip>
                            </Link>
                        </NextLink>
                    </HStack>
                </Box>
                <Box sx={{ "display": ["block", "none", "none", "none"] }}>
                    <HStack sx={{ "fontSize": "110%", "padding": "2px" }}>
                        <NextLink
                            passHref={true}
                            href="https://github.com/ezrahill">
                            <Link isExternal={true}>{`Github`}</Link>
                        </NextLink>
                    </HStack>
                </Box>
                <Button onClick={toggleColorMode}>
                    Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
                </Button>
            </HStack>
        </Box>
    )
}