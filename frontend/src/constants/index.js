
import project1 from "../assets/projectImage/Bookstorelogo.jpg"
import project2 from "../assets/projectImage/logo.jpg"
import project3 from "../assets/projectImage/grahics3.jpg"


export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Full Stack Developer",
    company: "IT Zone",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "Node.js", "React", "Express.js", "MongoDB", "MySQL"],
  },
  {
    year: "2022 - 2024",
    role: "Frontend Developer",
    company: "CodeSoft",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "tailwindcss","React", "Javascript"],
  },
];

export const PROJECTS = [
  {
    title: "Online Book Store",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT + brypt"],
  },

  {
    title: "Portfolio Website",
    href: "https://rohitpandeya.netlify.app/",
    image: project2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Graphics Designs",
    image: project3,
    description:
      "Crafted a vibrant graphic design project using Canva, blending bold visuals with clean typography to communicate ideas clearly. Focused on creating a cohesive aesthetic that aligns with the brand’s tone and engages the target audience effectively.",
    technologies: ["Canva"],
  },
];

export const CONTACT = {
  address: "Mnr, Kanchanpur",
  phoneNo: "+977-9769903723",
  email: "rohitpandeya1042@gmail.com",
};