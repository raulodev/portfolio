import React from "react";
import { motion } from "motion/react";
import { PlusIcon } from "lucide-react";
import { Projects } from "@/interfaces";
import { Chip } from "@/components/Chip";

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
      className="fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-10 flex justify-center items-center"
    >
      <motion.div
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        exit={{ y: 200 }}
        className="bg-white w-full self-end sm:self-center sm:w-3/4 lg:w-1/2  p-4 rounded-t sm:rounded  shadow-md space-y-2"
      >
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold">{project.name}</p>
          <span className="rotate-45 cursor-pointer" onClick={onClose}>
            <PlusIcon />
          </span>
        </div>

        <div className="h-max max-h-96 sm:max-h-56 overflow-y-auto pr-1">
          {project.description}
        </div>
        <div>
          {project.tech.map((el, index) => (
            <Chip key={index} name={el.name} color={el.color} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
