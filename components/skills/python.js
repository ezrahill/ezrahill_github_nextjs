import { useDisclosure } from "@chakra-ui/react"
import SkillCard from "../ui/SkillCard"
import SkillModal from "../ui/SkillModal"

export default function ExpPython() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const sections = [
        {
            title: "APIs & Integrations",
            items: [
                "REST and GraphQL clients and services",
                "External API orchestration with retries and caching",
                "Authentication flows (OAuth2, JWT, signed requests)",
            ],
        },
        {
            title: "Automation & Scripting",
            items: [
                "Infrastructure housekeeping and reporting",
                "Config generation for network and cloud platforms",
                "Process automation with Click and Typer CLIs",
            ],
        },
        {
            title: "Infrastructure as Code",
            items: [
                "AWS boto3 tooling and custom modules",
                "Lambda functions for event-driven automation",
                "Cisco UCS Director and hybrid orchestration",
            ],
        },
        {
            title: "Data & Analytics",
            items: [
                "Pandas data pipelines and reporting",
                "Log enrichment and metrics extraction",
                "Jupyter notebooks for exploratory analysis",
            ],
        },
    ]

    return (
        <div id="python">
            <SkillModal
                isOpen={isOpen}
                onClose={onClose}
                title="Python Engineering"
                subtitle="Automation, APIs, and data workflows"
                summary="Use Python to connect services, automate infrastructure, and surface insights that keep platforms humming."
                tags={["Automation", "APIs", "Data tooling"]}
                sections={sections}
            />
            <SkillCard
                imageSrc="python.png"
                altText="Python"
                title="Python"
                subtitle="Programming Language"
                hoverColor="yellow.400"
                onClick={onOpen}
            />
        </div>
    )
}
