type Link = {
  label: string;
  url: string;
};

type Project = {
  title: string;
  description: string;
  links: Link[];
};

type SkillCategory = {
  title: string;
  subtitle: string;
  items: string[];
};

export const projectsData: Project[] = [
  {
    title: "Download Manager & Bittorrent Client",
    description: "A high-speed concurrent download manager built using Go, bundled with a custom implementation of the Bittorrent Protocol.",
    links: [{ label: "Github", url: "https://github.com/HrishabhMittal/dman" }]
  },
  {
    title: "Nexus",
    description: "A game server written in Typescript to handle syncing game states of clients with high performance using WebRTC and Protobuf.",
    links: [{ label: "Github", url: "https://github.com/HrishabhMittal/nexus" }]
  },
  {
    title: "ZEUS 6D",
    description: "A training-free zero shot tool to estimate the position of an Object in space in an image, given its 3D model",
    links: [{ label: "Github", url: "https://github.com/pitcher69/ZEUS6D" }]
  },
  {
    title: "Cobot.py",
    description: "A TCP/Bluetooth Client library for a proprietary backend for Addverb's Cobot. Handles all different range of motions in all 6 degrees of freedom for Addverb's Cobot.",
    links: [{ label: "Github", url: "https://github.com/HrishabhMittal/cobot" }]
  },
  {
    title: "Anim",
    description: "A simple animation library written for C++ using SDL2",
    links: [{ label: "Github", url: "https://github.com/HrishabhMittal/anim" }]
  },
  {
    title: "Soft Body Simulation",
    description: "A Soft Body Simulation written in C++",
    links: [{ label: "Github", url: "https://github.com/HrishabhMittal/SoftBodySim" }]
  },
  {
    title: "LZSS Compression Tool",
    description: "A cross-platform compression tool written in C (currently being rewritten in C++ with more features) using LZSS algorithm",
    links: [
      { label: "C", url: "https://github.com/HrishabhMittal/smoller" },
      { label: "C++", url: "https://github.com/HrishabhMittal/squash" }
    ]
  },
  {
    title: "JASON",
    description: "A simple cross-platform JSON Parser written for C++",
    links: [{ label: "Github", url: "https://github.com/HrishabhMittal/JASON" }]
  }
];

export const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    subtitle: "In order of my interest in them",
    items: [
      "C++", "Golang", "Rust", "C", "JavaScript/TypeScript", 
      "Bash Scripting", "Lua Scripting", "NASM/FASM Assembly", 
      "Python (Yes, I would rather write Assembly than enjoy python)", 
      "HTML & CSS (if that even counts)"
    ]
  },
  {
    title: "Currently Exploring",
    subtitle: "Again in order of my interest in them",
    items: [
      "Workings of Compilers/Interpreters", "Memory Management & Garbage Collection", 
      "Network Programming", "System Design", "Competitive Programming", 
      "GameDev", "Graphics Programming"
    ]
  }
];
