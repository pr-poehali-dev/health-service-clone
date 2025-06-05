import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

interface AppointmentModalProps {
  children: React.ReactNode;
  doctorName?: string;
  specialty?: string;
}

const AppointmentModal = ({
  children,
  doctorName,
  specialty,
}: AppointmentModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 font-montserrat">
            Записаться на приём
          </DialogTitle>
          {doctorName && (
            <p className="text-blue-500 font-medium">
              К врачу: {doctorName} ({specialty})
            </p>
          )}
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label
                htmlFor="name"
                className="text-sm font-medium text-gray-700"
              >
                Ваше имя *
              </Label>
              <Input
                id="name"
                placeholder="Введите ваше имя"
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700"
              >
                Телефон *
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+7 (___) ___-__-__"
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="mt-1"
              />
            </div>

            {!specialty && (
              <div>
                <Label className="text-sm font-medium text-gray-700">
                  Специалист *
                </Label>
                <Select required>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Выберите специалиста" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cardiology">Кардиолог</SelectItem>
                    <SelectItem value="neurology">Невролог</SelectItem>
                    <SelectItem value="ophthalmology">Офтальмолог</SelectItem>
                    <SelectItem value="therapy">Терапевт</SelectItem>
                    <SelectItem value="pediatrics">Педиатр</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            <div>
              <Label className="text-sm font-medium text-gray-700">
                Предпочитаемая дата
              </Label>
              <Input
                type="date"
                className="mt-1"
                min={new Date().toISOString().split("T")[0]}
              />
            </div>

            <div>
              <Label className="text-sm font-medium text-gray-700">
                Предпочитаемое время
              </Label>
              <Select>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Выберите время" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="09:00">09:00</SelectItem>
                  <SelectItem value="10:00">10:00</SelectItem>
                  <SelectItem value="11:00">11:00</SelectItem>
                  <SelectItem value="14:00">14:00</SelectItem>
                  <SelectItem value="15:00">15:00</SelectItem>
                  <SelectItem value="16:00">16:00</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex space-x-3 pt-4">
            <Button
              type="submit"
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white"
            >
              <Icon name="Calendar" size={16} className="mr-2" />
              Записаться
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="px-6"
            >
              Отмена
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentModal;
