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
        description: "Virtual Machine for the Bolt Programming Language. Implements precise mark and sweep garbage collection.",
        links: [{ label: "Github", url: "https://github.com/HrishabhMittal/bvm" }]
    },
    {
        title: "Bolt",
        description: "A Multi-Pass Compiler for a custom programming language with strong-static typing, support for multiple return types along with peephole optimisations and dead code elimination. Compiles to bytecode interpreted by BVM.",
        links: [{ label: "Github", url: "https://github.com/HrishabhMittal/bolt" }]
    },
    {
        title: "Duchess",
        description: "A custom chess engine written in Rust. Implements multiple search optimisations, along with a rudimentary NNUE (Efficiently Updatable Neural Network) with weights trained on lichess' public games dataset and fine-tuned using Reinforcement Learning.",
        links: [{ label: "Github", url: "https://github.com/HrishabhMittal/duchess" }]
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
        title: "LZSS Compression Tool",
        description: "A cross-platform compression tool written in C (and rewritten in C++) using LZSS algorithm",
        links: [
            { label: "C", url: "https://github.com/HrishabhMittal/smoller" },
            { label: "C++", url: "https://github.com/HrishabhMittal/squash" }
        ]
    }
];

export const skillsData: SkillCategory[] = [
    {
        title: "Languages",
        subtitle: "Languages that have worked with.",
        items: [
            "C++", "Golang", "Rust", "C", "JavaScript/TypeScript",
            "Bash", "Lua",
            "Python", "NASM Assembly",
        ]
    },
];
