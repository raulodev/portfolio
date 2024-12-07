import React from "react";
import { motion } from "motion/react";
import { PlusIcon } from "lucide-react";
import { Projects } from "@/interfaces";

interface ModalProps {
  project: Projects;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ onClose, project }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed backdrop-blur top-0 right-0 bottom-0 left-0 bg-black bg-opacity-10 flex justify-center items-center"
    >
      <div className="bg-white w-full self-end sm:self-center sm:w-3/4 lg:w-1/2  p-4 rounded-t sm:rounded  shadow-md space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold">{project.name}</p>
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
