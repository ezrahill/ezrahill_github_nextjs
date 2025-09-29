import Head from "next/head";
import NextLink from "next/link";
import {
    Box,
    Button,
    Center,
    Heading,
    Link,
    SimpleGrid,
    Stack,
    Tag,
    Text,
    useColorModeValue,
    VStack,
} from "@chakra-ui/react";
import { ArrowForwardIcon, EmailIcon, RepeatIcon } from "@chakra-ui/icons";

export default function NotFoundPage() {
    const panelBg = useColorModeValue("white", "gray.900");
    const panelBorder = useColorModeValue("gray.200", "gray.700");
    const panelShadow = useColorModeValue("xl", "dark-lg");
    const codeBg = useColorModeValue("gray.900", "gray.800");
    const codeText = useColorModeValue("green.200", "green.200");
    const linkBorder = useColorModeValue("gray.200", "gray.700");

    return (
        <Box
            as="main"
            bgGradient={{ base: "linear(to-b, brand.500, brand.700)", md: "linear(to-r, brand.500, teal.500)" }}
            color="white"
            py={{ base: 20, md: 32 }}
            px={{ base: 6, md: 12 }}
            minH="80vh"
        >
            <Head>
                <title>Page Not Found | Ezra Hill</title>
            </Head>
            <Center>
                <Box
                    w="100%"
                    maxW="5xl"
                    bg={panelBg}
                    borderWidth="1px"
                    borderColor={panelBorder}
                    borderRadius="3xl"
                    boxShadow={panelShadow}
                    color={useColorModeValue("gray.900", "white")}
                    overflow="hidden"
                >
                    <Box
                        px={{ base: 6, md: 10 }}
                        py={{ base: 10, md: 12 }}
                        bgGradient={{ base: "linear(to-r, brand.500, teal.500)", md: "linear(to-r, brand.500, teal.400)" }}
                        color="white"
                    >
                        <Tag size="lg" bg="whiteAlpha.200" color="white" borderRadius="full" px={4} py={2}>
                            404 · Route not deployed
                        </Tag>
                        <Heading mt={6} size="2xl" lineHeight={1.1}>
                            This page hasn’t shipped to production yet.
                        </Heading>
                        <Text mt={4} fontSize="lg" color="whiteAlpha.800">
                            You’ve discovered a path that isn’t wired up. Let’s get you back to the reliable bits of the platform.
                        </Text>
                    </Box>

                    <VStack align="stretch" spacing={8} px={{ base: 6, md: 10 }} py={{ base: 10, md: 12 }}>
                        <Box
                            bg={codeBg}
                            color={codeText}
                            borderRadius="xl"
                            px={6}
                            py={5}
                            fontFamily="mono"
                            fontSize="sm"
                            lineHeight={1.7}
                            boxShadow="inner"
                        >
                            <Text>∴ diagnostics.start()</Text>
                            <Text>&gt; curl -I https://ezrahill.dev/that-route</Text>
                            <Text>&lt; HTTP/1.1 404 Not Found</Text>
                            <Text>&gt; // TODO: provision route &amp; deploy pipeline</Text>
                        </Box>

                        <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
                            <Button
                                as={NextLink}
                                href="/"
                                size="lg"
                                colorScheme="brand"
                                rightIcon={<ArrowForwardIcon />}
                            >
                                Back to homepage
                            </Button>
                            <Button
                                as={Link}
                                href="mailto:contact@ezrahill.com"
                                size="lg"
                                variant="outline"
                                leftIcon={<EmailIcon />}
                            >
                                Email Ezra
                            </Button>
                        </Stack>

                        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
                            {[
                                {
                                    label: "GitHub Portfolio",
                                    href: "https://github.com/ezrahill",
                                },
                                {
                                    label: "LinkedIn Profile",
                                    href: "https://linkedin.com/in/ezrahill",
                                },
                                {
                                    label: "Writing & Case Studies",
                                    href: "https://www.ezrahill.co.uk",
                                },
                            ].map((link) => (
                                <Box
                                    key={link.href}
                                    borderWidth="1px"
                                    borderColor={linkBorder}
                                    borderRadius="xl"
                                    px={4}
                                    py={3}
                                    transition="all 0.2s ease"
                                    _hover={{ borderColor: "brand.300", transform: "translateY(-3px)" }}
                                >
                                    <Stack direction="row" spacing={3} align="center">
                                        <RepeatIcon color="brand.500" />
                                        <Link href={link.href} isExternal fontWeight="600">
                                            {link.label}
                                        </Link>
                                    </Stack>
                                </Box>
                            ))}
                        </SimpleGrid>
                    </VStack>
                </Box>
            </Center>
        </Box>
    );
}
