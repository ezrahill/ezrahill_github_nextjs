import {
    Box,
    Heading,
    Text,
    Link,
    Badge,
    VStack,
    HStack,
    Button,
    Stack,
    Wrap,
    WrapItem,
    useColorModeValue,
} from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"

export default function ProjectCard({
    name,
    description,
    tech = [],
    link,
    type,
    status = null,
    githubLink = null
}) {
    const getTypeColor = (type) => {
        switch (type) {
            case 'SaaS': return 'purple'
            case 'Enterprise': return 'blue'
            case 'Personal': return 'green'
            case 'Open Source': return 'orange'
            case 'Platform': return 'teal'
            default: return 'gray'
        }
    }

    const getStatusColor = (status) => {
        switch (status) {
            case 'Active': return 'green'
            case 'In Development': return 'yellow'
            case 'Completed': return 'blue'
            case 'Archived': return 'gray'
            case 'Planned': return 'red'
            default: return null
        }
    }

    const cardBg = useColorModeValue("white", "gray.900")
    const cardHoverBg = useColorModeValue("gray.50", "gray.800")
    const borderColor = useColorModeValue("gray.200", "gray.700")
    const textMuted = useColorModeValue("gray.600", "gray.300")

    return (
        <Box
            borderRadius="2xl"
            borderWidth="1px"
            borderColor={borderColor}
            bg={cardBg}
            position="relative"
            overflow="hidden"
            transition="all 0.3s ease"
            _hover={{ transform: "translateY(-6px)", shadow: "2xl", bg: cardHoverBg, borderColor: "brand.200" }}
            _dark={{
                borderColor: "gray.700",
                _hover: { borderColor: "brand.300", bg: "gray.800" },
            }}
        >
            <Box
                h="4px"
                bgGradient="linear(to-r, brand.500, teal.400)"
                borderTopRadius="2xl"
            />
            <VStack align="stretch" spacing={5} p={{ base: 6, md: 7 }}>
                <VStack align="stretch" spacing={3}>
                    <HStack spacing={2}>
                        <Badge
                            colorScheme={getTypeColor(type)}
                            borderRadius="full"
                            px={3}
                            py={1}
                            fontSize="xs"
                        >
                            {type}
                        </Badge>
                        {status && (
                            <Badge
                                colorScheme={getStatusColor(status)}
                                variant="subtle"
                                borderRadius="full"
                                px={3}
                                py={1}
                                fontSize="xs"
                            >
                                {status}
                            </Badge>
                        )}
                    </HStack>
                    <Heading size="md" lineHeight={1.3}>
                        {name}
                    </Heading>
                    <Text fontSize="sm" color={textMuted} lineHeight={1.7}>
                        {description}
                    </Text>
                </VStack>

                {tech.length > 0 && (
                    <Wrap spacing={2}>
                        {tech.map((techItem) => (
                            <WrapItem key={techItem}>
                                <Badge
                                    variant="subtle"
                                    colorScheme="gray"
                                    fontSize="xs"
                                    borderRadius="md"
                                    px={2.5}
                                    py={1}
                                >
                                    {techItem}
                                </Badge>
                            </WrapItem>
                        ))}
                    </Wrap>
                )}

                <Stack direction={{ base: "column", sm: "row" }} spacing={3} pt={2}>
                    {link && link !== "#" && (
                        <Button
                            as={Link}
                            href={link}
                            isExternal
                            size="sm"
                            variant="solid"
                            colorScheme="brand"
                            rightIcon={<ExternalLinkIcon />}
                        >
                            View Project
                        </Button>
                    )}
                    {githubLink && (
                        <Button
                            as={Link}
                            href={githubLink}
                            isExternal
                            size="sm"
                            variant="ghost"
                            rightIcon={<ExternalLinkIcon />}
                        >
                            GitHub
                        </Button>
                    )}
                </Stack>
            </VStack>
        </Box>
    )
}
