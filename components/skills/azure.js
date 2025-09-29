import { useDisclosure } from "@chakra-ui/react"
import SkillCard from "../ui/SkillCard"
import SkillModal from "../ui/SkillModal"

export default function ExpAzure() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const sections = [
        {
            title: "Compute & Containers",
            items: [
                "Azure Virtual Machines & scale sets",
                "Azure Functions for event-first APIs",
                "AKS clusters with GitOps pipelines",
            ],
        },
        {
            title: "Storage & Data",
            items: [
                "Blob Storage lifecycle and Data Lake integration",
                "Azure Files with hybrid sync (AD DS)",
                "Table & Queue storage patterns",
            ],
        },
        {
            title: "Security & Identity",
            items: [
                "Azure AD tenant governance (B2B/B2C)",
                "Key Vault rotation and managed identities",
                "Policy-driven RBAC and blueprint rollout",
            ],
        },
        {
            title: "Networking & Delivery",
            items: [
                "Hub-and-spoke VNets with ExpressRoute/VPN",
                "Front Door & Application Gateway optimisation",
                "Private endpoints and service endpoints for PaaS",
            ],
        },
        {
            title: "Operations & Integration",
            items: [
                "Logic Apps & Service Bus orchestration",
                "Event Grid for reactive workflows",
                "Azure Monitor, Log Analytics, and Automation",
            ],
        },
    ]

    return (
        <div id="azure">
            <SkillModal
                isOpen={isOpen}
                onClose={onClose}
                title="Microsoft Azure"
                subtitle="Hybrid-friendly Azure landing zones and automation"
                summary="Streamline Azure adoption with enterprise governance, hybrid connectivity, and a developer-friendly platform spanning AKS, Functions, and automation."
                tags={["Hybrid connectivity", "Enterprise governance", "Serverless & AKS"]}
                sections={sections}
            />
            <SkillCard
                imageSrc="azure.png"
                altText="Microsoft Azure"
                title="Microsoft Azure"
                subtitle="Cloud Computing Platform"
                hoverColor="blue.400"
                onClick={onOpen}
            />
        </div>
    )
}
