import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
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
        alt="myimage"
        className="-mb-20 md:mb-0 mt-10 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a <span>litle</span> background
        </h4>
        <p className="text-base">{pageInfo?.backgroundInformation}</p>
        <a
          className="flex items-center w-full justify-center px-2 py-1 my-3 animate-bounce"
          href="https://drive.google.com/uc?export=download&id=1ZEZYm9WwkBPiY4387VJ35kE7YkFiavka"
          download="Ellis_Cv"
        >
          <img
            src="./pikachu.png"
            alt="pikachu"
            className="flex justify-center m-0  w-20 h-20"
          />
        </a>
      </div>
    </motion.div>
  );
}
