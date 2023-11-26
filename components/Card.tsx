import React from "react";

interface CardProps {
  title: string;
  value: number | boolean | undefined;
}

const Card: React.FC<CardProps> = ({ title, value }) => {
  return (
    <div className="flex flex-col sm:flex-row container mx-auto gap-4 items-center justify-center">
      <div className="bg-white shadow-md rounded-lg w-full sm:w-48 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 overflow-hidden flex items-center justify-center">
        <div className="p-4 text-center">
          <h2 className="lg:text-2xl text-sm md:text-lg font-semibold text-gray-800 mb-4 overflow-ellipsis whitespace-nowrap">
            {title}
          </h2>
          <div className="lg:text-3xl text-xl font-bold text-blue-500 overflow-ellipsis whitespace-nowrap">
            {value !== undefined
              ? typeof value === "boolean"
                ? value
                  ? "On"
                  : "Off"
                : value
              : "N/A"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
