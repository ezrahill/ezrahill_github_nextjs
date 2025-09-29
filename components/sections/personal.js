import { Center, SimpleGrid } from "@chakra-ui/react"
import PersonalCard from "../ui/PersonalCard"

export default function Personal() {
    return (
        <Center padding={2}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} maxWidth={'1200px'} width="100%" px={8}>
                <PersonalCard
                    emoji="🚴"
                    title="Cycling Enthusiast"
                    description="Passionate road cyclist, regularly participating in local events and long-distance rides. Track my rides and training on Strava."
                    hoverColor="orange.400"
                    link="https://www.strava.com/athletes/ezrahill"
                    linkText="Follow on Strava"
                    badge="8000+ km in 2024"
                    badgeColor="orange"
                />

                <PersonalCard
                    emoji="🏠"
                    title="Homelab Builder"
                    description="Running a personal datacenter with Kubernetes, self-hosted services, and experimenting with latest DevOps tools and practices."
                    hoverColor="green.400"
                    badge="Active Project"
                    badgeColor="green"
                />

                <PersonalCard
                    emoji="🎓"
                    title="Continuous Learning"
                    description="Always exploring new technologies, obtaining certifications, and staying current with industry best practices."
                    hoverColor="blue.400"
                    badge="Multi-Cloud Certified"
                    badgeColor="blue"
                />

                {/* <PersonalCard
                    emoji="📝"
                    title="Technical Writing"
                    description="Sharing knowledge about DevOps, platform engineering, and cloud architecture through blog posts and documentation."
                    hoverColor="blue.400"
                    link="https://www.ezrahill.co.uk"
                    linkText="Read on my blog"
                />

                <PersonalCard
                    emoji="💼"
                    title="Entrepreneurship"
                    description="Building SaaS products for financial management and exploring innovative solutions in the fintech space."
                    hoverColor="purple.400"
                    badge="Taxora & ClubEventCal"
                    badgeColor="purple"
                />



                <PersonalCard
                    emoji="👥"
                    title="Team Leadership"
                    description="Leading cross-functional teams with Agile/Scrum methodologies, mentoring engineers, and driving DevOps culture."
                    hoverColor="orange.400"
                    badge="Scrum Master"
                    badgeColor="orange"
                /> */}
            </SimpleGrid>
        </Center>
    );
}