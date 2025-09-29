import { Box, Center, SimpleGrid, useColorModeValue } from "@chakra-ui/react"
import CertificationBadge from "../ui/CertificationBadge"
import { certificationsData } from "../data/certificationsData"

export default function Certifications() {
    const containerBg = useColorModeValue("white", "gray.900")
    const containerBorder = useColorModeValue("gray.200", "gray.700")
    const containerShadow = useColorModeValue("xl", "dark-lg")

    return (
        <Center px={{ base: 6, md: 10 }}>
            <Box
                w="100%"
                maxW="6xl"
                bg={containerBg}
                borderWidth="1px"
                borderColor={containerBorder}
                borderRadius="3xl"
                p={{ base: 6, md: 10 }}
                boxShadow={containerShadow}
            >
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={{ base: 4, md: 6 }}>
                    {certificationsData.map((cert) => (
                        <CertificationBadge
                            key={`${cert.title}-${cert.subtitle}`}
                            imageSrc={cert.imageSrc}
                            title={cert.title}
                            subtitle={cert.subtitle}
                            status={cert.status}
                            isExternal={cert.isExternal}
                        />
                    ))}
                </SimpleGrid>
            </Box>
        </Center>
    )
}
