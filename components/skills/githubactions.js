import { Code, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Heading, Link, ListItem, OrderedList, Text, UnorderedList, useDisclosure } from "@chakra-ui/react"
import SkillCard from "../ui/SkillCard"
import React from "react"
import { CloseIcon } from "@chakra-ui/icons"
import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import remarkGfm from "remark-gfm"
import rehypeKatex from "rehype-katex"
import rehypeRaw from "rehype-raw"

export default function ExpGitHubActions() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)
    return (
        <div id="githubactions">
            <Modal isOpen={isOpen} finalFocusRef={finalRef} onClose={onClose} id='githubactions' size={'2xl'}>
                <ModalOverlay id="githubactions"><ModalContent>
                    <ModalHeader id="githubactions">{`CI/CD & DevOps Tools`}</ModalHeader>
                    <ModalBody>
                        <ReactMarkdown components={{ "h1": ({ node, ...props }) => <Heading size='2xl' {...props} />, "h2": ({ node, ...props }) => <Heading size='xl' {...props} />, "h3": ({ node, ...props }) => <Heading size='lg' {...props} />, "ul": UnorderedList, "ol": OrderedList, "li": ListItem, "p": Text, "a": Link, "code": ({ node, inline, className, children, ...props }) => { const match = (className || '').match(/language-(?<lang>.*)/); return !inline ? (<Prism children={String(children).replace(/ $/, '')} language={match ? match[1] : ''}             {...props} />) : (<Code {...props}>             {children}           </Code>); } }}
                            remarkPlugins={[remarkMath, remarkGfm]}
                            rehypePlugins={[rehypeKatex, rehypeRaw]}>{`
**Experience**
- CI/CD Platforms
    - GitHub Actions & Workflows
    - Azure DevOps Pipelines
    - Jenkins & Jenkins X
    - GitLab CI/CD
- Automation & IaC
    - Ansible Automation Platform
    - Terraform Cloud/Enterprise
    - Packer image building
- Monitoring & Observability
    - Prometheus & Grafana
    - Datadog APM
    - ELK Stack
    - Azure Monitor
`}</ReactMarkdown>
                    </ModalBody>
                    <ModalFooter><CloseIcon onClick={onClose} sx={{ cursor: 'pointer' }} /></ModalFooter>
                </ModalContent></ModalOverlay>
            </Modal>
            <SkillCard
                imageSrc="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                altText="CI/CD Tools"
                title="CI/CD & DevOps"
                subtitle="Automation Tools"
                hoverColor="gray.600"
                onClick={onOpen}
                isExternal={true}
            />

        </div>
    )
}