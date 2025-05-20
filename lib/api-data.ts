// This file contains the mock API response data

interface About {
  name: string;
  role: string;
  bio: string;
  location: string;
  status: string;
}

interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github?: string;
  liveUrl?: string;
  year: number;
}

interface Experience {
  id: number;
  company: string;
  position: string;
  description: string;
  technologies: string[];
  startDate: string;
  endDate?: string;
}

interface Skill {
  category: string;
  items: string[];
}

interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
  status: string;
  response_time: string;
}

// About data
const aboutData: About = {
  name: "varun-kilaru",
  role: "Full Stack Developer",
  bio: "Passionate developer with expertise in building web applications. I love solving complex problems and creating elegant solutions.",
  location: "Cincinnati, OH",
  status: "Available for hire"
};

// Experience data
const experienceData: Experience[] = [
  {
    id: 1,
    company: "Abercrombie & Fitch",
    position: "Software Engineer",
    description: "Developed and maintained scalable integrations between internal and third-party systems by building Kafka producers and consumers. Designed and implemented RESTful APIs using Spring Boot for efficient data exchange. Contributed to the development of a centralized Developer Portal using Next.js and Azure, enhancing API discoverability and internal developer experience. Ensured smooth deployment and monitoring using Docker and Kubernetes.",
    technologies: ["Kafka", "Spring Boot", "REST APIs", "Next.js", "Azure", "Docker", "Kubernetes", "Gitlab"],
    startDate: "April 2023",
    endDate: "Present"
  },
  {
    id: 2,
    company: "Wipro LTD",
    position: "Software Engineer",
    description: "Built single sign-on, booking, and payment systems using Spring Boot; enhanced UX with React and Tailwind CSS; migrated components to AWS; optimized MySQL; created CI pipelines; followed Agile practices and maintained high code quality.",
    technologies: ["Java", "Spring Boot", "React", "Tailwind CSS", "MySQL", "AWS", "JUnit", "Git", "Jira"],
    startDate: "September 2020",
    endDate: "August 2021"
  },
  {
    id: 3,
    company: "Cisco",
    position: "Java Developer",
    description: "Developed Spring Boot modules for network management, led REST API creation, implemented tests, migrated Java EE apps, resolved security issues, and contributed to DevOps practices with Maven and Jenkins.",
    technologies: ["Spring Boot", "Java", "JUnit", "Maven", "Jenkins"],
    startDate: "May 2019",
    endDate: "August 2020"
  }
];


// Projects data
const projectsData: Project[] = [
  {
    id: 1,
    name: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product management, cart, and checkout functionality.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/yourusername/ecommerce",
    liveUrl: "https://myecommerce-demo.com",
    year: 2023
  },
  {
    id: 2,
    name: "Task Management App",
    description: "A collaborative task management application with real-time updates.",
    technologies: ["Vue", "Firebase", "Tailwind CSS"],
    github: "https://github.com/yourusername/taskmanager",
    year: 2022
  },
  {
    id: 3,
    name: "Weather Forecast App",
    description: "A weather application providing real-time forecasts using geolocation.",
    technologies: ["React Native", "OpenWeather API", "TypeScript"],
    github: "https://github.com/yourusername/weather-app",
    liveUrl: "https://weather-demo.com",
    year: 2022
  }
];

// Skills data
const skillsData: Skill[] = [
  {
    category: "Languages",
    items: ["JavaScript/TypeScript", "Python", "Core Java", "J2EE"]
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"]
  },
  {
    category: "Backend",
    items: ["Spring Boot", "Confluent Kafka", "Flask"]
  },
  {
    category: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Oracle SQL"]
  },
  {
    category: "DevOps",
    items: ["Docker", "Azure", "CI/CD", "Git"]
  }
];

// Contact data
const contactData: ContactInfo = {
  email: "kilarvarun@gmail.com",
  github: "https://github.com/varun-kilaru",
  linkedin: "https://linkedin.com/in/varun-kilaru",
  status: "Actively responding",
  response_time: "Usually within 24 hours"
};

// Function to get data based on endpoint
export function getData(endpoint: string) {
  switch (endpoint) {
    case '/about':
      return aboutData;
    case '/projects':
      return { projects: projectsData };
    case '/experience':
      return { experience: experienceData };
    case '/skills':
      return { skills: skillsData };
    case '/contact':
      return contactData;
    default:
      return {
        error: "Endpoint not found",
        message: "Please use one of the available endpoints: /about, /skills,  /experience, /contact"
      };
  }
}