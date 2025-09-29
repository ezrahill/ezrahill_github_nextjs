import { Box, Center, SimpleGrid, useColorModeValue } from "@chakra-ui/react"
import ProjectCard from "../ui/ProjectCard"
import { projectsData } from "../data/projectsData"

export default function Projects() {
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
                    {projectsData.map((project) => (
                        <ProjectCard
                            key={project.name}
                            name={project.name}
                            description={project.description}
                            tech={project.tech}
                            link={project.link}
                            githubLink={project.githubLink}
                            type={project.type}
                            status={project.status}
                        />
                    ))}
                </SimpleGrid>
            </Box>
        </Center>
    )
}
