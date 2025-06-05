import React from "react";
import Icon from "@/components/ui/icon";
import AppointmentModal from "./AppointmentModal";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 font-montserrat leading-tight">
              Современная медицина для вашего здоровья
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Городская поликлиника №3 — это качественная медицинская помощь,
              опытные врачи и современное оборудование в центре города.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <AppointmentModal>
                <button className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2 text-lg font-medium">
                  <Icon name="Calendar" size={20} />
                  <span>Записаться на приём</span>
                </button>
              </AppointmentModal>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 transition-colors flex items-center justify-center space-x-2 text-lg font-medium">
                <Icon name="Phone" size={20} />
                <span>Связаться с нами</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">15+</div>
                <div className="text-gray-600">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">
                  50+
                </div>
                <div className="text-gray-600">специалистов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">
                  24/7
                </div>
                <div className="text-gray-600">поддержка</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80"
                alt="Медицинское оборудование"
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute -top-6 -right-6 bg-green-500 text-white p-4 rounded-full shadow-lg">
                <Icon name="Shield" size={32} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
