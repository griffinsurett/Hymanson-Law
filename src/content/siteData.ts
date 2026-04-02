// src/siteData.ts - Compatible with both Astro and React
import { SITE_DOMAIN, SITE_URL } from "./siteDomain.js";

export const siteData = {
  title: "Hymanson Law",
  legalName: "Hymanson Law",
  description: "Experienced Las Vegas trial lawyers focused on trying cases and getting results.",
  domain: SITE_DOMAIN,
  url: SITE_URL,
  location: "Las Vegas, Nevada, USA",
  address: "8816 Spanish Ridge Avenue, Las Vegas, NV 89148",
  footer: {
    description:
      "A boutique firm committed to the highest standards of legal advocacy and strategic counsel since 1991.",
    connectLinks: [
      {
        label: "Areas of Practice",
        href: "/areas-of-practice",
      },
      {
        label: "Where We Serve",
        href: "/where-we-serve",
      },
      {
        label: "Frequently Asked Questions",
        href: "/faq",
      },
      {
        label: "Contact Us",
        href: "/contact-us",
      },
    ],
  },
};

export const ctaData = {
  text: "Contact Hymanson Law",
  link: "/contact-us",
};
