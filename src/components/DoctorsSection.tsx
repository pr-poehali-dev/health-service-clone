import React from "react";
import Icon from "@/components/ui/icon";
import DoctorModal from "./DoctorModal";
import AppointmentModal from "./AppointmentModal";

const DoctorsSection = () => {
  const doctors = [
    {
      name: "Иванова Елена Михайловна",
      specialty: "Кардиолог",
      experience: "15 лет опыта",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80",
      rating: 4.9,
    },
    {
      name: "Петров Андрей Сергеевич",
      specialty: "Невролог",
      experience: "12 лет опыта",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80",
      rating: 4.8,
    },
    {
      name: "Смирнова Ольга Викторовна",
      specialty: "Офтальмолог",
      experience: "10 лет опыта",
      image:
        "https://images.unsplash.com/photo-1594824475317-36a8af0b1ee0?auto=format&fit=crop&w=300&q=80",
      rating: 4.9,
    },
  ];

  return (
    <section id="doctors" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Наши врачи
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Опытные специалисты с многолетней практикой и высокой квалификацией
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <DoctorModal doctor={doctor}>
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="relative mb-6">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-2">
                    <Icon name="CheckCircle" size={20} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 font-montserrat">
                  {doctor.name}
                </h3>
                <p className="text-blue-500 font-medium mb-2">
                  {doctor.specialty}
                </p>
                <p className="text-gray-600 mb-4">{doctor.experience}</p>

                <div className="flex items-center justify-center space-x-1 mb-6">
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

                <AppointmentModal
                  doctorName={doctor.name}
                  specialty={doctor.specialty}
                >
                  <button className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2">
                    <Icon name="Calendar" size={16} />
                    <span>Записаться на приём</span>
                  </button>
                </AppointmentModal>
              </div>
            </DoctorModal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
