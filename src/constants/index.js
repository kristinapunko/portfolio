import {
    mobile,
    backend,
    shop,
    travelSite,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    postgresql,
    mongodb,
    git,
    figma,
    nextjs,
    frameworks,
    language,
    cssstyling,
    database,
    development, 
    uxui,
    django,
    planner,
    bootstrap,
    movieApp
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Fullstack Developer",
      icon: backend,
    },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
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
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Postgre SQL",
      icon: postgresql,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: nextjs,
    },
  ];
  
  const experiences = [
    {
      title: "Languages",
      skills: "HTML5, CSS3, JavaScript (ES6+), TypeScript",
      icon: language,
      iconBg: "#E6DEDD",
      points: [
        "Knowledge of data types in JavaScript. Use of function and object loops. Working with arrays and their methods. DOM manipulation, event handling. Use of JSON for asynchronous data exchange with the server, as well as promises for efficient management of asynchronous operations.",
        "Knowledge of the basics and practical application of TypeScript in projects. Typing variables, functions, and objects, creating custom types and interfaces, and using generics.",
      ],
    },
    {
      title: "Frontend Frameworks & Libraries",
      skills: "React, React Native, Next.js, Redux Toolkit, React Router",
      icon: frameworks,
      iconBg: "#E6DEDD",
      points: [
        "I have practical experience in developing interfaces using React, including creating components, working with Hooks (useState, useEffect etc.), organizing global state using Redux Toolkit, and implementing routing in single-page applications using React Router.",
        "Worked with Next.js for server-side rendering, experience in connecting MongoDB and PostgreSQL databases to applications.",
        "Skills in creating mobile interfaces using React Native - from screen layout to navigation.",
      ],
    },
    {
      title: "Styling & UI Libraries",
      skills: "CSS, SCSS, Bootstrap, Tailwind CSS, Material UI, Styled Components",
      icon: cssstyling,
      iconBg: "#E6DEDD",
      points: [
        "Creating responsive interfaces for different types of devices, using CSS and SCSS for flexible styling.",
        "Experience with Bootstrap for quick layout using ready-made components and grid.",
        "Using Tailwind CSS for fast and controlled styling. Knowledge of Material UI (MUI) to create a modern, user-friendly and accessible interface using Material Design components.",
        "Use Styled Components to stylize components in React.",
      ],
    },
    {
      title: "Backend & Databases",
      skills: "RESTful API integration, CRUD, MongoDB, PostgreSQL",
      icon: database,
      iconBg: "#E6DEDD",
      points: [
        "Integration of RESTful APIs into front-end applications, implementing data exchange between client and server. Knowledge of the principles of CRUD operations (create, read, update, delete) and applied them when working with databases and APIs.",
        "I have worked with MongoDB as a NoSQL database for storing unstructured data, as well as with PostgreSQL as a relational SQL database for building structured data models. I know what GraphQL is and understand its advantages over REST in certain cases.",
        "Experience in creating REST APIs in Django, implementing backend logic for interacting with the frontend, working with databases, and processing requests.",
      ],
    },
    {
      title: "Development Tools & Version Control",
      skills: "Git, GitHub, GitLab, Bitbucket, Trello, Jira",
      icon: development,
      iconBg: "#E6DEDD",
      points: [
        "Git skills, including creating and using branches, merging, and creating pull requests for team development.",
        "Worked with GitHub, GitLab, and Bitbucket as platforms for hosting repositories and reviewing code.",
        "Familiar with tools for organizing teamwork, such as Trello and Jira.",
      ],
    },
    {
      title: "UI/UX Design & Prototyping",
      skills: "Figma",
      icon: uxui,
      iconBg: "#E6DEDD",
      points: [
        "Basic skills in Figma - creating interface layouts, working with grids, components, and fonts. I am familiar with the functionality of prototyping to demonstrate the logic of interaction between screens. Adaptation of ready-made designs for layout, following the principles of “design-to-code”.",
      ],
    },
  ];
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  
  const projects = [
    {
      name: "Travel agency website (frontend)",
      description:
        "Responsive web interface built on React with Redux Toolkit for global state management. Tailwind CSS provides styling. The functionality of viewing tours, filtering by parameters, authorization, reviews, adding to favorites, and booking is implemented. Interacts with the server via the REST API.",
      tags: [
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "blue-text-gradient",
        },
        {
          name: "redux toolkit",
          color: "pink-text-gradient",
        },
      ],
      image: travelSite,
      source_code_link: "https://github.com/kristinapunko/my-travel-agency.git",
      source_view_link: "https://my-travel-agency-rho.vercel.app/",
    },
    {
      name: "Travel agency website (backend)",
      description:
        "The server logic is implemented in Django using the REST Framework to create APIs. Data storage and processing in the PostgreSQL database is provided. It supports authentication with JWT, processing of requests for tours, bookings, users, and reviews. The API provides full integration with the client side.",
      tags: [
        {
          name: "django",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "postgreSQL",
          color: "blue-text-gradient",
        },
        {
          name: "jwt",
          color: "pink-text-gradient",
        },
      ],
      image: django,
      source_code_link: "https://github.com/kristinapunko/my-django-project.git",
      source_view_link: "https://my-django-project-7203.onrender.com/tours/",
    },
    {
      name: "Full Stack E-Commerce App",
      description:
        "The online store was built using Next.js 15 with Sanity CMS integration for easy content management. User authentication via Clerk, including Passkeys, integration of the Stripe payment system, and dynamic Framer Motion animations have been implemented. The site has a responsive design thanks to Bootstrap.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "sanity",
          color: "pink-text-gradient",
        },
        {
          name: "clerk",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: shop,
      source_code_link: "https://github.com/kristinapunko/-next.js.git",
      source_view_link: "https://nextjs-kristinapunkos-projects.vercel.app/",
    },
    {
      name: "Movie App",
      description:
        "The application is built on React Native, which uses Tailwind CSS to stylize the mobile application. The Movie Database (TMDB) API allows you to watch popular and trending movies. You can view detailed information and manage the status bar. It has navigation, custom hooks, and integration with Appwrite for data storage, trending movies, and user authentication.",
      tags: [
        {
          name: "react native",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindCSS",
          color: "pink-text-gradient",
        },
        {
          name: "appwrite",
          color: "green-text-gradient",
        },
      ],
      image: movieApp,
      source_code_link: "https://github.com/kristinapunko/movie-app.git",
      source_view_link: "https://kristinapunko.github.io/video/",
    },
    
    {
      name: "Planner",
      description:
        "A Django web application with a responsive Bootstrap interface for managing tasks. Users can view a list of tasks stored in the PostgreSQL database, mark them as completed, and sort them by creation date. The Django authentication system is also implemented, allowing users to register, log in, and get personalized access to their tasks.",
      tags: [
        {
          name: "django",
          color: "blue-text-gradient",
        },
        {
          name: "postgreSQL",
          color: "pink-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },

      ],
      image: planner,
      source_code_link: "https://github.com/kristinapunko/planner.git",
      source_view_link: "https://planner-1-sf49.onrender.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };