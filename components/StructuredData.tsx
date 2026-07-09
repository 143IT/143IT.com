import type { Metadata } from "next";

interface StructuredDataProps {
  type?: "Organization" | "WebSite" | "Service" | "BlogPosting" | "SoftwareApplication";
  data?: Record<string, any>;
}

export default function StructuredData({ type = "Organization", data }: StructuredDataProps) {
  const baseUrl = "https://143it.com";
  
  const baseOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "143IT",
    url: baseUrl,
    logo: `${baseUrl}/logo.svg`,
    description: "Next-Gen IT Management with Cloud, Automation, and AI at the Core.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "support@143it.com",
      areaServed: ["US", "CA"],
    },
    sameAs: [
      "https://github.com/iloveyouit",
      "https://www.linkedin.com/in/rob-loftin-143it",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "143IT",
    url: baseUrl,
    description: "Automate & Dominate with AI - Next-Gen IT Management Services",
    publisher: {
      "@type": "Organization",
      name: "143IT",
    },
  };

  let structuredData;

  switch (type) {
    case "Organization":
      structuredData = { ...baseOrganization, ...data };
      break;
    case "WebSite":
      structuredData = { ...website, ...data };
      break;
    case "BlogPosting":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        publisher: {
          "@type": "Organization",
          name: "143IT",
          logo: {
            "@type": "ImageObject",
            url: `${baseUrl}/logo.svg`,
          },
        },
        ...data,
      };
      break;
    case "Service":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        provider: {
          "@type": "Organization",
          name: "143IT",
          url: baseUrl,
        },
        serviceType: "IT Management Services",
        ...data,
      };
      break;
    case "SoftwareApplication":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        publisher: {
          "@type": "Organization",
          name: "143IT",
          url: baseUrl,
        },
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        ...data,
      };
      break;
    default:
      structuredData = data || baseOrganization;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData, null, 2) }}
    />
  );
}
