import React from "react";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <Icon name="Heart" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-montserrat">ГП №3</h3>
                <p className="text-gray-400 text-sm">Городская поликлиника</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Качественная медицинская помощь с заботой о каждом пациенте.
              Современные технологии и опытные врачи.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Услуги</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Кардиология
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Неврология
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Офтальмология
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Терапия
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Педиатрия
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Информация</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  О поликлинике
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Наши врачи
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Лицензии
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Новости
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Вакансии
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Контакты</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={16} />
                <span>+7 (473) 255-66-77</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={16} />
                <span>info@gp3.zdrav36.ru</span>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="MapPin" size={16} className="mt-1" />
                <span>г. Воронеж, ул. Медицинская, д. 15</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Городская поликлиника №3. Все права защищены.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
