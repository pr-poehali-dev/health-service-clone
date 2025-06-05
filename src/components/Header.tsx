import React from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <Icon name="Heart" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 font-montserrat">
                ГП №3
              </h1>
              <p className="text-sm text-gray-600">Городская поликлиника</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              Услуги
            </a>
            <a
              href="#doctors"
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              Врачи
            </a>
            <a
              href="#contacts"
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              Контакты
            </a>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2">
              <Icon name="Calendar" size={16} />
              <span>Записаться</span>
            </button>
          </nav>

          <button className="md:hidden">
            <Icon name="Menu" size={24} className="text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
