import { Projects } from "@/interfaces";
import { GithubIcon, LucideLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
  project: Projects;
  onSelect: () => void;
}

export const Card: React.FC<CardProps> = ({ project, onSelect }) => {
  return (
    <div
      className="relative p-4 rounded hover:shadow space-y-4 duration-200 border border-gray-200 cursor-pointer hover:shadow-gray-800"
      onClick={onSelect}
    >
      {project.image &&
        project.image.map(
          (image, index) =>
            image.isMain && (
              <div
                key={index}
                className={`h-32 p-5 overflow-hidden rounded-xl  ${image.bgContainerClass}`}
              >
                <Image
                  className="rounded-sm drop-shadow"
                  src={image.src}
                  alt={image.alt}
                  width="1280"
                  height="512"
                />
              </div>
            )
        )}
      <div>
        <div>
          <p className="text-xl font-bold">{project.name}</p>
          <p className="line-clamp-2">{project.description}</p>
        </div>

        <div className="flex items-center justify-start gap-2">
          {project.link.map((el, index) => (
            <Link
              key={index}
              href={el.link}
              target="_blank"
              title={`Go to ${el.description} project`}
            >
              <div className="rounded-full p-2 text-black hover:bg-gray-200">
                {el.icon == "GithubIcon" ? <GithubIcon /> : <LucideLink />}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
