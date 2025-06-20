import Link from "next/link";
import React from "react";
import { GithubIcon, LucideLink } from "lucide-react";
import { Projects } from "@/interfaces";

interface CardProps {
  project: Projects;
  onSelect: () => void;
}

export const Card: React.FC<CardProps> = ({ project, onSelect }) => {
  return (
    <div
      className="p-4 rounded hover:shadow-xl space-y-4 duration-200 border border-gray-200 cursor-pointer"
      onClick={onSelect}
    >
      <div>
        <p className="text-xl font-bold">{project.name}</p>
        <p className="line-clamp-3">{project.description}</p>
      </div>

      <div className="flex items-center justify-start gap-2">
        {project.link.map((el, index) => (
          <Link
            key={index}
            href={el.link}
            target="_blank"
            title={`Go to ${el.description} project`}
          >
            <div className="bg-black rounded-full p-1 text-white">
              {el.icon == "GithubIcon" ? <GithubIcon /> : <LucideLink />}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
