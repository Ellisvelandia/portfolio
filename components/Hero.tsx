import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi",
      "The Name's Ellis Velandia",
      "Man Loves Anime And Cats",
      "But Loves To Code More🥯",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-40 w-40 mx-auto object-cover hover:scale-150"
        src="https://previews.dropbox.com/p/thumb/ABslME36SOhCU3522V0N3gRPKP4es8KCcnsgijpDqaKzLF04Ox-lnBsJggkV6bJTYHcfS5w8UvSSozz5x7pIiaOw2GKKVOBJMDlIg4sTAgT1HL2oUV3HMS4LpEznfNTD6bybBIDz7_XQFCJYUr5HEy6Lezr7VoZymcEjNkUW61XvKADx5Cja-UYR-AU6mp9XXk-b6wZO_V_97zXU7EMoSKO4myMNecHhh0KIw5fXWSw07I-0BsnkXUH0B99bBGVBIPcAF9MvpR_RCcWDNi5drfvdJSTVhYlkWzMcft0gHTXkMDx7k4P9_yiaLmfeh52IZU9ig7nXPQUwL7JznyuOmkytFk1Kf0ZSTBn1TISCoWtXDHBABV0Z_HSTiJQpfNBkOMo/p.png"
        alt="image"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#fd0000" />
        </h1>
        <div className="pt-5">
          <button className="heroButton">About</button>
          <button className="heroButton">Experience</button>
          <button className="heroButton">Skills</button>
          <button className="heroButton">Projects</button>
        </div>
      </div>
    </div>
  );
}
