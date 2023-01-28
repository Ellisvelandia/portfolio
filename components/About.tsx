import React from "react";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  const [text] = useTypewriter({
    words: [
   `${pageInfo?.backgroundInformation}`,
    ],
    loop: true,
    delaySpeed: 8000,
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-16 uppercase mt-2 tracking-[20px] text-gray-500 text-2xl text-center">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        alt=""
        className="-mb-20 md:mb-0 mt-10 flex-shrink-0 w-44 h-44 rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[600px] xl:h-[600px] object-cover"
      />

      <div className="space-y-4 px-2 m-0 md:px-10 mt-2">
        <h4 className="text-4xl font-semibold text-center mb-2">
          Here is a <span>litle</span> background
        </h4>
        <span className="text-lg lg:text-2xl font-semibold my-2">{text}</span>
        <Cursor cursorColor="#fd0000" />
      </div>
    </motion.div>
  );
}

export default About;
