import React from "react";
import ServiceCard from "./ServiceCard";
import { servicesData } from "@/app/data/servicesData";
import CustomTitle from "./CustomTitle";

const ServicesSection = () => {
  return (
    <section id="services">
      <CustomTitle title={"Services"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
