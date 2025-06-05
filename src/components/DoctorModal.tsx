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

interface Doctor {
  name: string;
  specialty: string;
  experience: string;
  image: string;
  rating: number;
  education?: string;
  achievements?: string[];
  workingHours?: string;
}

interface DoctorModalProps {
  children: React.ReactNode;
  doctor: Doctor;
}

const DoctorModal = ({ children, doctor }: DoctorModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 font-montserrat">
            Информация о враче
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="flex items-start space-x-6">
            <div className="relative">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-32 h-32 rounded-xl object-cover shadow-lg"
              />
              <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-2">
                <Icon name="CheckCircle" size={20} />
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-montserrat">
                {doctor.name}
              </h3>
              <p className="text-blue-500 font-medium text-lg mb-2">
                {doctor.specialty}
              </p>
              <p className="text-gray-600 mb-4">{doctor.experience}</p>

              <div className="flex items-center space-x-1 mb-4">
                <Icon
                  name="Star"
                  size={16}
                  className="text-yellow-400 fill-current"
                />
                <span className="text-gray-900 font-medium">
                  {doctor.rating}
                </span>
                <span className="text-gray-500">/ 5.0</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Образование
              </h4>
              <p className="text-gray-600">
                {doctor.education ||
                  'Воронежский государственный медицинский университет им. Н.Н. Бурденко, специальность "Лечебное дело"'}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                График работы
              </h4>
              <p className="text-gray-600">
                {doctor.workingHours || "Пн-Пт: 8:00-16:00\nСб: по записи"}
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-3">
              Достижения и квалификация
            </h4>
            <ul className="space-y-2">
              {(
                doctor.achievements || [
                  "Высшая квалификационная категория",
                  "Стаж работы более 10 лет",
                  "Участие в научных конференциях",
                  "Постоянное повышение квалификации",
                ]
              ).map((achievement, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Icon
                    name="CheckCircle"
                    size={16}
                    className="text-green-500 mt-0.5"
                  />
                  <span className="text-gray-600">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex space-x-3 pt-4 border-t">
            <AppointmentModal
              doctorName={doctor.name}
              specialty={doctor.specialty}
            >
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

export default DoctorModal;
