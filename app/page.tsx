"use client";
import { Card } from "@/components/Card";
import { Modal } from "@/components/Modal";
import { Projects } from "@/interfaces";
import { personalInfo, projects } from "@/lib/data";
import { ArrowDown, Mail } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Home() {
  const [project, setProject] = useState<Projects>();
  const [showArrow, setShowArrow] = useState<boolean>(true);
  const [tech, setTech] = useState<string>("All techs");
  const projSection = useRef<HTMLDivElement>(null);

  const allTechs = [
    "All techs",
    ...new Set(projects.flatMap((el) => el.tech).map((el) => el.name)),
  ];

  return (
    <div className="px-4 space-y-4 text-gray-800 font-serif bg-white">
      {/* Personal Info */}
      <div className="flex flex-col gap-4 items-center justify-center h-screen text-center">
        <h1 className="text-4xl font-black">{personalInfo.name}</h1>
        <p className="sm:w-3/4 text-lg">{personalInfo.summary}</p>
        <Link href={`mailto:${personalInfo.email}`}>
          <button className="bg-gray-800 flex justify-between items-center text-white rounded-full pl-4 pr-2 py-2 w-36">
            Contact
            <span className="ml-1 bg-white rounded-full p-2 text-gray-800">
              <Mail />
            </span>
          </button>
        </Link>
        <div className="absolute bottom-10">
          {showArrow && (
            <button
              className="duration-75"
              onClick={() => {
                projSection.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              <ArrowDown />
            </button>
          )}
        </div>
      </div>

      {/* Projects */}
      <motion.p
        className="text-center font-bold text-2xl"
        ref={projSection}
        onViewportEnter={() => {
          setShowArrow(false);
        }}
        onViewportLeave={() => {
          setShowArrow(true);
        }}
      >
        Projects
      </motion.p>

      {/* select */}
      <div className="flex justify-center my-10">
        <select
          name="techs"
          id="tech-select"
          className="py-2 px-4 bg-gray-200 rounded outline-none"
          onChange={(e) => setTech(e.target.value)}
        >
          {allTechs.map((el, index) => (
            <option
              key={index}
              value={el}
              className="hover:bg-gray-200 p-1 text-center checked:bg-gray-200"
            >
              {el}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {tech !== "All techs"
          ? projects
              .filter((project) =>
                project.tech.some((techEl) => techEl.name === tech)
              )
              .map((project, index) => (
                <Card
                  key={index}
                  project={project}
                  onSelect={() => setProject(project)}
                />
              ))
          : projects.map((project, index) => (
              <Card
                key={index}
                project={project}
                onSelect={() => setProject(project)}
              />
            ))}

        <AnimatePresence>
          {project && (
            <Modal project={project} onClose={() => setProject(undefined)} />
          )}
        </AnimatePresence>
      </div>
      <footer className="h-10"></footer>
    </div>
  );
}
