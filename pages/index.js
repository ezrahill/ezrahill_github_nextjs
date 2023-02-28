import { Box, Button, Center, Code, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, HStack, Heading, Image, ListItem, OrderedList, Spacer, Text, Tooltip, UnorderedList, VStack, useColorMode } from "@chakra-ui/react"
// import NavBar from '../components/navbar'
// import { Link } from '@chakra-ui/next-js'

export default function HomePage() {
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
        </Box>
    )
}