import { useDisclosure } from "@chakra-ui/react"
import SkillCard from "../ui/SkillCard"
import SkillModal from "../ui/SkillModal"

export default function ExpAws() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const sections = [
        {
            title: "Compute & Serverless",
            items: [
                "EC2 fleets with autoscaling and savings plans",
                "Lambda event-driven APIs",
                "ECS/Fargate and container governance",
                "VMware Cloud on AWS integration",
            ],
        },
        {
            title: "Storage & Data Protection",
            items: [
                "S3 lifecycle, replication, and Glacier tiering",
                "EFS and FSx (Windows, ONTAP) architectures",
                "DataSync pipelines and hybrid storage gateways",
            ],
        },
        {
            title: "Security & Identity",
            items: [
                "Landing zone guardrails with Control Tower",
                "IAM, SSO, and Secrets Manager automation",
                "CloudHSM integration for sensitive workloads",
            ],
        },
        {
            title: "Networking & Edge",
            items: [
                "Transit Gateway hub-and-spoke design",
                "API Gateway and PrivateLink services",
                "CloudFront & Route 53 performance tuning",
            ],
        },
        {
            title: "Operations & Automation",
            items: [
                "Systems Manager runbooks and patching",
                "CloudWatch observability dashboards",
                "EventBridge workflows for platform automation",
            ],
        },
    ]

    const certifications = [
        "AWS Certified Cloud Practitioner",
        "AWS Certified Solutions Architect – Associate",
        "AWS Certified Developer – Associate",
    ]

    return (
        <div id="aws">
            <SkillModal
                isOpen={isOpen}
                onClose={onClose}
                title="Amazon Web Services (AWS)"
                subtitle="Designing resilient, secure, and cost-optimised AWS platforms"
                summary="Deliver multi-account landing zones, automated governance, and observability so teams can ship faster without compromising reliability or cost."
                tags={["Landing zone automation", "Cost optimisation", "24/7 operations"]}
                sections={sections}
                certifications={certifications}
            />
            <SkillCard
                imageSrc="aws.png"
                altText="Amazon Web Services"
                title="Amazon Web Services"
                subtitle="Cloud Computing Platform"
                hoverColor="orange.400"
                onClick={onOpen}
            />
        </div>
    )
}
