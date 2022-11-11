import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col mt-12 rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 mt-8 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://previews.dropbox.com/p/thumb/ABslRJx2KQqkLi2_lNNp-iPwwGsPfj72dC54oMZ3uBZtyVsSZRbNIsqwF-s8b5RpdbxNnywYdquANwxBmqFYNhwCvWuVM0WX8CPbpCc3QceYCmnSlzkh03NGvMSM669cYlloBvjnikmwD7cqwodLCSBBFUA9M4nEVCopw71zoqC6ikmZytWIRHywiLAIjPsojGwh6ZeBxZWoClafiPJ-OazE3J6lM49IqWihmfAFhbPONfmmo0WqHwa7NJclfUuAgYfhgReA2cKd9o2DCy953H_vaQPXh-4bubiSd1udr6t-BGIjB7H-i-f8e8yraF-Wn4yBJyKc3QWBjE6SSKtCyAYVz4PltKRAFdA8mUs2G8kpdssJnJIC7oeW4_U99r9r1bM/p.png"
        alt="larnu-log"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">LarnU</h4>
        <p className="flex space-x-2 my-2">First generation larnU</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://previews.dropbox.com/p/thumb/ABthAHfib6vtkRZvasviscCHDEtzflfigtFjjX-QySfBos2GwpIczYCQqS3hBn22tIHr1szy38dSQWhfVtszw0YIb5QSMXHzupDvoMfojLBRxnJSuNU_kULdsSk4LfCPzCoaUd2KeH_PgVPEpEfQ7agv5KCrGOEBcqgh7b17qudtyZ24xI4ur7v3Ut02SSbzLFPixS0zM1s_TuysZ-Nx2WoY47VWb3pOYSYlqxT5z6t_b0i1FQCuziVA-928dmcWiLC0_lBQR3gvqIftMC2PPk2oLD92AzdCODs9DEaMr-V8EQQU6C5icOzR9ZA3LKrp5AvkegJYgCsYxx1oPawfqidhcqcpxRgsIFpzOsNqg31ZgSlXoWPef5L2HBAZ0ELnECA/p.png"
            alt="logo"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
            alt="logo"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://previews.dropbox.com/p/thumb/ABuoKQOnNJ92ASQhdDbxqAdTNKd7jdL1w4bBDemaXBJ3YID_XwDsQSKEL7vyg4Gytnm_ELGDbP5YTO02G4XfJcDCE03ZA3eSgEtXcEQC0hUlJB0geMyP-QqyMTOZtgDUsdYjGxvtRg4IEi6fEBWRIh99aIoRMN9J488KEN7u-nlLhPHTf1kI6PrnBv7F7CAd6KR7dEFlJcV19gafigEBbFmTTsTQen6IeUeqsSYrt0YUMiSMbyYw3y9cpGNLaqydgxQA2HQNbWvxzwzQjH9_ZV_JDINrrwbp77uxKXVdtmmRKNY1AUZOYsXF77er_PkARzGnr4LOzT0ysHFW-3rp5hcs3FLeMuza7hzzXAWLksgrKVK7b6x27p0kyZKEV1lOfg0/p.png"
            alt="logo"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png"
            alt="logo"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2lVW98wrRyV83p2OWvX1WsPilGJio2DqznkIq-fcFA57yj6GmrtiorKOnZH_RDYlycGg&usqp=CAU"
            alt="logo"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            alt="logo"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF81GfHgCqjgn_uOxRDLyxpMcMMqxld6afpnrjZARUqK_NMTD8KLOdIknyYrKLhUnMLwY&usqp=CAU"
            alt="logo"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started June-2022...Ended Nov-2022...{" "}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            project development with javascript,Typescript,
            nodeJs,nextjs,mongodb, express & reactJs
          </li>
          <li>daily meetings with members of the first bootcamp generation</li>
          <li>perform unit tests on your projects</li>
          <li>live code for knowledge reinforcement</li>
        </ul>
      </div>
    </article>
  );
}
