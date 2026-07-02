interface Project {
  id: number;
  imageSrc: string;
  imageAlt: string;
  title: string;
  text: string;
  liveSitelinkHref: string;
  liveSitelinkText: string;
  repositorylinkHref: string;
  repositorylinkText: string;
  projectSkills: ProjectSkill[];
}

interface ProjectSkill {
  skillIcon: string;
  skillClass: string;
  skillName: string;
}

const projectCards: Project[] = [
  {
    id: 1,
    imageSrc: "/project-management-application.png",
    imageAlt: "...",
    title: "Project Management Application",
    text: "App build with next.js that communicates with an API to create, read, update and delete projects, milestones, tasks, checklist items, comments and users.",
    liveSitelinkHref: "https://at3-web-app-using-frameworks-tyler.vercel.app/",
    liveSitelinkText: "Live Demo",
    repositorylinkHref:
      "https://github.com/Tyler-de-Wit/at3-web-app-using-frameworks-Tyler-de-Wit",
    repositorylinkText: "Source Code",
    projectSkills: [
      {
        skillIcon: "nextjs",
        skillClass: "text-next",
        skillName: "Next.js",
      },
      {
        skillIcon: "react",
        skillClass: "text-react",
        skillName: "React",
      },
      {
        skillIcon: "bootstrap",
        skillClass: "text-bootstrap",
        skillName: "Bootstrap",
      },
    ],
  },
  {
    id: 2,
    imageSrc: "/library-website.png",
    imageAlt: "...",
    title: "Library Website",
    text: "Built specifically for a client at the NMT Library, this website helps new students at NMTAFE complete common tasks in their first few weeks.",
    liveSitelinkHref: "https://mytafespace.screencraft.net.au/",
    liveSitelinkText: "Live Demo",
    repositorylinkHref: "https://github.com/Tyler-de-Wit/Library-Project",
    repositorylinkText: "Source Code",
    projectSkills: [
      {
        skillIcon: "wordpress",
        skillClass: "text-wordpress",
        skillName: "WordPress",
      },
      {
        skillIcon: "sass",
        skillClass: "text-sass",
        skillName: "SASS",
      },
      {
        skillIcon: "bootstrap",
        skillClass: "text-bootstrap",
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
    liveSitelinkHref: "https://tilspics.com",
    liveSitelinkText: "Live Demo",
    repositorylinkHref: "https://github.com/Tyler-de-Wit/tilspics",
    repositorylinkText: "Source Code",
    projectSkills: [
      {
        skillIcon: "php",
        skillClass: "text-php",
        skillName: "PHP",
      },
      {
        skillIcon: "javascript",
        skillClass: "text-js",
        skillName: "JavaScript",
      },
      {
        skillIcon: "css",
        skillClass: "text-css",
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
    liveSitelinkHref: "https://tylerdewit.com",
    liveSitelinkText: "Live Demo",
    repositorylinkHref: "https://github.com/Tyler-de-Wit/portfolio-site-react",
    repositorylinkText: "Source Code",
    projectSkills: [
      {
        skillIcon: "react",
        skillClass: "text-react",
        skillName: "React",
      },
      {
        skillIcon: "typescript",
        skillClass: "text-ts",
        skillName: "TypeScript",
      },
      {
        skillIcon: "bootstrap",
        skillClass: "text-bootstrap",
        skillName: "Bootstrap",
      },
    ],
  },
  {
    id: 5,
    imageSrc: "/guitarmatchup.png",
    imageAlt: "...",
    title: "GuitarMatchup",
    text: "This site showcases one of my other passions and it has a backend where I can edit the weekly guitars showcase from inside the site.",
    liveSitelinkHref: "https://guitarmatchup.com",
    liveSitelinkText: "Live Demo",
    repositorylinkHref: "https://github.com/Tyler-de-Wit/guitarmatchup",
    repositorylinkText: "Source Code",
    projectSkills: [
      {
        skillIcon: "php",
        skillClass: "text-php",
        skillName: "PHP",
      },
      {
        skillIcon: "javascript",
        skillClass: "text-js",
        skillName: "JavaScript",
      },
      {
        skillIcon: "css",
        skillClass: "text-css",
        skillName: "CSS",
      },
    ],
  },
];

export default projectCards;
