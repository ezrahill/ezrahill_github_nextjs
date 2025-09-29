import { Code, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Heading, Link, ListItem, OrderedList, Text, UnorderedList, useDisclosure } from "@chakra-ui/react"
import SkillCard from "../ui/SkillCard"
import React from "react"
import { CloseIcon } from "@chakra-ui/icons"
import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import remarkGfm from "remark-gfm"
import rehypeKatex from "rehype-katex"
import rehypeRaw from "rehype-raw"

export default function ExpAI() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)
    return (
        <div id="ai">
            <Modal isOpen={isOpen} finalFocusRef={finalRef} onClose={onClose} id='ai' size={'2xl'}>
                <ModalOverlay id="ai"><ModalContent>
                    <ModalHeader id="ai">{`AI-Powered Development Tools`}</ModalHeader>
                    <ModalBody>
                        <ReactMarkdown components={{ "h1": ({ node, ...props }) => <Heading size='2xl' {...props} />, "h2": ({ node, ...props }) => <Heading size='xl' {...props} />, "h3": ({ node, ...props }) => <Heading size='lg' {...props} />, "ul": UnorderedList, "ol": OrderedList, "li": ListItem, "p": Text, "a": Link, "code": ({ node, inline, className, children, ...props }) => { const match = (className || '').match(/language-(?<lang>.*)/); return !inline ? (<Prism children={String(children).replace(/ $/, '')} language={match ? match[1] : ''}             {...props} />) : (<Code {...props}>             {children}           </Code>); } }}
                            remarkPlugins={[remarkMath, remarkGfm]}
                            rehypePlugins={[rehypeKatex, rehypeRaw]}>{`
**Experience**
- AI Development Tools
    - GitHub Copilot for code generation
    - Claude Code for development tasks
    - Claude for technical documentation
    - Custom GPT agents for automation
- Code Generation & Review
    - Automated code completion
    - AI-assisted code refactoring
    - Intelligent error debugging
    - Documentation generation
- Infrastructure Automation
    - AI-powered Terraform generation
    - Intelligent configuration management
    - Automated troubleshooting scripts
    - Smart monitoring and alerting
- Productivity Enhancement
    - Custom automation workflows
    - AI-assisted technical writing
    - Intelligent log analysis
    - Automated testing strategies
- Platform Integration
    - OpenAI API integration
    - Claude API for custom tools
    - LLM-powered DevOps workflows
    - AI assistant implementations
`}</ReactMarkdown>
                    </ModalBody>
                    <ModalFooter><CloseIcon onClick={onClose} sx={{ cursor: 'pointer' }} /></ModalFooter>
                </ModalContent></ModalOverlay>
            </Modal>
            <SkillCard
                imageSrc="https://cdn-icons-png.flaticon.com/512/8636/8636795.png"
                altText="Artificial Intelligence"
                title="AI Development Tools"
                subtitle="Copilot, Claude, Automation"
                hoverColor="purple.400"
                onClick={onOpen}
                isExternal={true}
            />
        </div>
    )
}