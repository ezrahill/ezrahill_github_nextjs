import { useDisclosure } from "@chakra-ui/react"
import SkillCard from "../ui/SkillCard"
import SkillModal from "../ui/SkillModal"

export default function ExpFastAPI() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const sections = [
        {
            title: "API Craftsmanship",
            items: [
                "Async REST APIs with FastAPI and Pydantic",
                "OpenAPI-first design and client generation",
                "Auth patterns: OAuth2, JWT, API keys",
            ],
        },
        {
            title: "Integrations & Data",
            items: [
                "SQLAlchemy ORM and alembic migrations",
                "Redis, PostgreSQL, and event-driven backends",
                "Background tasks and Celery workers",
            ],
        },
        {
            title: "Quality Engineering",
            items: [
                "pytest suites with async fixtures",
                "Contract tests and schema validation",
                "GitHub Actions pipelines with coverage gating",
            ],
        },
        {
            title: "Deployment & Ops",
            items: [
                "Containerised deployments with uvicorn and gunicorn",
                "Azure Functions & AWS Lambda adapters",
                "Observability with OpenTelemetry and Prometheus",
            ],
        },
    ]

    return (
        <div id="fastapi">
            <SkillModal
                isOpen={isOpen}
                onClose={onClose}
                title="FastAPI & Modern Python"
                subtitle="High-performance Python services with production-ready tooling"
                summary="Ship secure, well-tested Python APIs using FastAPI, async patterns, and automated CI/CD flows tailored for cloud-native deployments."
                tags={["Async Python", "Contract-first APIs", "CI/CD ready"]}
                sections={sections}
            />
            <SkillCard
                imageSrc="https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png"
                altText="FastAPI"
                title="FastAPI"
                subtitle="Python Web Framework"
                hoverColor="teal.400"
                onClick={onOpen}
                isExternal={true}
            />
        </div>
    )
}
