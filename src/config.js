
const config = {
    hero: {
        name: process.env.NEXT_PUBLIC_NAME,
        bio: process.env.NEXT_PUBLIC_TAGLINE,
        socials: [
          { name: "GitHub", link: process.env.NEXT_PUBLIC_GITHUB },
          { name: "LinkedIn", link: process.env.NEXT_PUBLIC_LINKEDIN },
        ],
      },
    name: process.env.NEXT_PUBLIC_NAME,
    tagline: process.env.NEXT_PUBLIC_TAGLINE,
    about: {
        description:
          "I am a passionate developer with experience in full-stack development, microservices, and scalable applications.",
        skills: ["JavaScript", "Node.js", "React", "Next.js", "MongoDB", "Docker", "Kubernetes"],
      },
    projects: [
      {
        title: "Project 1",
        description: "A full-stack application for book lovers.",
        link: "https://github.com/yourusername/project1",
      },
      {
        title: "Project 2",
        description: "A scalable quiz system using microservices.",
        link: "https://github.com/yourusername/project2",
      },
    ],
    contact: {
      email: process.env.NEXT_PUBLIC_EMAIL,
      github: process.env.NEXT_PUBLIC_GITHUB,
      linkedin: process.env.NEXT_PUBLIC_LINKEDIN,
    },
  };
  
  export default config;
  