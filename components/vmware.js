import { Box, Button, Center, Code, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, HStack, Heading, Image, Link, ListItem, OrderedList, Spacer, Text, Tooltip, UnorderedList, VStack, useColorMode, useDisclosure } from "@chakra-ui/react"
import React from "react"
import { CloseIcon } from "@chakra-ui/icons"
import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import remarkGfm from "remark-gfm"
import rehypeKatex from "rehype-katex"
import rehypeRaw from "rehype-raw"

export default function ExpVmware() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)
    return (
        <div id="vmware">
            <Modal isOpen={isOpen} finalFocusRef={finalRef} onClose={onClose} id='vmware' size={'2xl'}>
                <ModalOverlay id="vmware"><ModalContent>
                    <ModalHeader id="vmware">{`VMware`}</ModalHeader>
                    <ModalBody>
                        <ReactMarkdown components={{ "h1": ({ node, ...props }) => <Heading size='2xl' {...props} />, "h2": ({ node, ...props }) => <Heading size='xl' {...props} />, "h3": ({ node, ...props }) => <Heading size='lg' {...props} />, "ul": UnorderedList, "ol": OrderedList, "li": ListItem, "p": Text, "a": Link, "code": ({ node, inline, className, children, ...props }) => { const match = (className || '').match(/language-(?<lang>.*)/); return !inline ? (<Prism children={String(children).replace(/ $/, '')} language={match ? match[1] : ''}             {...props} />) : (<Code {...props}>             {children}           </Code>); } }}
                            remarkPlugins={[remarkMath, remarkGfm]}
                            rehypePlugins={[rehypeKatex, rehypeRaw]}>{`
**Experience**
- Designed and installed many solutions ranging from small deployments to large multi-site implementation.
- vSphere
    - Replication
    - vCenter
    - ESXi
- vRealize Operations
- vRealize LogInsight
- Site Recovery Manager

**Certifications**
- VMware Certified Professional: Data Center Virtualization 4/5/6 and 2019
- VMware Certified Professional: Network Virtualization 6
- VMware Certified Implementation Expert: Data Center Virtualization 6
- VMware Cloud on AWS - Trained Professional 
`}</ReactMarkdown>
                    </ModalBody>
                    <ModalFooter><CloseIcon onClick={onClose} /></ModalFooter>
                </ModalContent></ModalOverlay>
            </Modal>
            <Spacer />
            <Image align="center"
                src="/image/vmware.png"
                onClick={onOpen}
                sx={{ "height": "6em", "boxShadow": "xl", "_hover": { "cursor": "pointer" } }} />
        </div>
    )
}