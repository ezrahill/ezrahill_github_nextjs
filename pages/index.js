import { Box, Button, Center, Code, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, HStack, Heading, Image, ListItem, OrderedList, Spacer, Text, Tooltip, UnorderedList, VStack, useColorMode, useDisclosure } from "@chakra-ui/react"
import React from "react"
import { CloseIcon } from "@chakra-ui/icons"
import ExpAws from '../components/aws'
import ExpVmware from '../components/vmware'
// import { Link } from '@chakra-ui/next-js'

export default function HomePage() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)

    return (
        <Box>
            <VStack>
                <HStack sx={{ "padding": "10px" }}>
                    <Image
                        src="/ezrahill.jpeg"
                        sx={{ "width": "7em", "borderRadius": "70px 70px", "border": "1px solid #555", "boxShadow": "xl" }} />
                    <VStack alignItems="start" sx={{ "padding": "10px" }}>
                        <Heading sx={{ "fontSize": "3em", "fontWeight": "600", "color": "#6b9080" }}>{`Ezra Hill`}</Heading>
                        <Text sx={{ "fontSize": "22", "fontWeight": "500" }}>{`Lead DevOps Engineer`}</Text>
                    </VStack>
                </HStack>
            </VStack>
            <Center>
                <Box sx={{ "borderRadius": "md", "width": "70%" }}>
                    <Text>{`
                        With over 23 years of tech industry experience, I'm a Lead DevOps Engineer who excels at designing and maintaining secure, highly available, and scalable on-prem/cloud infrastructures. I specialise in DevOps methodologies, continuous integration and delivery, and have a proven track record of managing complex environments and leading teams to deliver high-quality solutions. With strong communication and interpersonal skills, I collaborate effectively with stakeholders at all levels and thrive in fast-paced, dynamic environments.
                    `}
                    </Text>
                </Box>
            </Center>
            <Center><VStack><Heading sx={{ "padding": "10px", "fontSize": 30, "fontWeight": "600", "color": "#6b9080" }}>{`Experience`}</Heading>
                <HStack sx={{ "padding": "10px" }}>
                    <ExpAws></ExpAws>
                    <ExpVmware></ExpVmware>
                </HStack>
            </VStack></Center>
        </Box>
    )
}