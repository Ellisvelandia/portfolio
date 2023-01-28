import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";

interface Props {
  skills: SkillType[];
}

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col mb-4 text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 h-screen justify-center xl:-space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-16 uppercase mt-4 tracking-[20px] text-gray-500 text-2xl text-center">
        Skills
      </h3>
      <h3 className="absolute top-32 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current profieciency
      </h3>
      <div className="grid grid-cols-6 gap-2 xl:grid-cols-6 md:px-0 px-6 h-1/2 mt-8">
        {skills?.slice(0, skills.length / 4).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}

        {skills?.slice(skills.length / 4, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
