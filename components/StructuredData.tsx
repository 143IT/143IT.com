import type { Metadata } from "next";
import { site } from "@/lib/site";

interface StructuredDataProps {
  type?: "Organization" | "LocalBusiness" | "WebSite" | "Service" | "BlogPosting" | "SoftwareApplication" | "BreadcrumbList" | "FAQPage";
  data?: Record<string, any>;
}

export default function StructuredData({ type = "Organization", data }: StructuredDataProps) {
  const baseUrl = site.url;
  
  const baseOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "143IT",
    url: baseUrl,
    logo: site.logo,
    description: site.description,
    areaServed: site.serviceArea,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: site.email,
      areaServed: site.serviceArea,
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
    case "LocalBusiness":
      structuredData = {
        ...baseOrganization,
        "@type": "LocalBusiness",
        email: site.email,
        priceRange: "Custom managed-service and project pricing",
        areaServed: site.serviceArea.map((name) => ({ "@type": "Place", name })),
        address: {
          "@type": "PostalAddress",
          addressRegion: "TX",
          addressCountry: "US",
        },
        ...data,
      };
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
    case "BreadcrumbList":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        ...data,
      };
      break;
    case "FAQPage":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
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
