import React, { useRef } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import emailjs from "@emailjs/browser";

interface Props {}

const ContactMe: React.FC<Props> = () => {
  const refForm = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vnt5shd",
        "template_70sh3ld",
        refForm.current as HTMLFormElement,
        "dcbhBPTxvGDJezNv_"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          (refForm.current as HTMLFormElement).reset();
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <>
      <div
        className="h-screen flex flex-col text-center md:text-left md:flex-row
    max-w-full px-10 justify-evenly mx-auto lg:items-center md:items-end items-center md:mb-1 mb-12"
      >
        <div className="flex flex-col md:mt-20 mt-32 md:space-y-6 space-y-2 mb-10">
          <h3 className="uppercase mt-2 tracking-[20px] text-gray-500 text-2xl text-center">
            Contact
          </h3>

          <h4 className="max-w-7xl md:text-2xl text-base font-semibold text-center text-gray-500 pt-1">
            I am interested in opportunities as a developer and I would like to
            use my skills to get more experience. However, if you have other
            request or question, please do not hesitate to contact me using the
            form below.
          </h4>

          <div className="md:space-y-4 space-y-1 w-full">
            <div className="flex items-center justify-center space-x-5">
              <PhoneIcon className="text-[#fd0000] h-7 w-7 animate-pulse" />
              <p className="md:text-lg text-base">+573125668800</p>
            </div>
            <div className="flex items-center justify-center space-x-5">
              <EnvelopeIcon className="text-[#fd0000] h-7 w-7 animate-pulse" />
              <p className="md:text-lg text-base">eyis619@gmail.com</p>
            </div>
            <div className="flex items-center justify-center space-x-5">
              <MapPinIcon className="text-[#fd0000] h-7 w-7 animate-pulse" />
              <p className="md:text-lg text-base">
                Carmen de Apicala - Colombia
              </p>
            </div>
          </div>

          <form
            ref={refForm}
            onSubmit={sendEmail}
            className="flex flex-col space-y-2  w-[330px] 2xl:w-[750px] md:w-[700px] mx-auto my-8 object-fill"
          >
            <div className="flex space-x-3">
              <input placeholder="Name" className="contactInput" type="text" />
              <input
                placeholder="Email"
                className="contactInput"
                type="email"
              />
            </div>

            <input placeholder="Subject" className="contactInput" type="text" />
            <textarea placeholder="Message" className="contactInput" />
            <button
              type="submit"
              className="bg-[#Fd0000] py-5 px-10 md:mb-0 mb-8 rounded-md text-white font-bold text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
