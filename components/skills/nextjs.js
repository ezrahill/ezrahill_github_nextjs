import { useDisclosure } from "@chakra-ui/react"
import SkillCard from "../ui/SkillCard"
import SkillModal from "../ui/SkillModal"

export default function ExpNextJS() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const sections = [
        {
            title: "Frontend Architecture",
            items: [
                "Next.js 14 App Router and React Server Components",
                "Component libraries with Chakra UI and Tailwind",
                "TypeScript-first design systems",
            ],
        },
        {
            title: "Performance & UX",
            items: [
                "Image optimisation and streaming SSR",
                "Accessibility-first layouts and theming",
                "Edge rendering and caching strategies",
            ],
        },
        {
            title: "Data & State",
            items: [
                "React Query/TanStack Query for data fetching",
                "GraphQL and REST integration",
                "Server Actions and incremental static regeneration",
            ],
        },
        {
            title: "Ops & Tooling",
            items: [
                "CI/CD with linting, type-checking, and preview deploys",
                "Vercel, Azure Static Web Apps, and Netlify deployments",
                "Performance budgets and automated lighthouse checks",
            ],
        },
    ]

    return (
        <div id="nextjs">
            <SkillModal
                isOpen={isOpen}
                onClose={onClose}
                title="React & Next.js"
                subtitle="Modern frontend engineering that pairs performance with polish"
                summary="Deliver approachable, accessible web experiences powered by Next.js, React 18, and a strong design system mindset."
                tags={["App Router", "Design systems", "Edge-ready"]}
                sections={sections}
            />
            <SkillCard
                imageSrc="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png"
                altText="Next.js"
                title="Next.js"
                subtitle="React Framework"
                hoverColor="gray.800"
                onClick={onOpen}
                isExternal={true}
            />
        </div>
    )
}
