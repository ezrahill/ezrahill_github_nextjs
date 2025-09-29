import { Box, Text, Link, Badge, VStack, Heading, useColorModeValue } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"

export default function PersonalCard({
    emoji,
    title,
    description,
    hoverColor = "brand.500",
    link = null,
    linkText = null,
    badge = null,
    badgeColor = "gray"
}) {
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
            p={{ base: 6, md: 7 }}
            transition="all 0.3s ease"
            _hover={{ transform: "translateY(-6px)", shadow: "2xl", borderColor: hoverColor, bg: cardHoverBg }}
            _dark={{
                borderColor: "gray.700",
                _hover: {
                    borderColor: hoverColor,
                    bg: "gray.800",
                },
            }}
        >
            <VStack align="stretch" spacing={4}>
                <Box
                    w="12"
                    h="12"
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="xl"
                    bg={`${hoverColor.split('.')[0]}.100`}
                    color={hoverColor}
                >
                    <Text fontSize="2xl">{emoji}</Text>
                </Box>
                <Heading size="md">{title}</Heading>
                <Text fontSize="sm" color={textMuted} lineHeight={1.7}>
                    {description}
                </Text>
                {link && linkText && (
                    <Link
                        href={link}
                        isExternal
                        color={hoverColor}
                        fontSize="sm"
                        display="inline-flex"
                        alignItems="center"
                        gap={1.5}
                    >
                        {linkText}
                        <ExternalLinkIcon />
                    </Link>
                )}
                {badge && (
                    <Badge colorScheme={badgeColor} borderRadius="full" px={3} py={1} alignSelf="flex-start">
                        {badge}
                    </Badge>
                )}
            </VStack>
        </Box>
    )
}
