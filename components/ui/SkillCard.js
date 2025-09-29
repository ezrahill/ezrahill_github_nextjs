import { Box, Image, Text } from "@chakra-ui/react"

export default function SkillCard({
    imageSrc,
    altText,
    title,
    subtitle,
    hoverColor = "brand.500",
    onClick,
    isExternal = false
}) {
    return (
        <Box
            bg="white"
            borderWidth='1px'
            borderColor="gray.200"
            borderRadius='xl'
            overflow='hidden'
            p={6}
            shadow="sm"
            _hover={{
                shadow: 'lg',
                transform: 'translateY(-4px)',
                borderColor: hoverColor,
                bg: 'gray.50'
            }}
            transition="all 0.3s ease"
            cursor="pointer"
            onClick={onClick}
            textAlign="center"
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
            <Image
                src={isExternal ? imageSrc : `/image/${imageSrc}`}
                alt={altText}
                width="80px"
                height="80px"
                objectFit="contain"
                mx="auto"
                mb={4}
                fallbackSrc="https://via.placeholder.com/80"
            />
            <Text fontSize="lg" fontWeight="600" color="gray.800" mb={2} _dark={{ color: "white" }}>
                {title}
            </Text>
            <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.300" }}>
                {subtitle}
            </Text>
        </Box>
    )
}