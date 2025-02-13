import { Box, Code, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Heading, Image, Link, ListItem, OrderedList, Spacer, Text, UnorderedList, useDisclosure } from "@chakra-ui/react"
import React from "react"
import { CloseIcon } from "@chakra-ui/icons"
import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import remarkGfm from "remark-gfm"
import rehypeKatex from "rehype-katex"
import rehypeRaw from "rehype-raw"

export default function ExpAzure() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)
    return (
        <div id="azure">
            <Modal isOpen={isOpen} finalFocusRef={finalRef} onClose={onClose} id='azure' size={'2xl'}>
                <ModalOverlay id="azure"><ModalContent>
                    <ModalHeader id="azure">{`Microsoft Azure`}</ModalHeader>
                    <ModalBody>
                        <ReactMarkdown components={{ "h1": ({ node, ...props }) => <Heading size='2xl' {...props} />, "h2": ({ node, ...props }) => <Heading size='xl' {...props} />, "h3": ({ node, ...props }) => <Heading size='lg' {...props} />, "ul": UnorderedList, "ol": OrderedList, "li": ListItem, "p": Text, "a": Link, "code": ({ node, inline, className, children, ...props }) => { const match = (className || '').match(/language-(?<lang>.*)/); return !inline ? (<Prism children={String(children).replace(/ $/, '')} language={match ? match[1] : ''}             {...props} />) : (<Code {...props}>             {children}           </Code>); } }}
                            remarkPlugins={[remarkMath, remarkGfm]}
                            rehypePlugins={[rehypeKatex, rehypeRaw]}>{`
**Experience**
- Compute
    - Virtual Machines
    - Azure Functions
    - Azure Kubernetes Service (AKS)
- Storage
    - Blob Storage
    - Table Storage
    - Queue Storage
    - Azure Files
- Security and Identity
    - Azure Active Directory
    - Key Vault
    - Role-Based Access Control (RBAC)
- Networking
    - Virtual Networks
- Integration
    - Logic Apps
    - Service Bus
    - Event Grid
- Management
    - Azure Monitor
    - Azure Automation
`}</ReactMarkdown>
                    </ModalBody>
                    <ModalFooter><CloseIcon onClick={onClose} sx={{ cursor: 'pointer' }} /></ModalFooter>
                </ModalContent></ModalOverlay>
            </Modal>
            <Spacer />
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <Box p='2' align={'center'}>
                    <Image align="center"
                        src="/image/azure.png"
                        onClick={onOpen}
                        sx={{ "width": "6em", "boxShadow": "xl", "_hover": { "cursor": "pointer" } }} />
                </Box>
            </Box>
        </div>
    )
}