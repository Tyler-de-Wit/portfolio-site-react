interface Project {
  id: number;
  icon: string;
  title: string;
  text: string;
}

const serviceCards: Project[] = [
  {
    id: 1,
    icon: "bi bi-file-person me-3 fs-5",
    title: "Portfolio Website",
    text: "I will create a full fledged portfolio site from scratch to showcase your skills, personality and goals in a professional manner.",
  },
  {
    id: 2,
    icon: "bi bi-pencil me-3 fs-5",
    title: "Personal Blog",
    text: "I will set you up a blog using WordPress, where you can write posts, manage users, edit pages and have full customizability over your own site.",
  },
  {
    id: 3,
    icon: "bi bi-database me-3 fs-5",
    title: "Domain Name / Hosting",
    text: "I can set up and manage your personal domain name and website hosting freeing you up focus on the important things.",
  },
  {
    id: 4,
    icon: "bi bi-browser-chrome me-3 fs-5",
    title: "Website SEO",
    text: "I will go through your existing website and optimise it for search engines bringing you more organic traffic to your business or brand.",
  },
  {
    id: 5,
    icon: "bi bi-universal-access me-3 fs-5",
    title: "Accessibility Audit",
    text: "I will optimise your website so it conforms with current accessibility standards making it available and easy to use for everyone.",
  },
];

export default serviceCards;
