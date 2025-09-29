// Projects data - easy to update and maintain
export const projectsData = [
    {
        name: "Taxora",
        description: "Financial management platform with tax optimisation features built with FastAPI and React. Designed to help individuals and small businesses optimise their tax strategies through intelligent automation.",
        tech: ["FastAPI", "React", "React-Native", "Next.js", "PostgreSQL", "Docker"],
        githubLink: "https://github.com/Taxora",
        type: "SaaS",
        status: "In Development"
    },
    {
        name: "ClubEventCal",
        description: "Sync Strava club events to your calendar. Built using AWS SAM for serverless architecture, ensuring scalability and cost-efficiency.",
        tech: ["AWS SAM", "Serverless", "Strava API", "Google Calendar API", "Python", "React"],
        link: "https://www.clubeventcal.com/",
        githubLink: "https://github.com/clubeventcal",
        type: "SaaS",
        status: "In Development"
    },
    {
        name: "Internal Developer Platform",
        description: "Enterprise platform that saved £1.2M annually by replacing third-party backup solutions. Azure-hosted APIs with secure FastAPI backend for database operations automation.",
        tech: ["Azure Functions", "FastAPI", "Python", "Terraform", "CI/CD"],
        link: null,
        type: "Enterprise",
        status: "Active"
    },
    {
        name: "Multi-Region Backup Solution",
        description: "Global AWS backup automation using native tools. Streamlined disaster recovery processes across multiple regions with automated failover capabilities.",
        tech: ["AWS S3", "Lambda", "CloudWatch", "CloudFormation", "Python"],
        link: null,
        type: "Enterprise",
        status: "Completed"
    },
    {
        name: "Homelab Infrastructure",
        description: "Personal cloud infrastructure with Kubernetes, GitOps workflows, and self-hosted services. Experimenting with latest DevOps tools and practices.",
        tech: ["Kubernetes", "ArgoCD", "Traefik", "Prometheus", "Grafana", "Docker", "Proxmox"],
        link: null,
        githubLink: "https://github.com/ezrahill/hl-iac-mono-repo",
        type: "Personal",
        status: "Active"
    },
    {
        name: "Platform Engineering Templates",
        description: "Collection of reusable Terraform modules and GitHub Actions workflows designed for platform teams. Accelerates infrastructure deployment and standardizes practices.",
        tech: ["Terraform", "GitHub Actions", "AWS", "Azure", "Kubernetes"],
        link: null,
        githubLink: "https://github.com/ezrahill/platform-templates",
        type: "Open Source",
        status: "Planned"
    },
    {
        name: "DevOps Automation Toolkit",
        description: "Comprehensive collection of automation scripts and tools for DevOps workflows. Includes deployment automation, monitoring setup, and infrastructure management utilities.",
        tech: ["Python", "Ansible", "Bash", "Docker", "Jenkins"],
        link: null,
        githubLink: "https://github.com/ezrahill/devops-toolkit",
        type: "Open Source",
        status: "Planned"
    },
    {
        name: "One-Click PKI Infrastructure",
        description: "Automated PKI infrastructure with CloudHSM integration that streamlined Windows certificate management across enterprise environments.",
        tech: ["AWS CloudHSM", "PowerShell", "CloudFormation", "Jenkins"],
        link: null,
        type: "Enterprise",
        status: "Completed"
    },
    {
        name: "Strava Club Events -> Google Calendar Sync",
        description: "Sync Strava club events to your Google Calendar.",
        tech: ["Python", "Strava API", "Google Calendar API"],
        link: null,
        githubLink: "https://github.com/ezrahill/strava-google-calendar-sync",
        type: "Open Source",
        status: "Active"
    },
]

// You can easily add more projects here, for example:
// {
//     name: "New Project",
//     description: "Description of your new project",
//     tech: ["Tech1", "Tech2", "Tech3"],
//     link: "https://project-url.com", // or null if no live link
//     githubLink: "https://github.com/username/repo", // or null if no GitHub
//     type: "SaaS", // SaaS, Enterprise, Personal, Open Source, Platform
//     status: "Active" // Active, In Development, Completed, Archived
// }