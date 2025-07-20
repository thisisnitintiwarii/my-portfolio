import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const projectsData = [
  {
    title: "Expenalyze",
    description:
      "Expenalyze is a platform that Track monthly expenses smartly with AI-powered bill scanning",
    link: "https://financeprojject.netlify.app/",
    code: "https://github.com/thisisnitintiwarii/Ai-finance",
    previewVideo: "/projectVideos/Expenalyzeee.mp4",
    technologies: [
      "Next.js",
      "React",
      "Shadcn UI",
      "TypeScript",
      "Tailwind CSS",
      "SupaBase",
      "Netlify",
    ],
  },
  {
    title: "PenPages",
    description:
      "PenPages is a platform that allows users to create and share blogs with their friends.",
    link: "https://penpagess.netlify.app/",
    code: "https://github.com/thisisnitintiwarii/PenPages",
    previewVideo: "/projectVideos/ppenpages.mp4",
    technologies: ["JavaScript", "React", "Redux", "Git", "Appwrite"],
  },
  {
    title: "ThinkAI",
    description:
      "ThinkAI is Simplified gemini interface using API calls to deliver smart text responses.",
    link: "https://thisisnitintiwarii.github.io/ThinkAI/",
    code: "https://github.com/thisisnitintiwarii/ThinkAI",
    previewVideo: "/projectVideos/ThinkAI.mp4",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "MERN incoming...",
    description:
      "Loading",
    link: "https://thisisnitintiwarii.github.io",
    code: "https://github.com/thisisnitintiwarii",
    previewVideo: "/projectVideos/Blog.mp4",
    technologies: [
      "React",
      "Gemini API",
      "Node.js",
      "Tailwind CSS",
    ],
  },
];

function Projects() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h1 className="text-2xl font-bold">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="flex flex-col border rounded-md dark:border-gray-700"
          >
            <video
              src={project.previewVideo}
              autoPlay
              muted
              loop
              className="rounded-t-md"
            />
            <div className="flex flex-col gap-3 p-4 grow">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-[4px]">
                {project.technologies.map((technology, index) => (
                  <span
                    key={index}
                    className="bg-slate-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 mt-auto">
                <Link href={project.link}>
                  <Button variant="default">View</Button>
                </Link>
                <Link href={project.code}>
                  <Button variant="outline">Code</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;