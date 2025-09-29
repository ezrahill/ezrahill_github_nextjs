import { Code, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Heading, Link, ListItem, OrderedList, Text, UnorderedList, useDisclosure } from "@chakra-ui/react"
import SkillCard from "../ui/SkillCard"
import React from "react"
import { CloseIcon } from "@chakra-ui/icons"
import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import remarkGfm from "remark-gfm"
import rehypeKatex from "rehype-katex"
import rehypeRaw from "rehype-raw"

export default function ExpDatabases() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)
    return (
        <div id="databases">
            <Modal isOpen={isOpen} finalFocusRef={finalRef} onClose={onClose} id='databases' size={'2xl'}>
                <ModalOverlay id="databases"><ModalContent>
                    <ModalHeader id="databases">{`Databases & Data Platforms`}</ModalHeader>
                    <ModalBody>
                        <ReactMarkdown components={{ "h1": ({ node, ...props }) => <Heading size='2xl' {...props} />, "h2": ({ node, ...props }) => <Heading size='xl' {...props} />, "h3": ({ node, ...props }) => <Heading size='lg' {...props} />, "ul": UnorderedList, "ol": OrderedList, "li": ListItem, "p": Text, "a": Link, "code": ({ node, inline, className, children, ...props }) => { const match = (className || '').match(/language-(?<lang>.*)/); return !inline ? (<Prism children={String(children).replace(/ $/, '')} language={match ? match[1] : ''}             {...props} />) : (<Code {...props}>             {children}           </Code>); } }}
                            remarkPlugins={[remarkMath, remarkGfm]}
                            rehypePlugins={[rehypeKatex, rehypeRaw]}>{`
**Experience**
- Relational Databases
    - PostgreSQL & Aurora PostgreSQL
    - SQL Server & Azure SQL
    - MySQL/MariaDB
- NoSQL & Caching
    - MongoDB
    - Redis & ElastiCache
    - DynamoDB
- Data Platforms
    - Elasticsearch
    - Apache Kafka
    - Database migration & replication
    - Performance tuning & optimization
`}</ReactMarkdown>
                    </ModalBody>
                    <ModalFooter><CloseIcon onClick={onClose} sx={{ cursor: 'pointer' }} /></ModalFooter>
                </ModalContent></ModalOverlay>
            </Modal>
            <SkillCard
                imageSrc="https://wiki.postgresql.org/images/a/a4/PostgreSQL_logo.3colors.svg"
                altText="Databases"
                title="Databases"
                subtitle="Data Platforms"
                hoverColor="blue.600"
                onClick={onOpen}
                isExternal={true}
            />

        </div>
    )
}