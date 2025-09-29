import {
    Box,
    Button,
    Heading,
    HStack,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalOverlay,
    SimpleGrid,
    Text,
    Wrap,
    WrapItem,
    Tag,
    VStack,
    List,
    ListItem,
    Link,
    useColorModeValue,
} from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"

const accentColors = [
    "brand.500",
    "teal.500",
    "purple.500",
    "blue.500",
]

export default function SkillModal({
    isOpen,
    onClose,
    title,
    subtitle = null,
    summary = null,
    tags = [],
    sections = [],
    certifications = [],
    resources = [],
}) {
    const borderColor = useColorModeValue("gray.200", "gray.700")
    const cardBg = useColorModeValue("white", "gray.800")
    const bodyBg = useColorModeValue("gray.50", "gray.900")
    const summaryColor = useColorModeValue("gray.700", "gray.200")
    const headingColor = useColorModeValue("brand.600", "brand.200")
    const sectionSubtitleColor = useColorModeValue("gray.600", "gray.300")
    const bodyTextColor = useColorModeValue("gray.700", "gray.200")
    const resourceLinkColor = useColorModeValue("teal.600", "teal.200")

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            size={{ base: "xl", md: "2xl", lg: "4xl" }}
            motionPreset="slideInBottom"
        >
            <ModalOverlay backdropFilter="blur(12px)" />
            <ModalContent
                borderRadius="2xl"
                overflow="hidden"
                bg={bodyBg}
                borderWidth="1px"
                borderColor={borderColor}
                boxShadow="2xl"
            >
                <Box
                    bgGradient="linear(to-r, brand.500, teal.500)"
                    color="white"
                    px={{ base: 6, md: 8 }}
                    py={{ base: 6, md: 8 }}
                >
                    <Heading size="lg" lineHeight={1.1}>
                        {title}
                    </Heading>
                    {subtitle && (
                        <Text mt={2} color="whiteAlpha.800" fontSize="md">
                            {subtitle}
                        </Text>
                    )}
                </Box>
                <ModalCloseButton
                    color="white"
                    top={5}
                    right={5}
                    bg="whiteAlpha.200"
                    _hover={{ bg: "whiteAlpha.300" }}
                    _focusVisible={{ boxShadow: "0 0 0 3px rgba(255,255,255,0.4)" }}
                />
                <ModalBody px={{ base: 6, md: 8, lg: 12 }} py={6}>
                    <VStack align="stretch" spacing={6}>
                        {summary && (
                            <Text fontSize="md" color={summaryColor}>
                                {summary}
                            </Text>
                        )}

                        {tags.length > 0 && (
                            <Wrap spacing={2}>
                                {tags.map((tag) => (
                                    <WrapItem key={tag}>
                                        <Tag size="md" variant="subtle" colorScheme="brand" borderRadius="full" px={3} py={1}>
                                            {tag}
                                        </Tag>
                                    </WrapItem>
                                ))}
                            </Wrap>
                        )}

                        {sections.length > 0 && (
                            <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={5}>
                                {sections.map((section, index) => (
                                    <Box
                                        key={section.title}
                                        bg={cardBg}
                                        borderRadius="xl"
                                        borderWidth="1px"
                                        borderColor={borderColor}
                                        p={5}
                                        transition="all 0.2s ease"
                                        _hover={{ transform: "translateY(-4px)", borderColor: accentColors[index % accentColors.length] }}
                                    >
                                        <Heading size="sm" color={headingColor}>
                                            {section.title}
                                        </Heading>
                                        {section.subtitle && (
                                            <Text mt={1} fontSize="sm" color={sectionSubtitleColor}>
                                                {section.subtitle}
                                            </Text>
                                        )}
                                        {section.items && section.items.length > 0 && (
                                            <List mt={3} spacing={2} styleType="none">
                                                {section.items.map((item) => (
                                                    <ListItem key={item}>
                                                        <HStack align="flex-start" spacing={3}>
                                                            <Box
                                                                mt={"6px"}
                                                                boxSize={2}
                                                                borderRadius="full"
                                                                bg={accentColors[index % accentColors.length]}
                                                                flexShrink={0}
                                                            />
                                                            <Text color={bodyTextColor}>{item}</Text>
                                                        </HStack>
                                                    </ListItem>
                                                ))}
                                            </List>
                                        )}
                                    </Box>
                                ))}
                            </SimpleGrid>
                        )}

                        {certifications.length > 0 && (
                            <Box>
                                <Heading size="sm" textTransform="uppercase" letterSpacing="wide" color={headingColor} mb={3}>
                                    Certifications
                                </Heading>
                                <Wrap spacing={2}>
                                    {certifications.map((cert) => (
                                        <WrapItem key={cert}>
                                            <Tag size="md" borderRadius="full" variant="solid" colorScheme="brand" px={4} py={1}>
                                                {cert}
                                            </Tag>
                                        </WrapItem>
                                    ))}
                                </Wrap>
                            </Box>
                        )}

                        {resources.length > 0 && (
                            <Box>
                                <Heading size="sm" textTransform="uppercase" letterSpacing="wide" color={headingColor} mb={3}>
                                    Resources
                                </Heading>
                                <VStack align="stretch" spacing={2}>
                                    {resources.map((resource) => (
                                        <Link
                                            key={resource.label}
                                            href={resource.href}
                                            isExternal
                                            color={resourceLinkColor}
                                            display="inline-flex"
                                            alignItems="center"
                                            gap={2}
                                            fontSize="sm"
                                        >
                                            <ExternalLinkIcon />
                                            {resource.label}
                                        </Link>
                                    ))}
                                </VStack>
                            </Box>
                        )}
                    </VStack>
                </ModalBody>
                <ModalFooter px={{ base: 6, md: 8 }} pb={6}>
                    <Button onClick={onClose} variant="outline" colorScheme="brand" borderRadius="full">
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
