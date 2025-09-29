import { useDisclosure } from "@chakra-ui/react"
import SkillCard from "../ui/SkillCard"
import SkillModal from "../ui/SkillModal"

export default function ExpDocker() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const sections = [
        {
            title: "Build & Packaging",
            items: [
                "Multi-stage Dockerfile optimisation",
                "Image layering strategies for small footprints",
                "Developer parity with Docker Compose",
            ],
        },
        {
            title: "Registry & Supply Chain",
            items: [
                "ECR, ACR, GCR, and Harbor registries",
                "Image signing and SBOM publishing",
                "Automated vulnerability scanning (Trivy, Snyk)",
            ],
        },
        {
            title: "Runtime Operations",
            items: [
                "Resource tuning for density and QoS",
                "Runtime security hardening",
                "Docker Swarm and Kubernetes bridging",
            ],
        },
        {
            title: "Developer Experience",
            items: [
                "Inner-loop setups with dev containers",
                "GitHub Actions and CI pipelines for images",
                "Golden base images and policy enforcement",
            ],
        },
    ]

    return (
        <div id="docker">
            <SkillModal
                isOpen={isOpen}
                onClose={onClose}
                title="Docker & Containerisation"
                subtitle="Secure image pipelines and production-grade runtimes"
                summary="Create consistent container workflows from laptop to production with hardened images, automated scanning, and developer-friendly tooling."
                tags={["Shift-left security", "Golden base images", "Inner-loop velocity"]}
                sections={sections}
            />
            <SkillCard
                imageSrc="https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png"
                altText="Docker"
                title="Docker"
                subtitle="Containerization"
                hoverColor="cyan.400"
                onClick={onOpen}
                isExternal={true}
            />
        </div>
    )
}
