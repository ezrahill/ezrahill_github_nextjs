import {
    Badge,
    Box,
    HStack,
    Image,
    Text,
    VStack,
    useColorModeValue,
} from "@chakra-ui/react"

export default function CertificationBadge({
    imageSrc,
    title,
    subtitle,
    status = null,
    isExternal = false,
}) {
    const cardBg = useColorModeValue("white", "gray.900")
    const cardHoverBg = useColorModeValue("gray.50", "gray.800")
    const borderColor = useColorModeValue("gray.200", "gray.700")
    const textMuted = useColorModeValue("gray.600", "gray.300")

    const getStatusColor = (value) => {
        switch (value) {
            case "Current":
                return "green"
            case "Renewing":
                return "yellow"
            case "Expired":
                return "red"
            case "Planned":
                return "blue"
            default:
                return "gray"
        }
    }

    return (
        <Box
            borderRadius="2xl"
            borderWidth="1px"
            borderColor={borderColor}
            bg={cardBg}
            p={{ base: 5, md: 6 }}
            transition="all 0.3s ease"
            _hover={{ transform: "translateY(-4px)", shadow: "xl", bg: cardHoverBg, borderColor: "brand.200" }}
            _dark={{
                borderColor: "gray.700",
                _hover: {
                    borderColor: "brand.300",
                    bg: "gray.800",
                },
            }}
        >
            <HStack align="flex-start" spacing={4}>
                <Box
                    flexShrink={0}
                    w="14"
                    h="14"
                    borderRadius="xl"
                    bg="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    boxShadow="md"
                >
                    <Image
                        src={isExternal ? imageSrc : `/image/${imageSrc}`}
                        alt={`${title} ${subtitle}`}
                        boxSize="10"
                        objectFit="contain"
                        fallbackSrc="https://via.placeholder.com/80"
                    />
                </Box>
                <VStack align="stretch" spacing={2}>
                    <HStack justify="space-between" align="flex-start">
                        <Text fontWeight="600" lineHeight={1.4}>
                            {title}
                        </Text>
                        {status && (
                            <Badge colorScheme={getStatusColor(status)} borderRadius="full" px={3} py={1} fontSize="xs">
                                {status}
                            </Badge>
                        )}
                    </HStack>
                    <Text fontSize="sm" color={textMuted}>
                        {subtitle}
                    </Text>
                </VStack>
            </HStack>
        </Box>
    )
}
