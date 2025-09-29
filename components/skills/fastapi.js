import { Code, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Heading, Link, ListItem, OrderedList, Text, UnorderedList, useDisclosure } from "@chakra-ui/react"
import SkillCard from "../ui/SkillCard"
import React from "react"
import { CloseIcon } from "@chakra-ui/icons"
import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import remarkGfm from "remark-gfm"
import rehypeKatex from "rehype-katex"
import rehypeRaw from "rehype-raw"

export default function ExpFastAPI() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)
    return (
        <div id="fastapi">
            <Modal isOpen={isOpen} finalFocusRef={finalRef} onClose={onClose} id='fastapi' size={'2xl'}>
                <ModalOverlay id="fastapi"><ModalContent>
                    <ModalHeader id="fastapi">{`FastAPI & Modern Python`}</ModalHeader>
                    <ModalBody>
                        <ReactMarkdown components={{ "h1": ({ node, ...props }) => <Heading size='2xl' {...props} />, "h2": ({ node, ...props }) => <Heading size='xl' {...props} />, "h3": ({ node, ...props }) => <Heading size='lg' {...props} />, "ul": UnorderedList, "ol": OrderedList, "li": ListItem, "p": Text, "a": Link, "code": ({ node, inline, className, children, ...props }) => { const match = (className || '').match(/language-(?<lang>.*)/); return !inline ? (<Prism children={String(children).replace(/ $/, '')} language={match ? match[1] : ''}             {...props} />) : (<Code {...props}>             {children}           </Code>); } }}
                            remarkPlugins={[remarkMath, remarkGfm]}
                            rehypePlugins={[rehypeKatex, rehypeRaw]}>{`
**Experience**
- API Development
    - RESTful API design
    - Async/await patterns
    - Pydantic data validation
    - OpenAPI/Swagger documentation
- Integration & Testing
    - SQLAlchemy ORM
    - pytest & test automation
    - CI/CD with GitHub Actions
- Production Deployment
    - Azure Functions integration
    - Containerized deployments
    - Performance optimization with uvicorn
`}</ReactMarkdown>
                    </ModalBody>
                    <ModalFooter><CloseIcon onClick={onClose} sx={{ cursor: 'pointer' }} /></ModalFooter>
                </ModalContent></ModalOverlay>
            </Modal>
            <SkillCard
                imageSrc="https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png"
                altText="FastAPI"
                title="FastAPI"
                subtitle="Python Web Framework"
                hoverColor="teal.400"
                onClick={onOpen}
                isExternal={true}
            />

        </div>
    )
}