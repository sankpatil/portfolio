// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's


import KVPLogo from './assets/education_logo/KVPLogo.png';
import Model_Logo from './assets/education_logo/Model_Logo.jpeg';
import Gayatri_Logo from './assets/education_logo/Gayatri_Logo.png';
// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';
import Online_BookStore from './assets/work_logo/Online_BookStore.png';
import Jarvis from './assets/work_logo/jarvis.png';

// Office Icons
const excelIcon = 'https://img.icons8.com/color/96/000000/microsoft-excel-2019--v1.png';
const wordIcon = 'https://img.icons8.com/color/96/000000/microsoft-word-2019--v1.png';
const powerpointIcon = 'https://img.icons8.com/color/96/000000/microsoft-powerpoint-2019--v1.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
     // { name: 'Angular', logo: angularLogo },
     // { name: 'Redux', logo: reduxLogo },
    //  { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
     // { name: 'GSAP', logo: gsapLogo },
      //{ name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
   //   { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
  //    { name: 'Firebase', logo: firebaseLogo },
    //  { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    //  { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
  //    { name: 'Netlify', logo: netlifyLogo },
  //    { name: 'Figma', logo: figmaLogo },
    ],
  },
  {
    title: 'Others',
    skills: [
      { name: 'Excel', logo: excelIcon },
      { name: 'Word', logo: wordIcon },
      { name: 'PowerPoint', logo: powerpointIcon },
    ],
  }
];

  export const experiences = [
    // {
    //   id: 0,
    //   img: webverseLogo,
    //   role: "Fullstack Developer",
    //   company: "Webverse Digital",
    //   date: "April 2024 - Present",
    //   desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    //   skills: [
    //     "HTML",
    //     "CSS",
    //     "JavaScript",
    //     "React JS",
    //     "TypeScript",
    //     "Node JS",
    //     "Tailwind CSS",
    //     "MongoDb",
    //     "Redux",
    //     " Next Js",
    //   ],
    // },
    // {
    //   id: 1,
    //   img: agcLogo,
    //   role: "Fullstack Engineer",
    //   company: "Agumentik Group of Companies",
    //   date: "July 2023 - March 2024",
    //   desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    //   skills: [
    //     "ReactJS",
    //     "Redux",
    //     "JavaScript",
    //     "Tailwind CSS",
    //     "HTML",
    //     "CSS",
    //     "SQL",
    //   ],
    // },
    // {
    //   id: 2,
    //   img: newtonschoolLogo,
    //   role: "Frontend Intern",
    //   company: "Newton School",
    //   date: "September 2021 - August 2022",
    //   desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    //   skills: [
    //     "HTML",
    //     "CSS",
    //     "Javascript",
    //     "Bootstrap",
    //     "Figma",
    //     "Material UI",
    //   ],
    // },
    {
      id: 0,
      //img: selfLogo,
      role: "Self-Taught Developer",
      company: "YouTube & Online Platforms",
      date: "2024 - Present",
      desc: "Completed multiple courses in Web Development, React, Node.js, MongoDB, JavaScript, and more. Built real-world projects and practiced problem-solving to strengthen my development skills and logical thinking.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "Git & GitHub",
      ],
    },
    {
      id: 1,
      // img: dataScienceLogo, // You can import and use a relevant image later
      role: "Data Science Learner",
      company: "CodeWithHarry",
      date: "2025 - Present",
      desc: "Currently learning the fundamentals of Data Science through a structured course by CodeWithHarry. Gained hands-on experience in Python, data analysis, NumPy, Pandas, and visualization libraries. Practicing real-world problems to develop analytical thinking and data-driven decision making.",
      skills: [
        "Python",
        "NumPy",
        "Pandas",
        "Data Analysis",
        "Matplotlib",
        "Problem Solving",
      ],
    },
    {
    
      id: 2,
      // img: javaLogo, // Optional – you can use a Java or Spring logo here
      role: "Java Web Developer (Learner)",
      company: "Self-Learning / College Projects",
      date: "2023 – 2024",
      desc: "Learned Java for web development including JSP, Servlets, JDBC, and core backend concepts. Built basic web apps, implemented form validation, database connectivity, and MVC architecture using Java and MySQL. This learning improved my understanding of server-side logic and backend processing.",
      skills: [
        "Core Java",
        "JSP",
        "Servlets",
        "JDBC",
        "MySQL",
        "MVC Architecture",
      ],
    },    







  ];
  
  export const education = [

    {
      id: 0,
      img: KVPLogo,
      school: "K V Pendharkar",
      date: "April 2023 - April 2025",
      grade: "8.40 CGPA",
      desc: "I completed my Bachelor's degree in Information Technology (B.Sc.IT) from K V Pendharkar College, Dombivali. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Science - BSC (Information Technology)",
    },
    {
      id: 1,
      img: Model_Logo,
      school: "Model College Kalyan",
      date: "Apr 2017 - March 2018",
      grade: "57%",
      desc: "I completed my class 12 education from Model College Kalyan, under the HSC board, where I studied Physics, Chemistry, Biology and Mathematics (PCMB) with Information Technology.",
      degree: "HSC(XII) - PCMB with Information Technology",
    },
    {
      id: 2,
      img: Gayatri_Logo,
      school: "Gayatri Vidyalaya",
      date: "Apr 2019 - March 2020",
      grade: "85%",
      desc: "I completed my class 10 education from Gayatri Vidyalaya, under the SSC board, where Successfully passed with foundational subjects Built a strong academic base.",
      degree: "SSC(X) - Science with Computer Application",
    },
  ];
  
  export const projects = [
    // {
    //   id: 0,
    //   title: "GitHub Profile Detective",
    //   description:
    //     "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
    //   image: githubdetLogo,
    //   tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    //   github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
    //   webapp: "https://githubprofiledetective.netlify.app/",
    // },
    // {
    //   id: 1,
    //   title: "CS Prep",
    //   description:
    //     "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
    //   image: csprepLogo,
    //   tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
    //   github: "https://github.com/codingmastr/CSPrep",
    //   webapp: "https://csprep.netlify.app/",
    // },
    // {
    //   id: 2,
    //   title: "Movie Recommendation App",
    //   description:
    //     "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    //   image: movierecLogo,
    //   tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    //   github: "https://github.com/codingmastr/Movie-Recommendation-App",
    //   webapp: "https://movie-recommendation-app-jet.vercel.app/",
    // },
    // {
    //   id: 3,
    //   title: "Email Validator NPM Package",
    //   description:
    //     "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    //   image: npmLogo,
    //   tags: ["React JS", "Node.js", "NPM", "Validation"],
    //   github: "https://github.com/codingmastr/cmtk-email-validator",
    //   webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    // },
    // {
    //   id: 4,
    //   title: "Task Reminder Chrome Extension Tool",
    //   description:
    //     "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
    //   image: taskremLogo,
    //   tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    //   github: "https://github.com/codingmastr/Task-Reminder-Tool",
    //   webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    // },
    // {
    //   id: 5,
    //   title: "Webverse Digital",
    //   description:
    //     "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
    //   image: webverLogo,
    //   tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    //   github: "https://github.com/codingmastr/Webverse-Digital",
    //   webapp: "https://webversedigital.com/",
    // },
    // {
    //   id: 6,
    //   title: "Coding Master",
    //   description:
    //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    //   image: cmLogo,
    //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    //   github: "https://codingmasterweb.in/",
    //   webapp: "https://codingmasterweb.in/",
    // },
    // {
    //   id: 7,
    //   title: "Image Search App",
    //   description:
    //     "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    //   image: imagesearchLogo,
    //   tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Search-App",
    //   webapp: "https://imagsearch.netlify.app/",
    // },
    // {
    //   id: 8,
    //   title: "Image Background Remover",
    //   description:
    //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    //   image: removebgLogo,
    //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Background-Remover",
    //   webapp: "https://removeyourbg.netlify.app/",
    // },

    {
      id: 0,
      title: "Online Book Selling Web App",
      description:
        "A full-featured MERN stack web application designed for users to explore, buy, read, and download books online. The app includes authentication, book categorization, a responsive shopping interface, and a chatbot assistant for support. It showcases seamless frontend and backend integration with a clean, user-friendly UI.",
     image: Online_BookStore, // Replace with your book app image
      tags: ["React JS", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com/sanket2350/online-book-store", // Replace with your actual GitHub link
      webapp: "https://your-book-app.netlify.app/", // Replace with your deployed link
    },
    {
      id: 1,
      title: "Jarvis AI Voice Assistant (Python)",
      description:
        "A Python-based voice assistant inspired by Jarvis from Iron Man. It can recognize voice commands, speak responses, tell the date/time, search Wikipedia, open websites, play music, fetch weather updates, crack jokes, and respond to greetings. This project helped in exploring speech recognition, TTS, APIs, and Python automation.",
      image: Jarvis, // Replace with your assistant logo or Jarvis-styled image
      tags: ["Python", "SpeechRecognition", "Pyttsx3", "APIs", "Automation"],
      github: "https://github.com/sanket2350/jarvis-ai", // Replace with your actual GitHub link
      webapp: "", // Leave blank or use a YouTube demo/video link if available
    },
        









    
  ];  