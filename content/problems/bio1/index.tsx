import { ProblemInfo } from "../base";
import { Carve, Dino, Proto, Whisperer } from "solutions";

export const bio1Problems = {
  proto: {
    difficulty: "Medium",
    display: "Prototype",
    original: "https://www.olympiad.org.uk/papers/2021/final/proto.pdf",
    year: 2021,
    tags: ["Data Structures"],
    editorialAuthors: ["Boris Hall"],
    solutionAuthors: ["Boris Hall", "Samuel Trajtenberg"],
    component: <Proto />,
  } as ProblemInfo,
  dine: {
    difficulty: "Medium",
    display: "Dinocracy",
    original: "https://www.olympiad.org.uk/papers/2021/final/dine.pdf",
    year: 2021,
    tags: ["Graphs", "Greedy"],
    editorialAuthors: ["Boris Hall"],
    solutionAuthors: ["Boris Hall"],
    component: <Dino />,
  } as ProblemInfo,
  carve: {
    difficulty: "Hard",
    display: "What a Carve Up",
    original: "https://www.olympiad.org.uk/papers/2021/final/carve.pdf",
    year: 2021,
    tags: ["Greedy"],
    editorialAuthors: ["Boris Hall"],
    solutionAuthors: ["Boris Hall"],
    component: <Carve />,
  } as ProblemInfo,
  whisperer: {
    difficulty: "Insane",
    display: "Pigeon Whisperer",
    original: "https://www.olympiad.org.uk/papers/2021/final/whisperer.pdf",
    year: 2021,
    tags: ["Dynamic Programming", "Graphs", "Brute Force"],
    editorialAuthors: ["Boris Hall"],
    solutionAuthors: ["Boris Hall"],
    component: <Whisperer />
  } as ProblemInfo
};