import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import AppointmentModal from "./AppointmentModal";

interface Service {
  icon: string;
  title: string;
  description: string;
  color: string;
  details?: string[];
  procedures?: string[];
  price?: string;
}

interface ServiceModalProps {
  children: React.ReactNode;
  service: Service;
}

const ServiceModal = ({ children, service }: ServiceModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center space-x-4">
            <div
              className={`w-16 h-16 ${service.color} bg-opacity-10 rounded-2xl flex items-center justify-center`}
            >
              <Icon
                name={service.icon as any}
                size={32}
                className={service.color}
              />
            </div>
            <div>
              <DialogTitle className="text-2xl font-bold text-gray-900 font-montserrat">
                {service.title}
              </DialogTitle>
              <p className="text-gray-600 mt-1">{service.description}</p>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-3">
              Подробное описание
            </h4>
            <p className="text-gray-600 leading-relaxed">
              {service.details?.join(" ") ||
                `Отделение ${service.title.toLowerCase()} оказывает полный спектр медицинских услуг с использованием современного оборудования и передовых методик лечения. Наши специалисты имеют высокую квалификацию и большой опыт работы.`}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-3">
              Виды процедур и услуг
            </h4>
            <ul className="space-y-2">
              {(
                service.procedures || [
                  "Первичная консультация специалиста",
                  "Диагностические исследования",
                  "Лабораторные анализы",
                  "Профилактические осмотры",
                  "Лечебные процедуры",
                  "Контрольные обследования",
                ]
              ).map((procedure, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-500 mt-0.5"
                  />
                  <span className="text-gray-600">{procedure}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Info" size={16} className="text-blue-500" />
              <h4 className="font-medium text-gray-900">Важная информация</h4>
            </div>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Приём ведется по предварительной записи</li>
              <li>• При себе иметь паспорт и полис ОМС</li>
              <li>• Результаты предыдущих обследований (при наличии)</li>
              <li>• Прибытие за 15 минут до назначенного времени</li>
            </ul>
          </div>

          <div className="flex space-x-3 pt-4 border-t">
            <AppointmentModal specialty={service.title}>
              <Button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white">
                <Icon name="Calendar" size={16} className="mr-2" />
                Записаться на приём
              </Button>
            </AppointmentModal>
            <Button
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="px-6"
            >
              Закрыть
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;
