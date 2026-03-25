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
        title: "BVM",
        description: "Virtual Machine for the Bolt Programming Language.",
        links: [{ label: "Github", url: "https://github.com/HrishabhMittal/bvm" }]
    },
    {
        title: "Bolt",
        description: "A Multi-Pass Compiler for a custom programming language with strong-static typing, which compiles to bytecode interpreted by BVM.",
        links: [{ label: "Github", url: "https://github.com/HrishabhMittal/bolt" }]
    },
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
        description: "A Soft Body Simulation written in C++ with SDL2",
        links: [{ label: "Github", url: "https://github.com/HrishabhMittal/SoftBodySim" }]
    },
    {
        title: "LZSS Compression Tool",
        description: "A cross-platform compression tool written in C (and rewritten in C++) using LZSS algorithm",
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
        subtitle: "Languages that have worked with.",
        items: [
            "C++", "Golang", "C", "JavaScript/TypeScript",
            "Bash", "Lua",
            "Python", "NASM Assembly",
        ]
    },
    {
        title: "Currently Exploring",
        subtitle: "These are fields that I am actively exploring.",
        items: [
            "Workings of Compilers/Interpreters", "Memory Management & Garbage Collection",
            "Network Programming", "System Design", "Competitive Programming",
            "GameDev", "Graphics Programming"
        ]
    }
];
