import { Code, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Heading, Link, ListItem, OrderedList, Text, UnorderedList, useDisclosure } from "@chakra-ui/react"
import SkillCard from "../ui/SkillCard"
import React from "react"
import { CloseIcon } from "@chakra-ui/icons"
import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import remarkGfm from "remark-gfm"
import rehypeKatex from "rehype-katex"
import rehypeRaw from "rehype-raw"

export default function ExpNextJS() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)
    return (
        <div id="nextjs">
            <Modal isOpen={isOpen} finalFocusRef={finalRef} onClose={onClose} id='nextjs' size={'2xl'}>
                <ModalOverlay id="nextjs"><ModalContent>
                    <ModalHeader id="nextjs">{`React & Frontend Development`}</ModalHeader>
                    <ModalBody>
                        <ReactMarkdown components={{ "h1": ({ node, ...props }) => <Heading size='2xl' {...props} />, "h2": ({ node, ...props }) => <Heading size='xl' {...props} />, "h3": ({ node, ...props }) => <Heading size='lg' {...props} />, "ul": UnorderedList, "ol": OrderedList, "li": ListItem, "p": Text, "a": Link, "code": ({ node, inline, className, children, ...props }) => { const match = (className || '').match(/language-(?<lang>.*)/); return !inline ? (<Prism children={String(children).replace(/ $/, '')} language={match ? match[1] : ''}             {...props} />) : (<Code {...props}>             {children}           </Code>); } }}
                            remarkPlugins={[remarkMath, remarkGfm]}
                            rehypePlugins={[rehypeKatex, rehypeRaw]}>{`
**Experience**
- Frontend Frameworks
    - Next.js 14+ App Router
    - React 18+ with Hooks
    - TypeScript
- UI & Styling
    - Tailwind CSS
    - Chakra UI
    - Responsive design
    - Component libraries
- State & Data
    - React Query/TanStack Query
    - Redux Toolkit
    - REST & GraphQL APIs
    - Server-side rendering (SSR/SSG)
`}</ReactMarkdown>
                    </ModalBody>
                    <ModalFooter><CloseIcon onClick={onClose} sx={{ cursor: 'pointer' }} /></ModalFooter>
                </ModalContent></ModalOverlay>
            </Modal>
            <SkillCard
                imageSrc="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png"
                altText="Next.js"
                title="Next.js"
                subtitle="React Framework"
                hoverColor="gray.800"
                onClick={onOpen}
                isExternal={true}
            />

        </div>
    )
}