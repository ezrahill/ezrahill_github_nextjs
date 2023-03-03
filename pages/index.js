import { Box, Center, HStack, Heading, Image, Text, VStack, Flex, SimpleGrid } from "@chakra-ui/react"
import React from "react"
import ExpAws from '../components/aws'
import ExpVmware from '../components/vmware'
import ExpPython from "../components/python"
import ExpTerraform from "../components/terraform"
import Certifications from '../components/certs'
// import { Link } from '@chakra-ui/next-js'

export default function HomePage() {
    return (
        <Box>
            {/* Profile Picture and Title */}
            <VStack>
                <HStack sx={{ "padding": "10px" }}>
                    <Image
                        src="/image/ezrahill.jpeg"
                        sx={{ "width": "7em", "borderRadius": "70px 70px", "border": "1px solid #555", "boxShadow": "xl" }} />
                    <VStack alignItems="start" sx={{ "padding": "10px" }}>
                        <Heading sx={{ "fontSize": "3em", "fontWeight": "600", "color": "#5d7000" }}>{`Ezra Hill`}</Heading>
                        <Text sx={{ "fontSize": "22", "fontWeight": "500" }}>{`Lead DevOps Engineer`}</Text>
                    </VStack>
                </HStack>
            </VStack>
            {/* Profile */}
            <Center>
                <Box sx={{ "borderRadius": "md", "width": "70%" }}>
                    <Text>{`
                        With over 23 years of tech industry experience, a Lead DevOps Engineer who excels at designing, developing and maintaining secure, highly available, and scalable on-premise/cloud-based infrastructures using technologies such as Ansible, AWS, Docker, Jenkins, Python, VMware.  Specialising in DevOps methodologies, continuous integration and delivery (CI/CD), and having a proven track record of managing complex environments and leading teams to deliver high-quality solutions using Agile methodologies. With strong communication and interpersonal skills, collaborating effectively with stakeholders at all levels and thriving in fast-paced, dynamic environments.
                    `}
                    </Text>
                </Box>
            </Center>
            {/* Experience */}
            <Center padding={6}>
                <Heading sx={{ "padding": "10px", "fontSize": 30, "fontWeight": "600", "color": "#5d7000" }}>{`Experience`}</Heading>
            </Center>
            <Center>
                <SimpleGrid padding={8} minChildWidth={'120px'} minWidth={'240px'} maxWidth={'650px'} spacing={5}>
                    <ExpAws></ExpAws>
                    <ExpPython></ExpPython>
                    <ExpVmware></ExpVmware>
                    <ExpTerraform></ExpTerraform>
                </SimpleGrid>
            </Center>

            {/* Certifications */}
            <Center padding={8}><Heading sx={{ "padding": "10px", "fontSize": 30, "fontWeight": "600", "color": "#5d7000" }}>{`Certifications`}</Heading>

            </Center>
            <Certifications></Certifications>
        </Box>
    )
}