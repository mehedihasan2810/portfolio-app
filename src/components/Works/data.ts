interface WorksInfo {
  id: number;
  name: string;
  img: string;
  title: string;
  about: string;
  technologies: string[];
  url: string;
}

export const worksInfo: WorksInfo[] = [
  {
    id: 1,
    name: "Talk Tide",
    img: "/images/talk-tide.png",
    title: "A full-stack realtime messaging chat web application",
    about:
      "Talk Tide, a chat platform like Messenger and WhatsApp, allows chatting with anyone worldwide. Create one-on-one or group chats, send images, and use emojis for instant communication.",
    technologies: [
      "NextJS",
      "TypeScript",
      "TailwindCSS",
      "Prisma",
      "Pusher Channel",
      "SocketIO",
      "MongoDB",
      "React Query",
    ],
    url: "https://talktide.vercel.app",
  },
  {
    id: 2,
    name: "Learn In Summer",
    img: "/images/learn-in-summer2.png",
    title: "A full-stack Music Education Platform",
    about:
      "It is a website user, admin, and instructor roles. Instructors can sell classes on various instruments, manage content, and view clear stats. Admins can manage users & classes added by instructors",
    technologies: [
      "ReactJS",
      "Recharts",
      "ExpressJS",
      "MongoDB",
      "MaterialUI",
      "Firebase",
      "React Query",
      "Gsap",
      "Stripe",
    ],
    url: "https://learn-in-summer.web.app",
  },
  {
    id: 3,
    name: "Elite Mart",
    img: "/images/elite-mart2.png",
    title: "A full-stack ecommerce web application",
    about:
      "Some key features are a beautiful home, products, product details, a product cart, and a favorite products page. Sign in & sign up auth was implemented with next-auth",
    technologies: [
      "TypeScript",
      "Nextjs",
      "Sass",
      "Redux",
      "Mongoose",
      "Mongodb",
      "Gsap",
      "NextAuth",
      "Jest",
      "React Testing Library",
    ],
    url: "https://elite-mart.vercel.app",
  },
  {
    id: 4,
    name: "FunCarFactory",
    img: "/images/fun-car-factory2.png",
    title: "A full-stack toy web store",
    about:
      "Some key features are you can add, delete, update toy. Advanced sorting and searching features. Sign in & sign up auth was implemented with firebase",
    technologies: [
      "GraphQL",
      "Prisma",
      "TypeScript",
      "ReactJS",
      "ExpressJS",
      "Mongodb",
      "Firebase",
      "Vitest",
      "React Testing Library",
    ],
    url: "https://fun-car-factory.web.app",
  },

  {
    id: 5,
    name: "Chefs Kingdom",
    img: "/images/chefs-kingdom2.png",
    title: "A full-stack recipe selling website",
    about:
      "It designed for chefs around the world who can come sell their recipes to customer via this website.",
    technologies: ["ReactJS", "ExpressJS", "Mongodb", "CSS", "firebase"],
    url: "https://chefs-kingdom-96f43.firebaseapp.com",
  },

  //   {
  //     id: 5,
  //     name: "Legal House",
  //     img: "/images/legal-house.png",
  //     title: "A website design for legal advocate farm",
  //     about: "A website design for legal advocate farm",
  //     technologies: ["HTML", "Tailwind"],
  //     url: "https://legal-house2810.netlify.app/",
  //   },
];
