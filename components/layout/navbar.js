import {
    Box,
    Button,
    HStack,
    Image,
    Link,
    Spacer,
    Tooltip,
    useColorMode,
} from "@chakra-ui/react";

import {CloseIcon, MoonIcon, SunIcon} from "@chakra-ui/icons"

export default function NavBar(props) {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box
            position="sticky"
            top="0"
            bg={{ base: "rgba(255, 255, 255, 0.9)", _dark: "rgba(45, 45, 48, 0.95)" }}
            backdropFilter="blur(16px)"
            borderBottom="1px"
            borderColor={{ base: "gray.200", _dark: "gray.600" }}
            shadow="md"
            zIndex={99}
        >
            <HStack sx={{ padding: "6px" }}>
                <Spacer />
                <Box sx={{ display: ["none", "block", "block", "block"] }}>
                    <HStack>
                        <Link isExternal={true} href="https://github.com/ezrahill">
                            <Tooltip label="My GitHub profile" hasArrow={true}>
                                <Button
                                    bg={{ base: "gray.100", _dark: "gray.700" }}
                                    _hover={{ bg: { base: "gray.200", _dark: "gray.600" } }}
                                >
                                    <Image
                                        src="/image/github.png"
                                        sx={{ height: "1.5em" }}
                                        _dark={{ filter: "brightness(0) invert(1)" }}
                                    />
                                </Button>
                            </Tooltip>
                        </Link>
                    </HStack>
                </Box>
                <Box sx={{ display: ["block", "none", "none", "none"] }}>
                    <HStack sx={{ fontSize: "110%", padding: "2px" }}>
                        <Link
                            isExternal={true}
                            href="https://github.com/ezrahill"
                            color={{ base: "gray.700", _dark: "gray.200" }}
                            _hover={{ color: { base: "brand.500", _dark: "brand.300" } }}
                        >{`Github`}</Link>
                    </HStack>
                </Box>
                <Tooltip label={`Switch to ${colorMode === "light" ? "dark" : "light"} mode`} hasArrow>
                    <Button
                        onClick={toggleColorMode}
                        bg={{ base: "gray.100", _dark: "gray.700" }}
                        _hover={{ bg: { base: "gray.200", _dark: "gray.600" } }}
                        color={{ base: "gray.600", _dark: "gray.300" }}
                    >
                        {colorMode === "light" ? <MoonIcon/> : <SunIcon/>}
                    </Button>
                </Tooltip>
            </HStack>
        </Box>
    )
}
