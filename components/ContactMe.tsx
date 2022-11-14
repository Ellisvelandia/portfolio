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
    window.location.href = `mailto:eyis619@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="relative flex flex-col items-center h-screen mx-auto text-center md:flex-row md:text-left max-w-7xl justify-evenly">
      <h3 className="absolute top-20 uppercase mt-2 tracking-[20px] text-gray-500 text-2xl text-center">
        Contact
      </h3>

      <div className="flex flex-col mt-12 space-y-6 ">
        <h4 className="text-4xl font-semibold text-center text-gray-500">
          I have got just what you neeed.{" "}
          <span className="decoration-[#fd0000]/50 underline hover:text-gray-200">
            Lest Talk.
          </span>
        </h4>

        <div className="space-y-6">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="text-[#fd0000] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+573125668800</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="text-[#fd0000] h-7 w-7 animate-pulse" />
            <p className="text-2xl">eyis619@gmail.com</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="text-[#fd0000] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Ellis velandia Developer</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col mx-auto space-y-2 w-fit"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              type="email"
              id="email"
              {...register("email")}
              placeholder="Email"
              className="contactInput"
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
            className="bg-[#fd0000] py-5 px-10 rounded-md text-white font-bold text-lg hover:bg-red-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
