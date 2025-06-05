import React from "react";
import Icon from "@/components/ui/icon";
import ServiceModal from "./ServiceModal";

const ServicesSection = () => {
  const services = [
    {
      icon: "Heart",
      title: "Кардиология",
      description:
        "Диагностика и лечение заболеваний сердечно-сосудистой системы",
      color: "text-red-500",
    },
    {
      icon: "Brain",
      title: "Неврология",
      description: "Лечение заболеваний нервной системы и головного мозга",
      color: "text-purple-500",
    },
    {
      icon: "Eye",
      title: "Офтальмология",
      description: "Диагностика и лечение заболеваний глаз",
      color: "text-blue-500",
    },
    {
      icon: "Stethoscope",
      title: "Терапия",
      description: "Общее медицинское обслуживание и профилактика",
      color: "text-green-500",
    },
    {
      icon: "Baby",
      title: "Педиатрия",
      description: "Медицинская помощь детям от рождения до 18 лет",
      color: "text-pink-500",
    },
    {
      icon: "Pill",
      title: "Лабораторная диагностика",
      description: "Современные методы исследования и анализов",
      color: "text-orange-500",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Комплексное медицинское обслуживание с использованием современных
            технологий и индивидуальным подходом к каждому пациенту
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-16 h-16 ${service.color} bg-opacity-10 rounded-2xl flex items-center justify-center mb-6`}
              >
                <Icon
                  name={service.icon as any}
                  size={32}
                  className={service.color}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <ServiceModal service={service}>
                <button className="mt-6 text-blue-500 font-medium hover:text-blue-600 transition-colors flex items-center space-x-2">
                  <span>Подробнее</span>
                  <Icon name="ArrowRight" size={16} />
                </button>
              </ServiceModal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
