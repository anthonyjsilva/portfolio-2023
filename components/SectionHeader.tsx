import React from "react";

type LevelType = 1 | 2 | 3;

interface SectionHeaderProps {
  text?: string;
  children?: React.ReactNode;
  level?: LevelType;
}

const SectionHeader = ({ text, children, level = 1 }: SectionHeaderProps) => {
  if (level === 1) {
    return (
      <h1 className="text-center uppercase tracking-widest font-bold text-4xl">
        {text || children}
        <hr className="w-64 h-1 mx-auto my-6 bg-blue border-0 rounded"></hr>
      </h1>
    );
  } else if (level === 2) {
    return (
      <h2 className="text-center uppercase text-3xl font-extralight italic tracking-widest mb-4">
        {text || children}
      </h2>
    );
  } else {
    return (
      <h3 className="text-center uppercase text-3xl font-extralight tracking-widest m-0">
        {text || children}
      </h3>
      //   "uppercase text-2xl font-extrabold mb-0"
    );
  }
};

export default SectionHeader;
