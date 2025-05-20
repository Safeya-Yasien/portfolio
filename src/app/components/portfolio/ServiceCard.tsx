import React from "react";

type IServiceProps = {
  title: string;
  description: string;
};

const ServiceCard = ({ title, description }: IServiceProps) => {
  return (
    <div className="bg-gray-100 dark:bg-neutral-800/40 border border-gray-300 dark:border-neutral-700 p-4 rounded-md">
      <h3 className="mb-6 text-lg">{title}</h3>
      <p className="font-normal  ">{description}</p>
    </div>
  );
};

export default ServiceCard;
