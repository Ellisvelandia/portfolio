import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {};

export default function ContactMe({}: Props) {
  return (
    <div className="h-screen relative flex flex-col text-center md:flex-row  md:text-left max-w-7xl justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase mt-2 tracking-[20px] text-gray-500 text-2xl text-center">
        Contact
      </h3>

      <div className="flex flex-col space-y-6 mt-12 ">
        <h4 className="text-4xl font-semibold text-gray-500 text-center">
          I have got just what you neeed.
          <span className="decoration-[#fd0000]/50 underline hover:text-gray-200">
            {" "}
            Lest Talk.
          </span>
        </h4>

        <div className="space-y-6">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#fd0000] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+123456789</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#fd0000] h-7 w-7 animate-pulse" />
            <p className="text-2xl">ellis619@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#fd0000] h-7 w-7 animate-pulse" />
            <p className="text-2xl">123 Developer</p>
          </div>
        </div>

        <form className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input placeholder="Name" className="contactInput" type="text" />
            <input placeholder="Email" className="contactInput" type="email" />
          </div>

          <input placeholder="Subject" className="contactInput" type="text" />

          <textarea placeholder="Message" className="contactInput"></textarea>
          <button
            type="submit"
            className="bg-[#fd0000] py-5 px-10 rounded-md text-white font-bold text-lg hover:bg-red-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
