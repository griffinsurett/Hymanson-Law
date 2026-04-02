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
};

export const ctaData = {
  text: "Contact Hymanson Law",
  link: "/contact-us",
};
