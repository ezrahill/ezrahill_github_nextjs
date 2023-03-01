import { Box, Center, SimpleGrid, Image, Text } from "@chakra-ui/react"

export default function ExpAws() {
    return (
        <Center padding={2}>
            <SimpleGrid minChildWidth={'120px'} minWidth={'240px'} maxWidth={'600px'} spacing={5}>
                <Box height='150px' align={"center"}>
                        <Image
                        src="/aws_ccp.png"
                        boxSize={'110px'} />
                        <Text fontSize={12}>{'AWS Certified'}</Text>
                        <Text fontSize={12}>{'Cloud Practitioner'}</Text>
            </Box>
            <Box height='150px' align={"center"}>
                        <Image
                            src="/aws_csaa.png"
                            boxSize={'110px'} />
                        <Text fontSize={12}>{'AWS Certified'}</Text>
                        <Text fontSize={12}>{'Solutions Architect'}</Text>
            </Box>
            <Box height='150px' align={"center"}>
                        <Image
                            src="/aws_cda.png"
                            boxSize={'110px'} />
                        <Text fontSize={12}>{'AWS Certified'}</Text>
                        <Text fontSize={12}>{'Developer'}</Text>
            </Box>
            <Box height='150px' align={"center"}>
                        <Image
                            src="/vcix.png"
                            boxSize={'110px'} />
                        <Text fontSize={12}>{'VMware Certified Implementation Expert'}</Text>
                        <Text fontSize={12}>{'Data Center Virtualization 6'}</Text>
                </Box>
                <Box height='150px' align={"center"}>
                        <Image
                            src="/vmware_vmc.png"
                            boxSize={'110px'} />
                        <Text fontSize={12}>{'VMware Cloud on AWS'}</Text>
                        <Text fontSize={12}>{'Trained Professional'}</Text>
                </Box>
                <Box height='150px' align={"center"}>
                        <Image
                            src="/vcp_dcv.png"
                            boxSize={'110px'} />
                        <Text fontSize={12}>{'VMware Certified Professional'}</Text>
                        <Text fontSize={12}>{'Data Center Virtualization 2019'}</Text>
                </Box>
                <Box height='150px' align={"center"}>
                        <Image
                            src="/vcp_nv.png"
                            boxSize={'110px'} />
                        <Text fontSize={12}>{'VMware Certified Professional'}</Text>
                        <Text fontSize={12}>{'Network Virtualization 6'}</Text>
            </Box>
            <Box height='150px' align={"center"}>
                        <Image
                            src="/lpic1.png"
                            boxSize={'110px'} />
                        <Text fontSize={14}>{'CompTIA Linux+'}</Text>
                        <Text fontSize={14}>{'LPIC-1 Certified'}</Text>
            </Box>
        </SimpleGrid>
        </Center >
    )
}