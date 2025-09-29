import {
    ArrowForwardIcon,
    EmailIcon,
} from "@chakra-ui/icons"
import {
    Box,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Tag,
    Text,
    VStack,
    Wrap,
    WrapItem,
} from "@chakra-ui/react"

export default function HeroSection() {
    return (
        <Box
            as="section"
            bgGradient={{ base: "linear(to-b, brand.500, brand.700)", md: "linear(to-r, brand.500, teal.500)" }}
            color="white"
            py={{ base: 16, md: 24 }}
        >
            <Center px={{ base: 6, md: 12 }}>
                <Flex
                    direction={{ base: "column", lg: "row" }}
                    align={{ base: "flex-start", lg: "center" }}
                    justify="space-between"
                    gap={{ base: 12, lg: 16 }}
                    maxW="7xl"
                    w="100%"
                >
                    <VStack align="flex-start" spacing={6} maxW={{ base: "full", lg: "xl" }}>
                        <Tag
                            size="lg"
                            bg="whiteAlpha.200"
                            color="white"
                            borderRadius="full"
                            px={4}
                            py={2}
                            fontWeight="600"
                        >
                            Principal Platform & DevOps Leader · UK-based
                        </Tag>
                        <Heading as="h1" size="2xl" lineHeight={1.15}>
                            Helping engineering teams scale resilient, efficient cloud platforms.
                        </Heading>
                        <Text fontSize="lg" color="whiteAlpha.800">
                            Partnering with engineering and product leaders to build secure, automated infrastructure that balances
                            reliability, velocity, and cost without compromising developer experience.
                        </Text>
                        <Text fontSize="md" color="whiteAlpha.700">
                            Trusted partner to enterprise and scale-up teams, comfortable leading globally distributed squads,
                            shaping roadmaps, and translating complex requirements into pragmatic delivery runways.
                        </Text>
                        <Wrap spacing={3}>
                            {[
                                "£1.2M+ cloud savings delivered",
                                "Multi-cloud & platform leadership",
                                "Team-first DevOps culture",
                                "Enterprise & scale-up experience",
                            ].map((label) => (
                                <WrapItem key={label}>
                                    <Tag size="lg" bg="whiteAlpha.200" borderRadius="full" px={4} py={2}>
                                        {label}
                                    </Tag>
                                </WrapItem>
                            ))}
                        </Wrap>
                        <Stack direction={{ base: "column", sm: "row" }} spacing={4} pt={2}>
                            <Button
                                as={Link}
                                href="mailto:contact@ezrahill.com"
                                size="lg"
                                px={8}
                                colorScheme="whiteAlpha"
                                leftIcon={<EmailIcon />}
                                fontWeight="700"
                            >
                                Let’s collaborate
                            </Button>
                            <Button
                                as={Link}
                                href="https://linkedin.com/in/ezrahill"
                                isExternal
                                size="lg"
                                px={8}
                                variant="outline"
                                color="white"
                                borderColor="whiteAlpha.700"
                                _hover={{ bg: "whiteAlpha.200" }}
                                rightIcon={<ArrowForwardIcon />}
                            >
                                Explore LinkedIn
                            </Button>
                        </Stack>
                        <Wrap spacing={3} pt={2}>
                            <WrapItem>
                                <Link
                                    href="https://github.com/ezrahill"
                                    isExternal
                                    color="whiteAlpha.800"
                                    fontSize="sm"
                                    display="inline-flex"
                                    alignItems="center"
                                    gap={1.5}
                                    _hover={{ color: "white" }}
                                >
                                    <ArrowForwardIcon transform="rotate(-45deg)" />
                                    GitHub Portfolio
                                </Link>
                            </WrapItem>
                            <WrapItem>
                                <Link
                                    href="https://www.ezrahill.co.uk"
                                    isExternal
                                    color="whiteAlpha.800"
                                    fontSize="sm"
                                    display="inline-flex"
                                    alignItems="center"
                                    gap={1.5}
                                    _hover={{ color: "white" }}
                                >
                                    <ArrowForwardIcon transform="rotate(-45deg)" />
                                    Writing & Case Studies
                                </Link>
                            </WrapItem>
                        </Wrap>
                    </VStack>
                    <Box
                        w={{ base: "full", lg: "sm" }}
                        display="flex"
                        justifyContent={{ base: "center", lg: "flex-end" }}
                        alignItems="center"
                    >
                        <Box
                            bg="white"
                            color="gray.800"
                            borderRadius="3xl"
                            p={3}
                            boxShadow="xl"
                            maxW="320px"
                            w="100%"
                            _dark={{ bg: "gray.900", color: "white", boxShadow: "dark-lg" }}
                        >
                            <Box borderRadius="2xl" overflow="hidden" borderWidth="3px" borderColor="whiteAlpha.700">
                                <Image
                                    src="/image/ezrahill.jpeg"
                                    alt="Ezra Hill"
                                    w="100%"
                                    h="100%"
                                    objectFit="cover"
                                    fallbackSrc="https://via.placeholder.com/400x400"
                                />
                            </Box>
                            <VStack align="flex-start" spacing={1} mt={4}>
                                <Text fontWeight="700">Ezra Hill</Text>
                                <Text fontSize="sm" color="gray.500" _dark={{ color: "gray.300" }}>
                                    Principal Platform & DevOps Leader
                                </Text>
                            </VStack>
                        </Box>
                    </Box>
                </Flex>
            </Center>
        </Box>
    )
}
