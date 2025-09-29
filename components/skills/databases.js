import { useDisclosure } from "@chakra-ui/react"
import SkillCard from "../ui/SkillCard"
import SkillModal from "../ui/SkillModal"

export default function ExpDatabases() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const sections = [
        {
            title: "Relational Platforms",
            items: [
                "PostgreSQL & Aurora performance engineering",
                "SQL Server & Azure SQL managed estates",
                "MySQL/MariaDB for legacy and SaaS workloads",
            ],
        },
        {
            title: "NoSQL & Caching",
            items: [
                "MongoDB clusters with backup automation",
                "Redis & ElastiCache for low-latency services",
                "DynamoDB single-table designs",
            ],
        },
        {
            title: "Streaming & Search",
            items: [
                "Kafka pipelines for event-driven data",
                "Elasticsearch for observability and search",
                "Log enrichment and retention strategy",
            ],
        },
        {
            title: "Reliability & Automation",
            items: [
                "Near-zero downtime migrations and replication",
                "Automated backups, PITR, and chaos testing",
                "Performance tuning dashboards and alerts",
            ],
        },
    ]

    return (
        <div id="databases">
            <SkillModal
                isOpen={isOpen}
                onClose={onClose}
                title="Databases & Data Platforms"
                subtitle="Reliable data foundations for analytics and applications"
                summary="Unify relational, NoSQL, and streaming platforms with automation that keeps performance predictable and recovery objectives intact."
                tags={["HA & DR", "Performance tuning", "Streaming data"]}
                sections={sections}
            />
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
