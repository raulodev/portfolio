import Link from "next/link";
import React from "react";
import { GithubIcon, BookMarked } from "lucide-react";
import { Projects } from "@/interfaces";

interface CardProps {
  project: Projects;
  onSelect: () => void;
}

export const Card: React.FC<CardProps> = ({ project, onSelect }) => {
  return (
    <div className="p-4 rounded shadow hover:shadow-xl space-y-4 duration-200">
      <div>
        <p className="text-xl font-bold">{project.name}</p>
        <p className="line-clamp-3">{project.description}</p>
      </div>

      <div className="flex items-center justify-between">
        <Link href={project.link} target="_blank" title="Go to github project">
          <GithubIcon />
        </Link>

        <div>
          <button onClick={onSelect} title="Expand project info">
            <BookMarked />
          </button>
        </div>
      </div>
    </div>
  );
};
