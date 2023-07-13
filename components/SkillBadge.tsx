import React from "react";
import { skillData } from "./skillData";

interface SkillBadgeProps {
  className?: string;
  value: string;
  size?: "big" | "regular" | "small";
}

const SkillBadge: React.FC<SkillBadgeProps> = ({
  className,
  value,
  size = "regular",
}) => {
  const thisIconData = skillData.find((obj) => obj.value === value) || {
    value: "",
    label: value.charAt(0).toUpperCase() + value.slice(1),
    color: "",
    component: undefined,
  };
  const Icon: any = thisIconData.component;

  const fontSize = {
    big: "text-2xl",
    regular: "text-base",
    small: "text-sm",
  }[size];

  const fontColor = {
    big: "text-gray-900 dark:text-light-gray",
    regular: "text-gray-900 dark:text-light-gray",
    small: "text-gray-900 dark:text-light-gray",
  }[size];

  const border = {
    big: "border-4",
    regular: "border-2",
    small: "border-0",
  }[size];

  const iconSize = {
    big: 40,
    regular: 30,
    small: 22,
  }[size];

  const containerCls = `
    ${className}
    ${fontSize} 
    ${fontColor}
    border-dark-gray dark:border-dark-gray ${border} shadow py-2 px-4 m-1 rounded font-medium
  `;
  const iconCls = `mx-auto pb-1`;

  return (
    <p className={containerCls}>
      {thisIconData.component && (
        <Icon
          style={{ color: size === "small" ? thisIconData.color : "inherit" }}
          className={iconCls}
          size={iconSize}
        />
      )}
      {thisIconData.label}
    </p>
  );
};

export default SkillBadge;
