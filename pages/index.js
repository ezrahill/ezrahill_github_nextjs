import {
    Box,
    Center,
    HStack,
    Heading,
    Image,
    Text,
    VStack,
    SimpleGrid,
} from "@chakra-ui/react";
import ExpAws from "../components/skills/aws";
import ExpVmware from "../components/skills/vmware";
import ExpPython from "../components/skills/python";
import ExpTerraform from "../components/skills/terraform";
import ExpAzure from "../components/skills/azure";
import ExpKubernetes from "../components/skills/kubernetes";
import ExpDocker from "../components/skills/docker";
import ExpFastAPI from "../components/skills/fastapi";
import ExpGitHubActions from "../components/skills/githubactions";
import ExpDatabases from "../components/skills/databases";
import ExpNextJS from "../components/skills/nextjs";
import ExpAI from "../components/skills/ai";
import Certifications from "../components/sections/certs";
import Projects from "../components/sections/projects";
import Personal from "../components/sections/personal";

export default function HomePage() {
    return (
        <Box>
            {/* Hero Section */}
            <Box className="hero-section" bg={{ base: "white", _dark: "gray.900" }}>
                <Center>
                    <Box className="hero-card">
                        <VStack spacing={8}>
                            <HStack spacing={6} align="center" flexDir={{ base: "column", md: "row" }}>
                                <Image
                                    src="/image/ezrahill.jpeg"
                                    className="hero-avatar"
                                />
                                <VStack alignItems={{ base: "center", md: "start" }} spacing={3}>
                                    <Heading className="hero-title">{`Ezra Hill`}</Heading>
                                    <Text className="hero-subtitle">{`DevOps | Cloud Infrastructure | Automation | Cost Optimisation`}</Text>
                                </VStack>
                            </HStack>

                            <Box maxW="4xl" textAlign="center">
                                <Text className="hero-description">
                                    DevOps leader with 25+ years in tech and a proven track record of designing
                                    scalable, secure, and cost-efficient cloud platforms. Known for saving over £1.2M
                                    through smart platform architecture, automating infrastructure, and driving DevOps
                                    transformation using AWS, Azure, Terraform, Ansible, Python, and CI/CD tooling.
                                    Equally comfortable leading teams, solving gnarly infrastructure problems, and delivering
                                    developer-first experiences.
                                </Text>
                            </Box>
                        </VStack>
                    </Box>
                </Center>
            </Box>
            {/* Cloud Platforms */}
            <Box className="section-white" bg={{ base: "white", _dark: "gray.900" }}>
                <Center mb={12}>
                    <Heading className="section-header" fontSize="3xl">{`Cloud Platforms`}</Heading>
                </Center>
                <Center>
                    <SimpleGrid
                        columns={{ base: 1, md: 2, lg: 3 }}
                        spacing={8}
                        maxWidth={"900px"}
                        width="100%"
                        px={8}
                    >
                        <ExpAws></ExpAws>
                        <ExpAzure></ExpAzure>
                        <ExpVmware></ExpVmware>
                    </SimpleGrid>
                </Center>
            </Box>

            {/* DevOps & Infrastructure */}
            <Box className="section-gray" bg={{ base: "gray.50", _dark: "gray.800" }}>
                <Center mb={12}>
                    <Heading className="section-header" fontSize="3xl">{`DevOps & Infrastructure`}</Heading>
                </Center>
                <Center>
                    <SimpleGrid
                        columns={{ base: 1, md: 2, lg: 4 }}
                        spacing={8}
                        maxWidth={"1200px"}
                        width="100%"
                        px={8}
                    >
                        <ExpKubernetes></ExpKubernetes>
                        <ExpDocker></ExpDocker>
                        <ExpTerraform></ExpTerraform>
                        <ExpGitHubActions></ExpGitHubActions>
                    </SimpleGrid>
                </Center>
            </Box>

            {/* Development & Frameworks */}
            <Box className="section-white" bg={{ base: "white", _dark: "gray.900" }}>
                <Center mb={12}>
                    <Heading className="section-header" fontSize="3xl">{`Development & Frameworks`}</Heading>
                </Center>
                <Center>
                    <SimpleGrid
                        columns={{ base: 1, md: 2, lg: 5 }}
                        spacing={8}
                        maxWidth={"1400px"}
                        width="100%"
                        px={8}
                    >
                        <ExpPython></ExpPython>
                        <ExpFastAPI></ExpFastAPI>
                        <ExpNextJS></ExpNextJS>
                        <ExpDatabases></ExpDatabases>
                        <ExpAI></ExpAI>
                    </SimpleGrid>
                </Center>
            </Box>

            {/* Certifications */}
            <Box className="section-gray" bg={{ base: "gray.50", _dark: "gray.800" }}>
                <Center mb={12}>
                    <Heading className="section-header" fontSize="3xl">{`Certifications`}</Heading>
                </Center>
                <Certifications></Certifications>
            </Box>

            {/* Projects - with background */}
            <Box className="section-white" bg={{ base: "white", _dark: "gray.900" }}>
                <Center mb={12}>
                    <Heading className="section-header" fontSize="3xl">{`Recent Projects`}</Heading>
                </Center>
                <Projects></Projects>
            </Box>

            {/* Personal & Interests */}
            <Box className="section-gray" bg={{ base: "gray.50", _dark: "gray.800" }}>
                <Center mb={12}>
                    <Heading className="section-header" fontSize="3xl">{`Personal & Interests`}</Heading>
                </Center>
                <Personal></Personal>
            </Box>
        </Box>
    );
}
