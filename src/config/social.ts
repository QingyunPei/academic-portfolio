import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [
    {
        name: "Github",
        href: "https://github.com/QingyunPei",
        linkTitle: `Follow Qingyun Pei on Github`,
        isActive: true,
    },
    {
        name: "Mail",
        href: "mailto:qingyun.pei@kean.edu",
        linkTitle: `Send an email to Qingyun Pei`,
        isActive: true,
    },
    {
        name: "Google Scholar",
        href: "https://scholar.google.com/citations?user=xGE-YrEAAAAJ",
        linkTitle: `Qingyun Pei on Google Scholar`,
        isActive: true,
    },
    {
        name: "ORCID",
        href: "https://orcid.org/0009-0008-5083-5598",
        linkTitle: `Qingyun Pei on ORCID`,
        isActive: true,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/qingyun-pei/",
        linkTitle: `Qingyun Pei on LinkedIn`,
        isActive: true, // Assuming Claude doesn't have a LinkedIn profile
    },
];

export const SOCIAL_ICONS: Record<string, string> = {
    Github: "Github",
    Mail: "Mail",
    Linkedin: "LinkedIn",
    "Google Scholar": "GoogleScholar",
    ORCID: "ORCID",
    RSS: "RSS",
};