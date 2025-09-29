// Certification data - easy to update and maintain
export const certificationsData = [
    // AWS Certifications
    {
        imageSrc: "aws_ccp.png",
        title: "AWS Certified",
        subtitle: "Cloud Practitioner",
        status: "Expired"
    },
    {
        imageSrc: "aws_csaa.png",
        title: "AWS Certified",
        subtitle: "Solutions Architect",
        status: "Renewing"
    },
    {
        imageSrc: "aws_cda.png",
        title: "AWS Certified",
        subtitle: "Developer",
        status: "Expired"
    },
    // VMware Certifications
    {
        imageSrc: "vcix.png",
        title: "VMware Certified Implementation Expert",
        subtitle: "Data Center Virtualization 6",
        status: null
    },
    {
        imageSrc: "vmware_vmc.png",
        title: "VMware Cloud on AWS",
        subtitle: "Trained Professional",
        status: null
    },
    {
        imageSrc: "vcp_dcv.png",
        title: "VMware Certified Professional",
        subtitle: "Data Center Virtualization 2019",
        status: null
    },
    {
        imageSrc: "vcp_nv.png",
        title: "VMware Certified Professional",
        subtitle: "Network Virtualization 6",
        status: null
    },
    // Linux Certifications
    {
        imageSrc: "lpic1.png",
        title: "CompTIA Linux+",
        subtitle: "LPIC-1 Certified",
        status: null
    },
    // New/Planned Certifications - add or remove as needed
    {
        imageSrc: "microsoft-certified-fundamentals-badge.svg",
        title: "Azure Fundamentals",
        subtitle: "AZ-900",
        status: "Planned"
    },
    {
        imageSrc: "terraform_cert.png",
        title: "HashiCorp Certified",
        subtitle: "Terraform Associate",
        status: "Planned"
    },
    {
        imageSrc: "scrum.png",
        title: "Professional",
        subtitle: "Scrum Master",
        status: "Planned"
    },
    {
        imageSrc: "cka.png",
        title: "Certified Kubernetes",
        subtitle: "Administrator (CKA)",
        status: "Planned"
    }
]

// You can easily add more certifications here, for example:
// {
//     imageSrc: "kubernetes.png",
//     title: "Certified Kubernetes",
//     subtitle: "Administrator (CKA)",
//     status: "Planned"
//     isExternal: false // Optional, defaults to false. Set to true if imageSrc is an external URL.
// }