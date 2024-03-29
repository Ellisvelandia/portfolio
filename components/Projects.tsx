import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";

interface Props {
  projects: Project[];
} 

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row w-full justify-evenly mx-auto items-center z-0 "
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl text-center">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-thumb-red-600/80 scrollbar-track-red-900/20">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-full flex-shrink-0 snap-center flex flex-col space-y-2 items-center justify-center md:p-20 p-4 md:mt-4"
          >
            <a href={project?.linkToBuild} target="_blank">
              <motion.img
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={urlFor(project?.image).url()}
                alt="image"
                className="object-fill"
              />
            </a>

            <div className="space-y-2 px-0 md:px-4 md:max-w-6xl">
              <h4 className="text-2xl font-semibold text-center">
                <span className="underline decoration-[#fd00000]/50">
                  Project {i + 1} of {projects.length}  <br />
                </span>
                {project?.title}
              </h4>

              <div className="flex items-center space-x-2 justify-center w-full ">
                {project?.technologies.map((technology) => (
                  <img
                    className="w-10 flex flex-col mx-0"
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt=""
                  />
                ))}
              </div>

              <p className="md:text-xl text-md text-justify md:text-left">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#fd0000]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
