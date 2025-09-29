import { Box, Center, Heading, Text, VStack, SimpleGrid } from "@chakra-ui/react"
import Head from "next/head"
import ExpAws from "../components/skills/aws"
import ExpVmware from "../components/skills/vmware"
import ExpPython from "../components/skills/python"
import ExpTerraform from "../components/skills/terraform"
import ExpAzure from "../components/skills/azure"
import ExpKubernetes from "../components/skills/kubernetes"
import ExpDocker from "../components/skills/docker"
import ExpFastAPI from "../components/skills/fastapi"
import ExpGitHubActions from "../components/skills/githubactions"
import ExpDatabases from "../components/skills/databases"
import ExpNextJS from "../components/skills/nextjs"
import ExpAI from "../components/skills/ai"
import Certifications from "../components/sections/certs"
import Projects from "../components/sections/projects"
import Personal from "../components/sections/personal"
import HeroSection from "../components/sections/hero"

export default function HomePage() {
    return (
        <Box>
            <Head>
                <title>Ezra Hill | Principal DevOps & Platform Engineering Leader</title>
                <meta
                    name="description"
                    content="Principal DevOps and platform engineering leader building resilient, efficient cloud platforms across AWS, Azure, and Kubernetes."
                />
            </Head>
            <HeroSection />

            <Box
                as="section"
                bgGradient={{ base: "linear(to-b, brand.50, white)", _dark: "linear(to-b, gray.900, gray.800)" }}
                py={{ base: 16, md: 20 }}
            >
                <Center px={{ base: 6, md: 12 }}>
                    <VStack spacing={10} w="100%" maxW="7xl">
                        <VStack spacing={3}>
                            <Heading size="lg" color="brand.600" _dark={{ color: "brand.200" }}>
                                Cloud Platforms
                            </Heading>
                            <Text color="gray.600" _dark={{ color: "gray.300" }} maxW="2xl" textAlign="center">
                                Orchestrating AWS, Azure, and VMware estates with governance, security, and automation built
                                in from day one.
                            </Text>
                        </VStack>
                        <Box
                            w="100%"
                            bg="white"
                            borderRadius="3xl"
                            borderWidth="1px"
                            borderColor="brand.100"
                            boxShadow="xl"
                            px={{ base: 4, md: 10 }}
                            py={{ base: 6, md: 10 }}
                            _dark={{ bg: "gray.900", borderColor: "gray.700", boxShadow: "dark-lg" }}
                        >
                            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                                <ExpAws />
                                <ExpAzure />
                                <ExpVmware />
                            </SimpleGrid>
                        </Box>
                    </VStack>
                </Center>
            </Box>

            <Box
                as="section"
                bgGradient={{ base: "linear(to-b, teal.50, white)", _dark: "linear(to-b, gray.900, gray.800)" }}
                py={{ base: 16, md: 20 }}
            >
                <Center px={{ base: 6, md: 12 }}>
                    <VStack spacing={10} w="100%" maxW="7xl">
                        <VStack spacing={3}>
                            <Heading size="lg" color="teal.600" _dark={{ color: "teal.200" }}>
                                DevOps & Infrastructure
                            </Heading>
                            <Text color="gray.600" _dark={{ color: "gray.300" }} maxW="2xl" textAlign="center">
                                Shipping dependable platforms with Kubernetes, Terraform, Pipelines, and hands-on SRE
                                practices.
                            </Text>
                        </VStack>
                        <Box
                            w="100%"
                            bg="white"
                            borderRadius="3xl"
                            borderWidth="1px"
                            borderColor="teal.100"
                            boxShadow="xl"
                            px={{ base: 4, md: 10 }}
                            py={{ base: 6, md: 10 }}
                            _dark={{ bg: "gray.900", borderColor: "gray.700", boxShadow: "dark-lg" }}
                        >
                            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
                                <ExpKubernetes />
                                <ExpDocker />
                                <ExpTerraform />
                                <ExpGitHubActions />
                            </SimpleGrid>
                        </Box>
                    </VStack>
                </Center>
            </Box>

            <Box
                as="section"
                bgGradient={{ base: "linear(to-b, purple.50, white)", _dark: "linear(to-b, gray.900, gray.800)" }}
                py={{ base: 16, md: 20 }}
            >
                <Center px={{ base: 6, md: 12 }}>
                    <VStack spacing={10} w="100%" maxW="7xl">
                        <VStack spacing={3}>
                            <Heading size="lg" color="purple.600" _dark={{ color: "purple.200" }}>
                                Development & Frameworks
                            </Heading>
                            <Text color="gray.600" _dark={{ color: "gray.300" }} maxW="2xl" textAlign="center">
                                Building robust services and front-ends with Python, FastAPI, Next.js, AI tooling, and modern
                                data platforms.
                            </Text>
                        </VStack>
                        <Box
                            w="100%"
                            bg="white"
                            borderRadius="3xl"
                            borderWidth="1px"
                            borderColor="purple.100"
                            boxShadow="xl"
                            px={{ base: 4, md: 10 }}
                            py={{ base: 6, md: 10 }}
                            _dark={{ bg: "gray.900", borderColor: "gray.700", boxShadow: "dark-lg" }}
                        >
                            <SimpleGrid columns={{ base: 1, md: 2, lg: 5 }} spacing={8}>
                                <ExpPython />
                                <ExpFastAPI />
                                <ExpNextJS />
                                <ExpDatabases />
                                <ExpAI />
                            </SimpleGrid>
                        </Box>
                    </VStack>
                </Center>
            </Box>

            <Box
                as="section"
                bgGradient={{ base: "linear(to-b, brand.50, white)", _dark: "linear(to-b, gray.900, gray.800)" }}
                py={{ base: 16, md: 20 }}
            >
                <Center px={{ base: 6, md: 12 }}>
                    <VStack spacing={10} w="100%" maxW="7xl">
                        <VStack spacing={3}>
                            <Heading size="lg" color="brand.600" _dark={{ color: "brand.200" }}>
                                Certifications
                            </Heading>
                            <Text color="gray.600" _dark={{ color: "gray.300" }} maxW="2xl" textAlign="center">
                                Current cloud and platform credentials that support day-to-day leadership and delivery.
                            </Text>
                        </VStack>
                        <Certifications />
                    </VStack>
                </Center>
            </Box>

            <Box
                as="section"
                bgGradient={{ base: "linear(to-b, teal.50, white)", _dark: "linear(to-b, gray.900, gray.800)" }}
                py={{ base: 16, md: 20 }}
            >
                <Center px={{ base: 6, md: 12 }}>
                    <VStack spacing={10} w="100%" maxW="7xl">
                        <VStack spacing={3}>
                            <Heading size="lg" color="teal.600" _dark={{ color: "teal.200" }}>
                                Recent Projects
                            </Heading>
                            <Text color="gray.600" _dark={{ color: "gray.300" }} maxW="2xl" textAlign="center">
                                Highlights from platform, automation, and developer-experience initiatives delivered across enterprise and scale-up teams.
                            </Text>
                        </VStack>
                        <Projects />
                    </VStack>
                </Center>
            </Box>

            <Box
                as="section"
                bgGradient={{ base: "linear(to-b, gray.100, white)", _dark: "linear(to-b, gray.900, gray.800)" }}
                py={{ base: 16, md: 20 }}
            >
                <Center px={{ base: 6, md: 12 }}>
                    <VStack spacing={10} w="100%" maxW="7xl">
                        <VStack spacing={3}>
                            <Heading size="lg" color="gray.700" _dark={{ color: "gray.200" }}>
                                Personal & Interests
                            </Heading>
                            <Text color="gray.600" _dark={{ color: "gray.300" }} maxW="2xl" textAlign="center">
                                The pursuits that keep energy high and curiosity sharp beyond day-to-day delivery.
                            </Text>
                        </VStack>
                        <Personal />
                    </VStack>
                </Center>
            </Box>
        </Box>
    )
}
