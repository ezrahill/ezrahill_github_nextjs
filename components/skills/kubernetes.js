import { Code, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Heading, Link, ListItem, OrderedList, Text, UnorderedList, useDisclosure } from "@chakra-ui/react"
import SkillCard from "../ui/SkillCard"
import React from "react"
import { CloseIcon } from "@chakra-ui/icons"
import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import remarkGfm from "remark-gfm"
import rehypeKatex from "rehype-katex"
import rehypeRaw from "rehype-raw"

export default function ExpKubernetes() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)
    return (
        <div id="kubernetes">
            <Modal isOpen={isOpen} finalFocusRef={finalRef} onClose={onClose} id='kubernetes' size={'2xl'}>
                <ModalOverlay id="kubernetes"><ModalContent>
                    <ModalHeader id="kubernetes">{`Kubernetes & Container Orchestration`}</ModalHeader>
                    <ModalBody>
                        <ReactMarkdown components={{ "h1": ({ node, ...props }) => <Heading size='2xl' {...props} />, "h2": ({ node, ...props }) => <Heading size='xl' {...props} />, "h3": ({ node, ...props }) => <Heading size='lg' {...props} />, "ul": UnorderedList, "ol": OrderedList, "li": ListItem, "p": Text, "a": Link, "code": ({ node, inline, className, children, ...props }) => { const match = (className || '').match(/language-(?<lang>.*)/); return !inline ? (<Prism children={String(children).replace(/ $/, '')} language={match ? match[1] : ''}             {...props} />) : (<Code {...props}>             {children}           </Code>); } }}
                            remarkPlugins={[remarkMath, remarkGfm]}
                            rehypePlugins={[rehypeKatex, rehypeRaw]}>{`
**Experience**
- Container Orchestration
    - Kubernetes (EKS, AKS, GKE)
    - Docker & Docker Compose
    - Helm Charts
    - Kustomize
- Service Mesh & Networking
    - Istio, Linkerd
    - Ingress Controllers (NGINX, Traefik)
    - Network Policies
- GitOps & CD
    - ArgoCD, Flux
    - Tekton, Jenkins X
- Observability
    - Prometheus & Grafana
    - ELK Stack
    - Datadog, New Relic
`}</ReactMarkdown>
                    </ModalBody>
                    <ModalFooter><CloseIcon onClick={onClose} sx={{ cursor: 'pointer' }} /></ModalFooter>
                </ModalContent></ModalOverlay>
            </Modal>
            <SkillCard
                imageSrc="https://raw.githubusercontent.com/kubernetes/kubernetes/master/logo/logo.png"
                altText="Kubernetes"
                title="Kubernetes"
                subtitle="Container Orchestration"
                hoverColor="blue.500"
                onClick={onOpen}
                isExternal={true}
            />

        </div>
    )
}