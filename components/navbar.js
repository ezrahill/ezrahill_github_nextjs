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

import {CloseIcon, MoonIcon} from "@chakra-ui/icons"

export default function NavBar(props) {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box
            sx={{
                top: "0px",
                position: "sticky",
                backgroundColor: "rgba(213, 213, 213, 0.5)",
                backdropFilter: "blur(4px)",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 13px",
                zIndex: 99,
            }}
        >
            <HStack sx={{ padding: "6px" }}>
                <Spacer />
                <Box sx={{ display: ["none", "block", "block", "block"] }}>
                    <HStack>
                        <Link isExternal={true} href="https://github.com/ezrahill">
                            <Tooltip label="My GitHub profile" hasArrow={true}>
                                <Button sx={{ _hover: { opacity: 0.85 }, bg: "#d5d5d5" }}>
                                    <Image src="/image/github.png" sx={{ height: "1.5em" }} />
                                </Button>
                            </Tooltip>
                        </Link>
                    </HStack>
                </Box>
                <Box sx={{ display: ["block", "none", "none", "none"] }}>
                    <HStack sx={{ fontSize: "110%", padding: "2px" }}>
                        <Link isExternal={true} href="https://github.com/ezrahill">{`Github`}</Link>
                    </HStack>
                </Box>
                <Button onClick={toggleColorMode}
                    // Toggle {colorMode === "light" ? "Dark" : "Light"}
                    sx={{"bg": "#d5d5d5"}}><MoonIcon/>
                </Button>
            </HStack>
        </Box>
    )
}
