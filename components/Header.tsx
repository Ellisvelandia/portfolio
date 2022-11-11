import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-center justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.youtube.com/channel/UCxHNyqo_MNVQYsQMhwH94-A"
          fgColor="#fff"
          target="_blank"
          style={{ height: 35, width: 35 }}
          className="mx-2 hover:scale-150"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/ellisvelandia/"
          fgColor="#fff"
          target="_blank"
          style={{ height: 35, width: 35 }}
          className="mx-2 hover:scale-150"
        />
        <SocialIcon
          url="https://github.com/Ellisvelandia"
          fgColor="#fff"
          target="_blank"
          bgColor="#000"
          style={{ height: 35, width: 35 }}
          className="mx-2 hover:scale-150"
        />
      </motion.div>

      <Link href="#contact">
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <SocialIcon
            className="cursor-pointer"
            fgColor="#fd0000"
            bgColor="transparent"
            network="email"
            target="_blank"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
             Get In Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}
