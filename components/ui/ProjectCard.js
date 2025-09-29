import { Box, Heading, Text, Link, Badge, VStack, HStack, Button, Icon } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"

export default function ProjectCard({
    name,
    description,
    tech = [],
    link,
    type,
    status = null,
    githubLink = null
}) {
    const getTypeColor = (type) => {
        switch(type) {
            case 'SaaS': return 'purple';
            case 'Enterprise': return 'blue';
            case 'Personal': return 'green';
            case 'Open Source': return 'orange';
            case 'Platform': return 'teal';
            default: return 'gray';
        }
    };

    const getStatusColor = (status) => {
        switch(status) {
            case 'Active': return 'green';
            case 'In Development': return 'yellow';
            case 'Completed': return 'blue';
            case 'Archived': return 'gray';
            case 'Planned': return 'red';
            default: return null;
        }
    };

    return (
        <Box
            bg="white"
            borderWidth='1px'
            borderColor="gray.200"
            borderRadius='xl'
            p={6}
            shadow="sm"
            _hover={{
                shadow: 'lg',
                transform: 'translateY(-4px)',
                borderColor: 'brand.500',
                bg: 'gray.50'
            }}
            transition="all 0.3s ease"
            position="relative"
            _dark={{
                bg: "gray.800",
                borderColor: "gray.600",
                color: "white",
                _hover: {
                    bg: "gray.700",
                    borderColor: "brand.300"
                }
            }}
        >
            <VStack align="start" spacing={4} height="100%">
                {/* Header */}
                <HStack justify="space-between" width="100%" align="start">
                    <VStack align="start" spacing={1} flex={1}>
                        <Heading size="md" color="gray.800" lineHeight={1.2}>
                            {name}
                        </Heading>
                        <HStack spacing={2}>
                            <Badge
                                colorScheme={getTypeColor(type)}
                                variant="solid"
                                borderRadius="full"
                                px={3}
                                py={1}
                                fontSize="xs"
                            >
                                {type}
                            </Badge>
                            {status && (
                                <Badge
                                    colorScheme={getStatusColor(status)}
                                    variant="outline"
                                    borderRadius="full"
                                    px={3}
                                    py={1}
                                    fontSize="xs"
                                >
                                    {status}
                                </Badge>
                            )}
                        </HStack>
                    </VStack>
                </HStack>

                {/* Description */}
                <Text
                    fontSize="sm"
                    color="gray.600"
                    lineHeight={1.6}
                    flex={1}
                >
                    {description}
                </Text>

                {/* Tech Stack */}
                <HStack wrap="wrap" spacing={2} width="100%">
                    {tech.map((techItem, techIndex) => (
                        <Badge
                            key={techIndex}
                            variant="subtle"
                            colorScheme="gray"
                            fontSize="xs"
                            borderRadius="md"
                            px={2}
                            py={1}
                        >
                            {techItem}
                        </Badge>
                    ))}
                </HStack>

                {/* Links */}
                <HStack spacing={3} width="100%" pt={2}>
                    {link && link !== "#" && (
                        <Link href={link} isExternal>
                            <Button
                                size="sm"
                                colorScheme="blue"
                                variant="outline"
                                rightIcon={<ExternalLinkIcon />}
                                _hover={{ bg: 'blue.50' }}
                            >
                                View Project
                            </Button>
                        </Link>
                    )}
                    {githubLink && (
                        <Link href={githubLink} isExternal>
                            <Button
                                size="sm"
                                variant="ghost"
                                rightIcon={<ExternalLinkIcon />}
                                _hover={{ bg: 'gray.100' }}
                            >
                                GitHub
                            </Button>
                        </Link>
                    )}
                </HStack>
            </VStack>
        </Box>
    );
}