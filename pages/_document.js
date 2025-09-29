// pages/_document.js

import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from "/utils/theme"

export default class Document extends NextDocument {
    render() {
        return (
            <Html lang='en-GB'>
                <Head>
                    <meta name="description" content="Principal DevOps Engineer with 25+ years in tech. Specialising in AWS, Azure, Kubernetes, and saving companies millions through smart platform architecture and cost optimisation. UK-based cycling enthusiast." />
                    <meta name="keywords" content="Principal DevOps Engineer, DevOps, Cloud Infrastructure, Platform Engineering, AWS, Azure, Kubernetes, Docker, Terraform, Ansible, CI/CD, FastAPI, Python, AI Tools, GitHub Copilot, Cost Optimisation, UK, Sheffield" />
                    <meta name="author" content="Ezra Hill" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="robots" content="index, follow" />
                    <meta name="theme-color" content="#5d7000" />

                    {/* JSON-LD Structured Data */}
                    <script type="application/ld+json">
                        {JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": "Ezra Hill",
                            "jobTitle": "Principal DevOps Engineer",
                            "description": "DevOps leader with 25+ years in tech specialising in cloud infrastructure and platform engineering",
                            "url": "https://ezrahill.github.io/",
                            "sameAs": [
                                "https://github.com/ezrahill",
                                "https://linkedin.com/in/ezrahill",
                                "https://twitter.com/ezrahill",
                                "https://www.strava.com/athletes/ezrahill",
                                "https://www.ezrahill.co.uk"
                            ],
                            "knowsAbout": [
                                "DevOps",
                                "Cloud Infrastructure",
                                "AWS",
                                "Azure",
                                "Kubernetes",
                                "Docker",
                                "Terraform",
                                "Platform Engineering",
                                "Cost Optimisation"
                            ],
                            "worksFor": {
                                "@type": "Organization",
                                "name": "Various Enterprise Companies"
                            }
                        })}
                    </script>

                    {/* Open Graph / Facebook */}
                    <meta property="og:type" content="profile" />
                    <meta property="og:url" content="https://ezrahill.github.io/" />
                    <meta property="og:title" content="Ezra Hill - Principal DevOps Engineer | Cloud Infrastructure" />
                    <meta property="og:description" content="Principal DevOps Engineer with 25+ years experience. Saving companies over £1.2M through smart platform architecture, automation, and cost optimisation." />
                    <meta property="og:image" content="https://ezrahill.github.io/image/ezrahill.jpeg" />
                    <meta property="og:image:alt" content="Ezra Hill - Principal DevOps Engineer" />
                    <meta property="og:locale" content="en_GB" />

                    {/* Twitter */}
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:site" content="@ezrahill" />
                    <meta property="twitter:creator" content="@ezrahill" />
                    <meta property="twitter:url" content="https://ezrahill.github.io/" />
                    <meta property="twitter:title" content="Ezra Hill - Principal DevOps Engineer | Cloud Infrastructure" />
                    <meta property="twitter:description" content="Cycling Obsessed 🚴🏾 | Infrastructure • Cloud • DevOps • Platform Engineer 👨🏾‍💻 Building systems & riding bikes since 1994" />
                    <meta property="twitter:image" content="https://ezrahill.github.io/image/ezrahill.jpeg" />

                    <link rel="canonical" href="https://ezrahill.github.io/" />
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="apple-touch-icon" href="/image/ezrahill.jpeg" />
                </Head>
                <body>
                    {/* 👇 Here's the script */}
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
