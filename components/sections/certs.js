import { Center, SimpleGrid } from "@chakra-ui/react"
import CertificationBadge from "../ui/CertificationBadge"
import { certificationsData } from "../data/certificationsData"

export default function Certifications() {
    return (
        <Center padding={2}>
            <SimpleGrid minChildWidth={'120px'} minWidth={'240px'} maxWidth={'800px'} spacing={5}>
                {certificationsData.map((cert, index) => (
                    <CertificationBadge
                        key={index}
                        imageSrc={cert.imageSrc}
                        title={cert.title}
                        subtitle={cert.subtitle}
                        status={cert.status}
                        isExternal={cert.isExternal}
                    />
                ))}
            </SimpleGrid>
        </Center >
    )
}