import { Code, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Heading, Link, ListItem, OrderedList, Text, UnorderedList, useDisclosure } from "@chakra-ui/react"
import SkillCard from "../ui/SkillCard"
import React from "react"
import { CloseIcon } from "@chakra-ui/icons"
import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import remarkGfm from "remark-gfm"
import rehypeKatex from "rehype-katex"
import rehypeRaw from "rehype-raw"

export default function ExpDocker() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)
    return (
        <div id="docker">
            <Modal isOpen={isOpen} finalFocusRef={finalRef} onClose={onClose} id='docker' size={'2xl'}>
                <ModalOverlay id="docker"><ModalContent>
                    <ModalHeader id="docker">{`Docker & Containerization`}</ModalHeader>
                    <ModalBody>
                        <ReactMarkdown components={{ "h1": ({ node, ...props }) => <Heading size='2xl' {...props} />, "h2": ({ node, ...props }) => <Heading size='xl' {...props} />, "h3": ({ node, ...props }) => <Heading size='lg' {...props} />, "ul": UnorderedList, "ol": OrderedList, "li": ListItem, "p": Text, "a": Link, "code": ({ node, inline, className, children, ...props }) => { const match = (className || '').match(/language-(?<lang>.*)/); return !inline ? (<Prism children={String(children).replace(/ $/, '')} language={match ? match[1] : ''}             {...props} />) : (<Code {...props}>             {children}           </Code>); } }}
                            remarkPlugins={[remarkMath, remarkGfm]}
                            rehypePlugins={[rehypeKatex, rehypeRaw]}>{`
**Experience**
- Containerization
    - Multi-stage Dockerfile optimization
    - Docker Compose for local development
    - Container security scanning (Trivy, Snyk)
- Registry Management
    - Docker Hub, ECR, ACR, GCR
    - Harbor private registry
    - Image vulnerability scanning
- Runtime & Orchestration
    - Docker Swarm
    - Container runtime security
    - Resource optimization
`}</ReactMarkdown>
                    </ModalBody>
                    <ModalFooter><CloseIcon onClick={onClose} sx={{ cursor: 'pointer' }} /></ModalFooter>
                </ModalContent></ModalOverlay>
            </Modal>
            <SkillCard
                imageSrc="https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png"
                altText="Docker"
                title="Docker"
                subtitle="Containerization"
                hoverColor="cyan.400"
                onClick={onOpen}
                isExternal={true}
            />

        </div>
    )
}