import React, { FC } from "react";
import {
  BsCheckCircle,
  BsCircle,
  BsCircleFill,
  BsCircleHalf,
} from "react-icons/bs";

type StatusType = "current" | "ongoing" | "paused" | "done";

interface StatusData {
  icon: React.ReactElement;
  color: string;
  text: string;
}

const statusMap: Record<StatusType, StatusData> = {
  current: {
    icon: <BsCircleHalf />,
    color: "text-yellow-500",
    text: "Currently in development",
  },
  ongoing: {
    icon: <BsCircleFill />,
    color: "text-white-500",
    text: "Ongoing project",
  },
  paused: {
    icon: <BsCircle />,
    color: "text-orange-500",
    text: "Development paused",
  },
  done: {
    icon: <BsCheckCircle />,
    color: "text-green-500",
    text: "Completed",
  },
};

interface StatusBadgeProps {
  className?: string;
  status?: StatusType;
}

const StatusBadge: FC<StatusBadgeProps> = ({ className, status = "done" }) => {
  const { icon: Icon, color, text } = statusMap[status];

  const containerCls = `
    ${className}
    ${color}
    flex items-center justify-center
    border-dark-gray dark:border-dark-gray shadow py-2 px-4 m-1 rounded font-medium
  `;
  const iconCls = `mr-4`;

  return (
    <p className={containerCls}>
      <span className={iconCls}>{Icon}</span>
      {text}
    </p>
  );
};

export default StatusBadge;
