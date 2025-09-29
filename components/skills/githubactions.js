import { useDisclosure } from "@chakra-ui/react"
import SkillCard from "../ui/SkillCard"
import SkillModal from "../ui/SkillModal"

export default function ExpGitHubActions() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const sections = [
        {
            title: "CI/CD Engineering",
            items: [
                "Reusable GitHub Actions with composable workflows",
                "Matrix builds, caches, and deployment gates",
                "Migration experience from Jenkins, GitLab, and Azure DevOps",
            ],
        },
        {
            title: "Infrastructure Automation",
            items: [
                "Terraform Cloud/Enterprise pipelines",
                "Ansible automation platform integrations",
                "Packer golden images and AMI lifecycle",
            ],
        },
        {
            title: "Governance & Security",
            items: [
                "OIDC federation and secrets management",
                "Policy-as-code with branch protections",
                "Dependency scanning and SBOM publishing",
            ],
        },
        {
            title: "Observability & Feedback",
            items: [
                "Prometheus/Grafana and Datadog hooks",
                "ELK and Azure Monitor telemetry",
                "ChatOps notifications and deploy summaries",
            ],
        },
    ]

    return (
        <div id="githubactions">
            <SkillModal
                isOpen={isOpen}
                onClose={onClose}
                title="CI/CD & DevOps Tooling"
                subtitle="From GitHub Actions to multi-platform automation"
                summary="Build dependable pipelines with reusable workflows, infrastructure as code, and automated compliance guardrails."
                tags={["Reusable workflows", "Policy as code", "Observable delivery"]}
                sections={sections}
            />
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
