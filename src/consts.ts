// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Lucas Castro";
export const SITE_DESCRIPTION =
  "Hello, there! I'm Lucas. Welcome to my personal website. You can learn more about me, my work, and the things I care about here. I talk about programming, careers, and the tech industry.";

export const PAGES = [
  { to: "/", label: "about" },
  { to: "/work", label: "work" },
  { to: "/writing", label: "writing" },
  { to: "/talks", label: "talks" },
  // { to: "/bookmarks", label: "bookmarks" },
  { to: "/misc", label: "misc" },
];

export const WORK = [
  {
    position: "Systems Engineer",
    company: "Cloudflare",
    companyUrl: "https://www.cloudflare.com",
    range: "jul 2025-present",
  },
  {
    position: "Founding Engineer",
    company: "Trinsic",
    companyUrl: "https://trinsic.id",
    range: "feb 2023-jul 2025",
  },
  {
    position: "Engineering Intern",
    company: "Pluralsight",
    companyUrl: "https://www.pluralsight.com",
    range: "may 2022-aug 2022",
  },
  {
    position: "Programmer",
    company: "Utah County Gov.",
    companyUrl: "https://utahcounty.gov",
    range: "jun 2020-aug 2021",
  },
];

export const TALKS = [
  {
    date: "Mar. 5, 2025",
    title: "Auth 101",
    videoUrl: "https://www.youtube.com/watch?v=Z8iFDkBRfWI",
    notesUrl: "/writing/auth-101",
  },
  {
    date: "Sep. 13, 2024",
    title: "Getting Started with Passkeys and WebAuthn",
    videoUrl: "https://www.youtube.com/watch?v=sSxibbZ3GL4",
    slidesUrl: "https://slides.com/lucasamonrc/deck-1683a2/scroll",
  },
  {
    date: "Sep. 15, 2023",
    title: "Using LLMs to Learn a New Programming Language",
    videoUrl: "https://www.youtube.com/watch?v=BKbXrQ0z-FY",
    notesUrl: "/misc/learn-with-llms",
  },
];
