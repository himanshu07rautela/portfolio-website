import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  recoil,
  girlscript,
  google,
  fic,
  portfolio,
  badminton,
  weather,
  payment,
  tarsh,
  hitesh,
  kanishk,
  parikshit
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Structures",
    icon: web,
  },
  {
    title: "MERN Developer",
    icon: mobile,
  },
  {
    title: "Quantum Enthusiast",
    icon: backend,
  },
  {
    title: "Communication Systems",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Recoil",
    icon: recoil,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
  
  
];

const experiences = [
  {
    title: "Open Source Contributor",
    company_name: "Girlscript Summer of code",
    icon: girlscript,
    iconBg: "#383E56",
    date: "May 2023 - july 2023",
    points: [
      "Engaged in collaborative coding sessions, code reviews, and discussions with mentors and fellow contributors",
      "Actively participated in community discussions, forums, and events related to the project and the GSSoC program",
      "Gained valuable experience in Frontend Development. Redesigned a deeper understanding of JavaScript concepts.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web dev Lead",
    company_name: "FIC IIT kota",
    icon: fic,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Present",
    points: [
      "Led a dynamic team of more than 5 web developers within the Fit India Club, IIIT Kota, overseeing theconceptualization, development, and maintenance of the club’s official website.",
      "Developed proficiency in handling various aspects of website management, including content updates, troubleshooting,and optimizing website performance.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Team Leader",
    company_name: "Google solution Challenge",
    icon: google,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Led a team of 4 individuals to the Google Solution Challenge 2024 regionals, showcasing innovative solutions and teamwork.",
      "Collaborated to make a real world solution for a real world Problem",
      "Contributed Towards the overall design and frontend of the Project",
   ,
    ],
  },
  // {
  //   title: "Next project",
  //   company_name: "",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Himanshu is not only a great friend but also an exceptional full stack web developer with impressive skills in data structures and algorithms. I highly recommend him.",
    name: " Tarsh SwarnKar",
    designation: "Team Mate ,",
    company: "IIIT Kota",
    image: tarsh,
  },
  {
    testimonial:
      "Himanshu is extremly proactive , is a natural leader and also my best friend",
    name: "Parikshit Waldia",
    designation: "Aspiring vet",
    company: "",
    image:parikshit,
  },
  {
    testimonial:
      "Himanshu has been a great friend, and easy to work mate , would love to collaborate more with him in future",
    name: "Kanishk Tahalyani",
    designation: "Vice President at ",
    company: "The TGCC",
    image: kanishk,
  },
];

const projects = [
  {
    name: "Badminton Tutorials",
    description:
      "Crafted an online badminton skill enhancement platform, integrating instructional guides and exercises. Hosted on Github ",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: badminton,
    source_code_link: "https://github.com/himanshu07rautela/badminton-tutorials",
  },
  {
    name: "Weather Forecasting App",
    description:
      "it is a weather-forcasting-dyanmic-site using open weather api , hosted locally made using node.js framework express.js",
    tags: [
      {
        name: "Node JS",
        color: "blue-text-gradient",
      },
      {
        name: "Express JS",
        color: "green-text-gradient",
      },
      {
        name: "Open Weather API",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/himanshu07rautela/weather-forcasting-dyanmic-site",
  },
  {
    name: "Payment App Prototype",
    description:
      " Developed a payment app prototype with user authentication via JWT tokens. Utilized MongoDB for data storage and management, with Tailwind CSS for styling and responsive design",
    tags: [
      {
        name: " React JS(tailwind)",
        color: "blue-text-gradient",
      },
      {
        name: "Node JS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: payment,
    source_code_link: "https://github.com/himanshu07rautela/payment-app",
  },
  {
    name: "Portfolio Website",
    description:
      "Developed a 3d portfolio website with the help of React JS ,Tailwind css and some beginner level Knowledge of React3fiber",
    tags: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Next Js",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/himanshu07rautela/portfolio-website",
  },
];

export { services, technologies, experiences, testimonials, projects };
