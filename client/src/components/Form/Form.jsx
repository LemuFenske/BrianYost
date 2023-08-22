'use client'
import React, { useState } from "react";

export default function Form ({plan, price}) {

  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    goal: "",
    injury: "",
    typicalDay: "",
  });
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const phoneNumber = '5493496464046';
  const message = `Hola! Quiero el plan ${plan}, que cuesta ${price}.\n\nDetalles del formulario:\nNombre: ${formData.firstName}\nApellido: ${formData.lastName}\nEdad: ${formData.age}\nObjetivo: ${formData.goal}\nLesión: ${formData.injury}\nDía habitual: ${formData.typicalDay}`;

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const redirectToWhatsApp = () => {
    window.location.href = whatsappUrl; // Redirigir en la misma ventana
  };


    return (
      <div className="mx-auto bg-gray-300 p-4 rounded-lg shadow-lg z-20 text-black">
        <div className="flex justify-center w-full px-auto" >
          <h2 className="sm:text-2xl text-xl font-semibold mb-4 mx-auto px-auto text-black">Complete el formulario</h2>
        </div>
      <div className="flex flex-col">
        <div className="mb-4">
          <div className="flex justify-around items-center">
          <p className="text-black" htmlFor="firstName">
            Nombre:
          </p>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-2/3 px-3 mr-0 ml-auto py-2 rounded border"
            placeholder="Nombre"
          />
          </div>
        </div>
        <div className="mb-4">
         <div className="flex justify-around items-center">
          <p className="text-black" htmlFor="firstName">
            Apellido:
          </p>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-2/3 px-3 mr-0 ml-auto py-2 rounded border"
            placeholder="Apellido"
          />
          
           </div>
        </div>
        <div className="mb-4">
        <div className="flex justify-around items-center">
          <p className="text-black" htmlFor="firstName">
            Edad:
          </p>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            className="w-2/3 px-3 mr-0 ml-auto py-2 rounded border"
            placeholder="Edad"
          />
          </div>
        </div>
        <div className="mb-4">
        <div className="flex justify-around items-center">
          <p className="text-black" htmlFor="firstName">
            Objetivo:
          </p>
          <input
            type="text"
            name="goal"
            value={formData.goal}
            onChange={handleInputChange}
            className="w-2/3 px-3 mr-0 ml-auto py-2 rounded border"
            placeholder="Objetivo"
          />
          </div>
        </div>
        <div className="mb-4">
        <div className="flex justify-around items-center">
          <p className="text-black" htmlFor="firstName">
            Lesión:
          </p>
          <input
            type="text"
            name="injury"
            value={formData.injury}
            onChange={handleInputChange}
            className="w-2/3 px-3 mr-0 ml-auto py-2 rounded border"
            placeholder="Lesion"
          />
          </div>
        </div>
        <div className="mb-4">
  <div className="flex justify-around items-center">
    <p className="text-black" htmlFor="typicalDay">
      Día habitual:
    </p>
    <textarea
      name="typicalDay"
      value={formData.typicalDay}
      onChange={handleInputChange}
      className="w-2/3 mr-0 ml-auto px-3 py-2 rounded border"
      placeholder="Contame tu rutina diaria"
      rows="1"
    />
  </div>
</div>
      </div>
      <div className="flex justify-center w-full px-auto" >
        <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mx-auto"
        onClick={redirectToWhatsApp}
      >
        Enviar
      </button>
      </div>
      
    </div>
  
    )
}