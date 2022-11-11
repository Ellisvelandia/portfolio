import React, { ReactElement } from "react";
import { motion } from "framer-motion";

interface Props {}

export default function Projects({}: Props): ReactElement {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-x-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-20 uppercase mt-8 tracking-[20px] text-gray-500 text-2xl text-center">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44">
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://previews.dropbox.com/p/thumb/ABtl6VnZPWits-NXiQC15ynyUtT5EebrjmBByIVWET7zPZJRLsRxGoV9kNjc-KjY7DvoPopbXlWS1hq77ZhjUhM_8VcVGWKd_cL0yjU_Ejgb9ld3WGfWSSFNeqV0uCnqPpjjzCmcdqc568a6NVAfiT_d7XGmb25OrR1M0GGKX5JbBpsWRYdwvqVVicWq0CUVjywn9ZFg87_Nk4L_yAOZG11hisx5LXFAcZM96y1MfQqOvfsuTWMVf0JeYNMma4knUAGTKmWKrEb8OIR04ze4HQvfRGYWGcwRAw79_5-PO8SWIUyDFYAwWyF8PbF67r6hqm09OZMSDl5gBYYuQKBFEGvSGp4Rz9RCNi0IwACaDIWjz4_X4_Ukgg5NLqSztnIpzs8/p.png"
              alt="real-state"
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#fd00000]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>
                Real state
              </h4>
              <p className="text-lg text-center md:text-left">
                a real estate application with chakra-ui, React and Next.js, has
                a beautiful home screen with several really amazing properties.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#fd0000]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
}
