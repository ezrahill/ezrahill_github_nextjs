import { useDisclosure } from "@chakra-ui/react"
import SkillCard from "../ui/SkillCard"
import SkillModal from "../ui/SkillModal"

export default function ExpVmware() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const sections = [
        {
            title: "Data Center Virtualisation",
            items: [
                "vSphere architecture from SMB to multi-site enterprise",
                "vCenter, ESXi, and lifecycle management",
                "Storage integration with vSAN and third-party arrays",
            ],
        },
        {
            title: "Cloud & Automation",
            items: [
                "VMware Cloud on AWS migrations",
                "Infrastructure automation with PowerCLI and Terraform",
                "Integration with ServiceNow and self-service portals",
            ],
        },
        {
            title: "Operations & Resilience",
            items: [
                "vRealize Operations dashboards and capacity planning",
                "Log Insight pipelines for proactive monitoring",
                "Site Recovery Manager for DR orchestration",
            ],
        },
    ]

    const certifications = [
        "VCP-DCV (4/5/6/2019)",
        "VCP-NV 6",
        "VCIX-DCV 6",
        "VMware Cloud on AWS – Trained Professional",
    ]

    return (
        <div id="vmware">
            <SkillModal
                isOpen={isOpen}
                onClose={onClose}
                title="VMware Platform Engineering"
                subtitle="Enterprise data centre modernisation and hybrid cloud"
                summary="Design and run VMware estates that balance efficiency, automation, and resilience across on-prem and VMware Cloud on AWS."
                tags={["Hybrid cloud", "Automation", "Disaster recovery"]}
                sections={sections}
                certifications={certifications}
            />
            <SkillCard
                imageSrc="vmware.png"
                altText="VMware"
                title="VMware"
                subtitle="Virtualization Platform"
                hoverColor="green.400"
                onClick={onOpen}
            />
        </div>
    )
}
