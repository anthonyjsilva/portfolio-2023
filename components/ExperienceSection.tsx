import React from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

const ExperienceSection = () => {
  return (
    <section id="experience">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <SectionHeader text="Experience 📝" />

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="text-center  ">
            <SectionHeader text="Resume" level={2} />
            <div className="flex flex-wrap flex-row basis-1/3 justify-center z-10">
              <Image
                src="/resume.png"
                alt=""
                width={1545}
                height={2000}
                className="rounded-xl shadow-2xl border-dark-gray dark:border-blue border-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
