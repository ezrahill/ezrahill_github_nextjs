import { createIcon, Icon, Center, chakra, HStack, Link, Text, VStack } from '@chakra-ui/react'
import { faDev ,faGithubSquare, faLinkedin, faSquareTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {

    const convertIcon = faIcon => {
        const { icon, iconName } = faIcon;
        return createIcon({
            displayName: iconName,
            viewBox: `0 0 ${icon[0]} ${icon[1]}`,
            d: icon[4],
        })
    }

    return (
        <Center padding={10}>
            <HStack sx={{ fontSize: "80%", padding: "20px" }}>
                <Link isExternal={true} href='https://dev.to/ezrahill'>
                    <HStack>
                        <Icon as={convertIcon(faDev)} boxSize={7} />
                        <Text>{"ezrahill"}</Text>
                    </HStack>
                </Link>
                <Link isExternal={true} href='https://github.com/ezrahill'>
                    <HStack>
                        <Icon as={convertIcon(faGithubSquare)} boxSize={7} />
                        <Text>{"ezrahill"}</Text>
                    </HStack>
                </Link>
                <Link isExternal={true} href='https://linkedin.com/in/ezrahill'>
                    <HStack>
                        <Icon as={convertIcon(faLinkedin)} boxSize={7} />
                        <Text>{"ezrahill"}</Text>
                    </HStack>
                </Link>
                <Link isExternal={true} href='https://twitter.com/ezrahill'>
                    <HStack>
                        <Icon as={convertIcon(faSquareTwitter)} boxSize={7} />
                        <Text>{"ezrahill"}</Text>
                    </HStack>
                </Link>
            </HStack>
        </Center>
    )
}