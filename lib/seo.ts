// seo.ts
import { siteConfig } from "./site";

export const defaultSEO = {
  title: siteConfig.name,
  description: siteConfig.description,
  canonical: siteConfig.url,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    site_name: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/og-image.png`, // OG image
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@malmathhygiene",
    title: siteConfig.name,
    description: siteConfig.description,
    image: `${siteConfig.url}/images/og-image.png`,
  },
};

// Dynamic SEO helper function for pages
export const getPageSEO = ({
  title,
  description,
  path,
  image,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}) => ({
  title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
  description: description || siteConfig.description,
  canonical: path ? `${siteConfig.url}${path}` : siteConfig.url,
  openGraph: {
    title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
    description: description || siteConfig.description,
    url: path ? `${siteConfig.url}${path}` : siteConfig.url,
    site_name: siteConfig.name,
    images: [
      {
        url: image || `${siteConfig.url}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@malmathhygiene",
    title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
    description: description || siteConfig.description,
    image: image || `${siteConfig.url}/images/og-image.png`,
  },
});
