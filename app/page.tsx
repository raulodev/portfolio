"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Mail, ArrowDown } from "lucide-react";
import { projects, personalInfo } from "@/lib/config";
import { Card } from "@/components/Card";
import { Modal } from "@/components/Modal";
import { Projects } from "@/interfaces";

export default function Home() {
  const [project, setProject] = useState<Projects>();
  const [showArrow, setShowArrow] = useState<boolean>(true);
  const projSection = useRef<HTMLDivElement>(null);

  return (
    <div className="p-4 space-y-4 text-gray-800 text-lg font-mono">
      {/* Personal Info */}
      <div className="flex flex-col gap-4 items-center justify-center h-screen text-right sm:text-center">
        <h1 className="text-4xl font-black">{personalInfo.name}</h1>
        <p className="sm:w-1/2">{personalInfo.summary}</p>

        <div>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {projects.map((el, index) => (
          <Card key={index} project={el} onSelect={() => setProject(el)} />
        ))}

        <AnimatePresence>
          {project && (
            <Modal project={project} onClose={() => setProject(undefined)} />
          )}
        </AnimatePresence>
      </div>
      <div className="fixed right-4 bottom-4">
        <Link href={`mailto:${personalInfo.email}`}>
          <button className="bg-red-500 hover:bg-green-500 transition-colors ease-in-out text-white rounded px-2 py-1 shadow-lg">
            <Mail />
          </button>
        </Link>
      </div>
      <footer className="h-10"></footer>
    </div>
  );
}
