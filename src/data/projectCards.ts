interface Project {
  id: number;
  imageSrc: string;
  imageAlt: string;
  title: string;
  text: string;
  linkHref: string;
  linkText: string;
  projectSkills: ProjectSkill[];
}

interface ProjectSkill {
  skillIcon: string;
  skillName: string;
}

const projectCards: Project[] = [
  {
    id: 1,
    imageSrc: "/project-management-application.png",
    imageAlt: "...",
    title: "Project Management Application",
    text: "App build with next.js that communicates with an API to create, read, update and delete projects, milestones, tasks, checklist items, comments and users.",
    linkHref: "https://at3-web-app-using-frameworks-tyler.vercel.app/",
    linkText: "Visit Site",
    projectSkills: [
      {
        skillIcon: "bi bi-filetype-js text-next",
        skillName: "Next.js",
      },
      {
        skillIcon: "bi bi-filetype-js text-react",
        skillName: "React",
      },
      {
        skillIcon: "bi bi-filetype-css text-bootstrap",
        skillName: "Bootstrap",
      },
    ],
  },
  {
    id: 2,
    imageSrc: "/library-website.png",
    imageAlt: "...",
    title: "Library Website",
    text: "Built specifically for a client at the NMT Library, this website helps new students at NMTAFE complete common tasks like signing into their student account for the first time or logging into the campus Wi-Fi.",
    linkHref: "https://mytafespace.screencraft.net.au/",
    linkText: "Visit Site",
    projectSkills: [
      {
        skillIcon: "bi bi-filetype-php text-wordpress",
        skillName: "WordPress",
      },
      {
        skillIcon: "bi bi-filetype-css text-sass",
        skillName: "SASS",
      },
      {
        skillIcon: "bi bi-filetype-css text-bootstrap",
        skillName: "Bootstrap",
      },
    ],
  },
  {
    id: 3,
    imageSrc: "/tilspics.png",
    imageAlt: "...",
    title: "TilsPics",
    text: "This is a site that I made for myself which allows me to upload, download and showcase my photography in it's full original quality.",
    linkHref: "https://tilspics.com",
    linkText: "Visit Site",
    projectSkills: [
      {
        skillIcon: "bi bi-filetype-php text-php",
        skillName: "PHP",
      },
      {
        skillIcon: "bi bi-filetype-js text-js",
        skillName: "JavaScript",
      },
      {
        skillIcon: "bi bi-filetype-css text-css",
        skillName: "CSS",
      },
    ],
  },
  {
    id: 4,
    imageSrc: "/portfolio-website.png",
    imageAlt: "...",
    title: "Portfolio Website",
    text: "This is the website that you are currently on, which I made for myself to showcase my skillset, passion and gloals.",
    linkHref: "https://tylerdewit.com",
    linkText: "Visit Site",
    projectSkills: [
      {
        skillIcon: "bi bi-filetype-js text-react",
        skillName: "React",
      },
      {
        skillIcon: "bi bi-filetype-tsx text-ts",
        skillName: "TypeScript",
      },
      {
        skillIcon: "bi bi-filetype-css text-bootstrap",
        skillName: "Bootstrap",
      },
    ],
  },
  {
    id: 5,
    imageSrc: "/guitarmatchup.png",
    imageAlt: "...",
    title: "GuitarMatchup",
    text: "Being the first major site I ever made it's not winning any design awards, but it does showcase one of my other passions and has a backend where I can edit the weekly guitars showcase from inside the site.",
    linkHref: "https://guitarmatchup.com",
    linkText: "Visit Site",
    projectSkills: [
      {
        skillIcon: "bi bi-filetype-php text-php",
        skillName: "PHP",
      },
      {
        skillIcon: "bi bi-filetype-js text-js",
        skillName: "JavaScript",
      },
      {
        skillIcon: "bi bi-filetype-css text-css",
        skillName: "CSS",
      },
    ],
  },
];

export default projectCards;
