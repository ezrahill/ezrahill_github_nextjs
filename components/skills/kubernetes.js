import { useDisclosure } from "@chakra-ui/react"
import SkillCard from "../ui/SkillCard"
import SkillModal from "../ui/SkillModal"

export default function ExpKubernetes() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const sections = [
        {
            title: "Platform Architecture",
            items: [
                "Managed clusters across EKS, AKS, and GKE",
                "Helm and Kustomize application packaging",
                "Multi-tenant cluster policies and quotas",
            ],
        },
        {
            title: "Networking & Service Mesh",
            items: [
                "Istio and Linkerd service mesh rollouts",
                "NGINX & Traefik ingress with WAF integration",
                "NetworkPolicies and CNI hardening",
            ],
        },
        {
            title: "Delivery & GitOps",
            items: [
                "Argo CD and Flux pipelines",
                "Tekton & Jenkins X for progressive delivery",
                "Cluster API & automation for fleet management",
            ],
        },
        {
            title: "Observability & SRE",
            items: [
                "Prometheus, Grafana, and Loki dashboards",
                "Datadog and New Relic integration",
                "SLOs, error budgets, and chaos engineering",
            ],
        },
    ]

    return (
        <div id="kubernetes">
            <SkillModal
                isOpen={isOpen}
                onClose={onClose}
                title="Kubernetes & Platform Engineering"
                subtitle="Operate clusters with guardrails, GitOps, and SRE discipline"
                summary="Design multi-cluster platforms that keep workloads secure, observable, and continuously delivered."
                tags={["Multi-cloud clusters", "GitOps delivery", "SRE guardrails"]}
                sections={sections}
            />
            <SkillCard
                imageSrc="https://raw.githubusercontent.com/kubernetes/kubernetes/master/logo/logo.png"
                altText="Kubernetes"
                title="Kubernetes"
                subtitle="Container Orchestration"
                hoverColor="blue.500"
                onClick={onOpen}
                isExternal={true}
            />
        </div>
    )
}
