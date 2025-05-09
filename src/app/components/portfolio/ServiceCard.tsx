import React from "react";

type IServiceProps = {
  title: string;
  description: string;
};

const ServiceCard = ({ title, description }: IServiceProps) => {
  return (
    <div className="block md:max-w-sm p-6 max-w-full section-dark rounded-lg shadow bg-">
      <h3 className="mb-6 text-2xl tracking-tight  text-white">{title}</h3>
      <p className="font-normal  text-slate-300">{description}</p>
    </div>
  );
};

export default ServiceCard;
