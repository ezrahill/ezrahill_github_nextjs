import { Box, Code, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Heading, Image, Link, ListItem, OrderedList, Spacer, Text, UnorderedList, useDisclosure } from "@chakra-ui/react"
import React from "react"
import { CloseIcon } from "@chakra-ui/icons"
import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import remarkGfm from "remark-gfm"
import rehypeKatex from "rehype-katex"
import rehypeRaw from "rehype-raw"

export default function ExpTerraform() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)
    return (
        <div id="aws">
            <Modal isOpen={isOpen} finalFocusRef={finalRef} onClose={onClose} id='aws' size={'2xl'}>
                <ModalOverlay id="aws"><ModalContent>
                    <ModalHeader id="aws">{`Terraform`}</ModalHeader>
                    <ModalBody>
                        <ReactMarkdown components={{ "h1": ({ node, ...props }) => <Heading size='2xl' {...props} />, "h2": ({ node, ...props }) => <Heading size='xl' {...props} />, "h3": ({ node, ...props }) => <Heading size='lg' {...props} />, "ul": UnorderedList, "ol": OrderedList, "li": ListItem, "p": Text, "a": Link, "code": ({ node, inline, className, children, ...props }) => { const match = (className || '').match(/language-(?<lang>.*)/); return !inline ? (<Prism children={String(children).replace(/ $/, '')} language={match ? match[1] : ''}             {...props} />) : (<Code {...props}>             {children}           </Code>); } }}
                            remarkPlugins={[remarkMath, remarkGfm]}
                            rehypePlugins={[rehypeKatex, rehypeRaw]}>{`
**Experience**
- Provisioning Infrastructure
    - AWS
    - VMware
    - Proxmox
`}</ReactMarkdown>
                    </ModalBody>
                    <ModalFooter><CloseIcon onClick={onClose} /></ModalFooter>
                </ModalContent></ModalOverlay>
            </Modal>
            <Spacer />
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <Box p='2'>
                    <Image align="center"
                        src="/image/terraform.png"
                        onClick={onOpen}
                        sx={{ "width": "6em", "boxShadow": "xl", "_hover": { "cursor": "pointer" } }} />
                </Box>
            </Box>

        </div>
    )
}