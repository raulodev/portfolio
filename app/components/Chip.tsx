"use client";
import { useEffect, useState } from "react";
import React from "react";

interface ChipProps {
  name: string;
  color: "blue" | "red" | "green";
}

export const Chip: React.FC<ChipProps> = ({ name, color = "blue" }) => {
  const [bg, setBg] = useState("border-blue-500 shadow-blue-500");

  useEffect(() => {
    if (color === "blue") setBg("border-blue-500 shadow-blue-500");
    if (color === "green") setBg("border-green-600 shadow-green-500");
    if (color === "red") setBg("border-red-500 shadow-red-500");
  }, [color]);
  return (
    <div
      className={`${bg} w-max rounded-full px-2 py-0.5 shadow text-base inline-flex mr-1`}
    >
      {name}
    </div>
  );
};
