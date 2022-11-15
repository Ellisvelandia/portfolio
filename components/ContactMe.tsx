import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:eyis619@gmail.com?subject=${formData.subject}&body=Hi, my name is
    ${formData.name} . ${formData.message} (${formData.email})`;
  };

  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row
    max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-16 md:top-20 2xl:top-24 uppercase mt-2 tracking-[20px] text-gray-500 text-2xl text-center">
        Contact
      </h3>

      <div className="flex flex-col mt-12 space-y-6">
        <h4 className="text-2xl font-semibold text-center text-gray-500">
          I have got just what you neeed.{" "}
          <span className="decoration-[#fd0000]/50 underline hover:text-gray-200">
            Lest Talk.
          </span>
        </h4>

        <div className="space-y-4 w-full">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="text-[#fd0000] h-7 w-7 animate-pulse" />
            <p className="text-lg">+573125668800</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="text-[#fd0000] h-7 w-7 animate-pulse" />
            <p className="text-lg">eyis619@gmail.com</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="text-[#fd0000] h-7 w-7 animate-pulse" />
            <p className="text-lg">Carmen de Apicala - Colombia</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2  w-[330px] 2xl:w-[750px] md:w-[700px] mx-auto"
        >
          <div className="flex space-x-3">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#Fd0000] py-5 px-10 rounded-md text-white font-bold
                        text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
