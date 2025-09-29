import { createIcon, Icon, Center, HStack, Link, Text, VStack, Divider, Box } from '@chakra-ui/react'
import { faDev, faGithubSquare, faLinkedin, faSquareTwitter, faStrava } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faBlog } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {

    const convertIcon = faIcon => {
        const { icon, iconName } = faIcon
        return createIcon({
            displayName: iconName,
            viewBox: `0 0 ${icon[0]} ${icon[1]}`,
            d: icon[4],
        })
    }

    return (
        <Box as="footer" bg={{ base: "gray.50", _dark: "gray.800" }} mt={10}>
            <Divider borderColor={{ base: "gray.200", _dark: "gray.600" }} />
            <Center padding={8}>
                <VStack spacing={4}>
                    <HStack spacing={6} wrap="wrap" justify="center">
                        <Link isExternal={true} href='https://github.com/ezrahill'>
                            <HStack spacing={2} color={{ base: "gray.600", _dark: "gray.300" }} _hover={{ color: { base: 'blue.500', _dark: 'blue.300' } }}>
                                <Icon as={convertIcon(faGithubSquare)} boxSize={6} />
                                <Text fontSize="sm">{"GitHub"}</Text>
                            </HStack>
                        </Link>
                        <Link isExternal={true} href='https://linkedin.com/in/ezrahill'>
                            <HStack spacing={2} color={{ base: "gray.600", _dark: "gray.300" }} _hover={{ color: { base: 'blue.500', _dark: 'blue.300' } }}>
                                <Icon as={convertIcon(faLinkedin)} boxSize={6} />
                                <Text fontSize="sm">{"LinkedIn"}</Text>
                            </HStack>
                        </Link>
                        <Link isExternal={true} href='https://twitter.com/ezrahill'>
                            <HStack spacing={2} color={{ base: "gray.600", _dark: "gray.300" }} _hover={{ color: { base: 'blue.500', _dark: 'blue.300' } }}>
                                <Icon as={convertIcon(faSquareTwitter)} boxSize={6} />
                                <Text fontSize="sm">{"Twitter"}</Text>
                            </HStack>
                        </Link>
                        <Link isExternal={true} href='https://dev.to/ezrahill'>
                            <HStack spacing={2} color={{ base: "gray.600", _dark: "gray.300" }} _hover={{ color: { base: 'blue.500', _dark: 'blue.300' } }}>
                                <Icon as={convertIcon(faDev)} boxSize={6} />
                                <Text fontSize="sm">{"Dev.to"}</Text>
                            </HStack>
                        </Link>
                        <Link isExternal={true} href='https://www.ezrahill.co.uk'>
                            <HStack spacing={2} color={{ base: "gray.600", _dark: "gray.300" }} _hover={{ color: { base: 'blue.500', _dark: 'blue.300' } }}>
                                <Icon as={convertIcon(faBlog)} boxSize={6} />
                                <Text fontSize="sm">{"Blog"}</Text>
                            </HStack>
                        </Link>
                        <Link isExternal={true} href='https://www.strava.com/athletes/ezrahill'>
                            <HStack spacing={2} color={{ base: "gray.600", _dark: "gray.300" }} _hover={{ color: { base: 'orange.500', _dark: 'orange.300' } }}>
                                <Icon as={convertIcon(faStrava)} boxSize={6} />
                                <Text fontSize="sm">{"Strava"}</Text>
                            </HStack>
                        </Link>
                        <Link href='mailto:contact@ezrahill.com'>
                            <HStack spacing={2} color={{ base: "gray.600", _dark: "gray.300" }} _hover={{ color: { base: 'blue.500', _dark: 'blue.300' } }}>
                                <Icon as={convertIcon(faEnvelope)} boxSize={6} />
                                <Text fontSize="sm">{"Email"}</Text>
                            </HStack>
                        </Link>
                    </HStack>
                    <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.400" }}>
                        © 2025 Ezra Hill | Principal DevOps & Platform Engineer
                    </Text>
                </VStack>
            </Center>
        </Box>
    )
}
