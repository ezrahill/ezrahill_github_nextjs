import { Box, Image, Text, Badge } from "@chakra-ui/react"

export default function CertificationBadge({
    imageSrc,
    title,
    subtitle,
    status = null,
    isExternal = false
}) {
    const getStatusColor = (status) => {
        switch(status) {
            case 'Current': return 'green';
            case 'Renewing': return 'yellow';
            case 'Expired': return 'red';
            case 'Planned': return 'blue';
            default: return null;
        }
    };

    return (
        <Box height='180px' align={"center"} position="relative">
            {status && (
                <Badge
                    colorScheme={getStatusColor(status)}
                    position="absolute"
                    top="0"
                    right="0"
                >
                    {status}
                </Badge>
            )}
            <Image
                src={isExternal ? imageSrc : `/image/${imageSrc}`}
                boxSize={'110px'}
                alt={`${title} ${subtitle}`}
                fallbackSrc="https://via.placeholder.com/110"
            />
            <Text fontSize={12}>{title}</Text>
            <Text fontSize={12}>{subtitle}</Text>
        </Box>
    );
}