import React from "react";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section id="contacts" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Контакты
          </h2>
          <p className="text-xl text-gray-600">
            Свяжитесь с нами для записи на приём или получения консультации
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="MapPin" size={24} className="text-blue-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Адрес</h3>
                <p className="text-gray-600">
                  г. Воронеж, ул. Медицинская, д. 15
                  <br />
                  1-й этаж, регистратура
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Phone" size={24} className="text-green-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Телефоны
                </h3>
                <p className="text-gray-600">
                  Регистратура:{" "}
                  <a
                    href="tel:+74732556677"
                    className="text-blue-500 hover:underline"
                  >
                    +7 (473) 255-66-77
                  </a>
                  <br />
                  Справочная:{" "}
                  <a
                    href="tel:+74732556688"
                    className="text-blue-500 hover:underline"
                  >
                    +7 (473) 255-66-88
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Clock" size={24} className="text-purple-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Режим работы
                </h3>
                <p className="text-gray-600">
                  Пн-Пт: 8:00 - 20:00
                  <br />
                  Сб: 9:00 - 15:00
                  <br />
                  Вс: выходной
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Mail" size={24} className="text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">
                  <a
                    href="mailto:info@gp3.zdrav36.ru"
                    className="text-blue-500 hover:underline"
                  >
                    info@gp3.zdrav36.ru
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-montserrat">
              Записаться на приём
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Введите ваше имя"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Специалист
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Выберите специалиста</option>
                  <option>Кардиолог</option>
                  <option>Невролог</option>
                  <option>Офтальмолог</option>
                  <option>Терапевт</option>
                  <option>Педиатр</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-4 px-6 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2 text-lg font-medium"
              >
                <Icon name="Send" size={20} />
                <span>Отправить заявку</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
