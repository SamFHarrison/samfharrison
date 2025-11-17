import { BIO } from "./constants";

export const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sam F-Harrison",
  givenName: "Sam",
  familyName: "Fletcher-Harrison",
  description: BIO,
  url: "https://samfharrison.com",
  sameAs: [
    "https://www.linkedin.com/in/samfletcherharrison/",
    "https://github.com/SamFHarrison",
    "https://x.com/SamFHarrison",
    "https://www.instagram.com/sam.fharrison/",
  ],
  jobTitle: "Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "NatWest Group",
  },
  skills: [
    "React",
    "Figma",
    "TypeScript",
    "SQL",
    "CSS",
    "JavaScript",
    "HTML",
    "Next.js",
    "Git",
    "Agile",
  ],
  knowsAbout: [
    "Software Development",
    "Software Design",
    "Agile Methodology",
    "UI Design",
    "UX Design",
  ],
};
