export const baseURL = {
  local: "http://localhost:3000/",
  deployed: "https://hevinjant.github.io/my-portfolio-website/",
};

export const myProjects = [
  {
    name: "Spottem - Music Based Social Media",
    description:
      "Developed a web application social media based on music. Using Spotify API and Spotify OAuth to access user’s personal information and songs. Developed with React JavaScript, and Python Flask. The web application is deployed to Heroku and the data is managed using Atlas MongoDB database.",
    url: "https://github.com/hevinjant/spottem-reactjs",
    //url: baseURL.deployed + "spottem",
  },
  {
    name: "Messaging Mobile App",
    description:
      "Developed a real-time messaging mobile application using iOS Swift, with UIKit and MessageKit. The app uses Firebase real-time database for real-time user interaction and supports text, photo, video, and location messages.",
    url: "https://github.com/hevinjant/AntPena",
  },
  {
    name: "See You Later - One Day Hackathon Project",
    description:
      "Developed a web application to manage new year resolutions using React JavaScript. New technologies that I learned during the hackathon; integrate web application with MetaMask Crypto Wallet, create tokens and its smart contract with Ethereum BlockChain using Solidity.",
    url: "https://github.com/hevinjant/SYL-Hackathon",
  },
  {
    name: "Portfolio Website",
    description:
      "Developed portfolio website using React JavaScript and styled with CSS. Hosted by GitHub Pages.",
    url: "https://github.com/hevinjant/my-portfolio-website",
  },
  {
    name: "3D Platform Game",
    description:
      "Developed 3D game with Unity Real-Time Game Engine. Published through WebGL to Unity Play.",
    url: "https://play.unity.com/mg/other/webgl-builds-141238",
  },
  {
    name: "BMP File Compression",
    description:
      "Developed multiprocessing program in C/C++ that is able to compress or decompress BMP file using lossless bit-level Huffman encoding algorithm and encrypted using bitwise XOR operation.",
    url: "https://github.com/hevinjant/CompressBMP",
  },
  {
    name: "Simple Blog-posting Webpage",
    description:
      "Developed a blog-posting webpage through Python’s web framework, Django. The program is deployed with Heroku cloud platform and S3 file storage system from Amazon Web Service (AWS).",
    url: "https://github.com/hevinjant/TMYS",
  },
];

const myExperiences = [
  {
    title: "Programming Tutor and Office Assistant",
    location:
      "Academic Computing Research Center at City College of San Francisco",
    interval: "June 2018 – May 2020",
    description:
      "Guided 7 to 10 students per day to understand programming concepts in iOS Swift, C++, C, and Python programming language.",
  },
  {
    title: "First Winner of Progress Database at API World 2018 Hackathon",
    location: "San Jose, CA",
    interval: "Sept 2018",
    description:
      "Brainstormed and executed idea in a group of three people to make a mobile app in iOS Swift and used Progress Database API for the backend.",
  },
  {
    title: "Mathematics Tutor",
    location: "Learning Assistance Center at City College of San Francisco",
    interval: "Aug 2019 – May 2020",
    description:
      "Guided 4 to 6 students per day to improve their learning ability in advanced Algebra and Calculus.",
  },
  {
    title: "Web/Mobile App developer Intern",
    location: "PT Guna Elektro",
    interval: "June 2021 – Aug 2021",
    description:
      "Worked in a team of three people and developed web/mobile application for internal warehouse management using Microsoft 365 platform such as SharePoint, Power Apps, and Power Automate.",
  },
  {
    title: "See You Later, Hackulator - Hackathon",
    location: "Virtual",
    interval: "December 31, 2021",
    description:
      "Worked in a team of two people, exploring and learning new technologies in one day. Our group developed a website that integrates with MetaMask Crypto Wallet and created token and its smart contract with Ethereum BlockChain using Solidity.",
  },
  {
    title: "React Developer",
    location: "Cal Poly Cybersecurity Institute",
    interval: "March 2022 - Present",
    description:
      "Refactoring the Space Grand Challenge website from React class-based components to functional components, maintaining and implementing user authentication process using AWS Cognito, applying Material UI components to the website.",
  },
  {
    title: "Fullstack Web Developer",
    location: "Verdant Robotics",
    interval: "June 2022 - September 2022",
    description:
      "Implementing new features, creating unit tests, and maintaining existing code on a web application.",
  },
];

export const reversedMyExperiences = myExperiences.reverse();

export const aboutMe =
  "I am a computer science student at California Polytechnic State University, San Luis Obispo. I mainly interested in frontend and mobile app development, but I love to learn about anything else whenever I get the chance. I love to build things hence why I chose to be a software engineer, so that I could build things that would be useful and meaningful to many people.";
