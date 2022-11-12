import React, { ReactElement } from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

interface Props {}

export default function WorkExperience({}: Props): ReactElement {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase mt-8 tracking-[20px] text-gray-500 text-2xl text-center">
        Experience
      </h3>
      <div className="w-full flex flex-col p-10 snap-x snap-mandatory items-center justify-center">
        <ExperienceCard />
      </div>
    </motion.div>
  );
}

