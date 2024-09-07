import React from "react";

type IServiceProps = {
  title: string;
  description: string;
};

const ServiceCard = ({ title, description }: IServiceProps) => {
  return (
    <div className="block max-w-sm p-6  border border-gray-200 bg-neutral-950 rounded-lg shadow bg-">
      <h5 className="mb-6 text-2xl tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
