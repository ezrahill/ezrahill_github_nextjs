import { Box, Text, Link, Badge, VStack, HStack, Heading } from "@chakra-ui/react"
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
    return (
        <Box
            bg="white"
            borderWidth='1px'
            borderColor="gray.200"
            borderRadius='xl'
            p={6}
            shadow="sm"
            _hover={{
                shadow: 'lg',
                transform: 'translateY(-4px)',
                borderColor: hoverColor,
                bg: 'gray.50'
            }}
            transition="all 0.3s ease"
            _dark={{
                bg: "gray.800",
                borderColor: "gray.600",
                color: "white",
                _hover: {
                    bg: "gray.700",
                    borderColor: hoverColor
                }
            }}
        >
            <VStack align="start" spacing={3}>
                <HStack>
                    <Text fontSize="2xl">{emoji}</Text>
                    <Heading size="md" color="gray.800" _dark={{ color: "white" }}>{title}</Heading>
                </HStack>
                <Text fontSize="sm" color="gray.600" lineHeight={1.6} _dark={{ color: "gray.300" }}>
                    {description}
                </Text>
                {link && linkText && (
                    <Link href={link} isExternal color="blue.500">
                        <HStack>
                            <Text fontSize="sm">{linkText}</Text>
                            <ExternalLinkIcon />
                        </HStack>
                    </Link>
                )}
                {badge && (
                    <Badge colorScheme={badgeColor}>{badge}</Badge>
                )}
            </VStack>
        </Box>
    );
}