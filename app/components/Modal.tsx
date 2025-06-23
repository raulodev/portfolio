import { Projects } from "@/interfaces";
import { PlusIcon } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

interface ModalProps {
  project: Projects;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ onClose, project }) => {
  return (
    <motion.div
      id="overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(event) => {
        const target = event.target as HTMLDivElement;
        if (target.id === "overlay") onClose();
      }}
      className="fixed backdrop-blur-lg top-0 right-0 bottom-0 left-0 flex justify-center items-center"
    >
      <div className="bg-white border border-gray-200 w-full self-end sm:self-center sm:w-3/4 lg:w-1/2  p-4 rounded-t sm:rounded  shadow-md space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold">{project.name}</p>
          <span className="rotate-45 cursor-pointer" onClick={onClose}>
            <PlusIcon />
          </span>
        </div>

        <div className="h-max text-lg max-h-screen overflow-y-auto pr-1">
          {project.description}
          <p className="font-bold mt-4">Techs:</p>
          <p>{project.tech.map((el) => `${el.name}, `)}</p>
        </div>
      </div>
    </motion.div>
  );
};
