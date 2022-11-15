import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";
import pikachu from "../public/pikachu.png";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
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

      <div className="space-y-0 px-0 m-0 md:px-10">
        <h4 className="text-2xl font-semibold">
          Here is a <span>litle</span> background
        </h4>
        <p className="text-sm md:text-base">{pageInfo?.backgroundInformation}</p>
        <div>
          <a
            className="flex items-center w-full justify-center"
            href="https://drive.google.com/uc?export=download&id=1ZEZYm9WwkBPiY4387VJ35kE7YkFiavka"
            download="Ellis_Cv"
          >
            <Image
              src={pikachu}
              alt=""
              className="flex justify-center m-0  w-16 h-16 animate-bounce"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
