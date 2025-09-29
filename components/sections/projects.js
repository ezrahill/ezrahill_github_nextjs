import { Center, SimpleGrid } from "@chakra-ui/react"
import ProjectCard from "../ui/ProjectCard"
import { projectsData } from "../data/projectsData"

export default function Projects() {
    return (
        <Center padding={2}>
            <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                spacing={8}
                maxWidth={'1200px'}
                width="100%"
            >
                {projectsData.map((project, index) => (
                    <ProjectCard
                        key={index}
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
        </Center>
    );
}