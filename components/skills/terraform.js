import { useDisclosure } from "@chakra-ui/react"
import SkillCard from "../ui/SkillCard"
import SkillModal from "../ui/SkillModal"

export default function ExpTerraform() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const sections = [
        {
            title: "Cloud Provisioning",
            items: [
                "AWS landing zones and account vending",
                "Azure and Google Cloud multi-environment patterns",
                "VMware & Proxmox private cloud orchestration",
            ],
        },
        {
            title: "Modules & Reuse",
            items: [
                "Opinionated modules with semantic versioning",
                "Terragrunt and OpenTofu pipelines",
                "Registry publishing and documentation",
            ],
        },
        {
            title: "Delivery & Governance",
            items: [
                "Terraform Cloud/Enterprise workspaces",
                "Policy as code with Sentinel and OPA",
                "Automated drift detection and remediation",
            ],
        },
        {
            title: "Platform Integrations",
            items: [
                "Secrets management with Vault and SSM",
                "CI/CD integration (GitHub Actions, Azure DevOps)",
                "State backends with encryption and locking",
            ],
        },
    ]

    return (
        <div id="terraform">
            <SkillModal
                isOpen={isOpen}
                onClose={onClose}
                title="Terraform & Infrastructure as Code"
                subtitle="Consistent environments with policy-backed automation"
                summary="Scale infrastructure across clouds with reusable Terraform modules, policy enforcement, and delivery pipelines engineers trust."
                tags={["Multi-cloud IaC", "Policy as code", "Reusable modules"]}
                sections={sections}
            />
            <SkillCard
                imageSrc="terraform.png"
                altText="Terraform"
                title="Terraform"
                subtitle="Infrastructure as Code"
                hoverColor="purple.400"
                onClick={onOpen}
            />
        </div>
    )
}
