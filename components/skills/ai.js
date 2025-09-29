import { useDisclosure } from "@chakra-ui/react"
import SkillCard from "../ui/SkillCard"
import SkillModal from "../ui/SkillModal"

export default function ExpAI() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const sections = [
        {
            title: "AI Tooling Enablement",
            items: [
                "GitHub Copilot rollouts with guardrails",
                "Claude Code pairing for rapid prototyping",
                "Custom GPT agents for platform runbooks",
                "Prompt libraries tailored to engineering teams",
            ],
        },
        {
            title: "Automation & Ops",
            items: [
                "LLM-assisted Terraform and policy generation",
                "ChatOps workflows for incident response",
                "Observability summarisation and RCA drafting",
                "Automated troubleshooting and remediation scripts",
            ],
        },
        {
            title: "Quality & Governance",
            items: [
                "Prompt testing and review checklists",
                "Secrets hygiene and data residency controls",
                "Usage analytics and ROI reporting",
            ],
        },
        {
            title: "Knowledge & Documentation",
            items: [
                "Architecture documentation co-authored with LLMs",
                "Automated release notes and changelog drafting",
                "Curated knowledge bases and onboarding guides",
            ],
        },
    ]

    return (
        <div id="ai">
            <SkillModal
                isOpen={isOpen}
                onClose={onClose}
                title="AI-Powered Development"
                subtitle="Pairing engineers with LLM copilots for velocity and quality"
                summary="Embed AI assistants across development, operations, and documentation to automate repetitive work while keeping humans in control."
                tags={["Copilot enablement", "Automation at scale", "Prompt engineering"]}
                sections={sections}
            />
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
