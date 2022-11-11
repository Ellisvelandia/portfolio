import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase mt-2 tracking-[20px] text-gray-500 text-2xl text-center">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://previews.dropbox.com/p/thumb/ABvnfZy868Bl3xCKihVCsq4CQM5LeOS2fFG7q6fe54tpnd0lwSe1AtBRUbiyzEtt-b5H5sUPOQpoY0HC8Gq5xyGSH1GzzZTJZqbsYPkGpFGUfrxZvQh_zjS09qmfIRt7JRv7iaz3yklRAw6NlU0pmSmBJUkLHIx1cd2VnTpzEgwXqdYS1LB_kWZf9gW4oUaNPgPh5e5DvvYBkJoJ5Lg6RfEDfyv14mUMCNvc3QAlosTJiGl0kTjValU6B-qiAZ_no9RO0HPAjVkGEI838Q7O-eDgaa0m7CatsfySpMZGayFdjWTuRtjfBEMcBWybngqwFnq7vi5zDRu4CPruUP6W7-1iIROdfZxzomK5db65Eto8P-ltyG_DX8uZ0NQ7DfaKddA/p.jpeg"
        alt="myimage"
        className="-mb-20 md:mb-0 mt-10 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a <span>litle</span> background
        </h4>
        <p className="text-base">
          I am a passionate developer🐱‍💻 from Colombia, faithful believer that
          patience and dedication help you to be a better professional.
          Currently I have finished a bootcamp, polishing my skills as a
          developer, I consider myself self-taught and with skills to learn day
          by day, I have no experience but I have worked on several projects in
          my Github in recent months, I consider myself a full stack developer
          🥯.
        </p>
      </div>
    </motion.div>
  );
}
