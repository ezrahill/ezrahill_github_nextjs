import { Box, Center, SimpleGrid, useColorModeValue } from "@chakra-ui/react"
import PersonalCard from "../ui/PersonalCard"

export default function Personal() {
    const containerBg = useColorModeValue("white", "gray.900")
    const containerBorder = useColorModeValue("gray.200", "gray.700")
    const containerShadow = useColorModeValue("xl", "dark-lg")

    return (
        <Center px={{ base: 6, md: 10 }}>
            <Box
                w="100%"
                maxW="7xl"
                bg={containerBg}
                borderWidth="1px"
                borderColor={containerBorder}
                borderRadius="3xl"
                p={{ base: 6, md: 10 }}
                boxShadow={containerShadow}
            >
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 6, md: 8 }}>
                    <PersonalCard
                        emoji="🚴"
                        title="Cycling Enthusiast"
                        description="Passionate road cyclist, regularly participating in local events and long-distance rides. Track my rides and training on Strava."
                        hoverColor="orange.400"
                        link="https://www.strava.com/athletes/ezrahill"
                        linkText="Follow on Strava"
                        badge="8000+ km in 2024"
                        badgeColor="orange"
                    />

                    <PersonalCard
                        emoji="🏠"
                        title="Homelab Builder"
                        description="Running a personal datacenter with Kubernetes, self-hosted services, and experimenting with latest DevOps tools and practices."
                        hoverColor="green.400"
                        badge="Active Project"
                        badgeColor="green"
                    />

                    <PersonalCard
                        emoji="🎓"
                        title="Continuous Learning"
                        description="Always exploring new technologies, obtaining certifications, and staying current with industry best practices."
                        hoverColor="blue.400"
                        badge="Multi-Cloud Certified"
                        badgeColor="blue"
                    />
                </SimpleGrid>
            </Box>
        </Center>
    )
}
