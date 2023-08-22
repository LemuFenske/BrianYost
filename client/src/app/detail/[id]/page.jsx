'use client'
import React, { useState } from "react";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import imageUrl from "../../homebrian.jpeg";
import plans from "@/components/utils/arrayPlanes";
import Form from "@/components/Form/Form";
import Link from "next/link";

export default function Plans({params}) {
  const {id} = params

  const targetPlan = plans.find(plan => plan.id == id);

  return (
    <div className="text-white min-h-screen w-full flex">
      <Image src={imageUrl} className="object-cover h-full w-full fixed z-0" alt="asd" />
      <div className="fixed top-0 left-0 w-full min-h-screen bg-black opacity-80 z-10"></div>
  
      <div className="flex flex-col justify-center items-center z-20 w-full">
      <Link href="/plans" className="mt-20 mb-2 ml-[5%] mr-auto">
          <button className="bg-gray-950 px-3 py-2 rounded flex items-center">
            <FaArrowLeft className="text-white mr-2" />
          </button>
        </Link>
        <div className="bg-gray-950 p-4 rounded-md shadow-md flex justify-center w-[90%] sm:w-3/5 h-auto mb-4">
          <div className="flex flex-col sm:flex-row">
            <div className="sm:w-1/2 sm:px-4 flex flex-col justify-start items-center mb-4 sm:mb-0">
              <div className="flex justify-between sm:mt-5 items-center w-full mb-3 ">
                <h1 className="text-3xl font-bold ">{targetPlan.name}</h1>
                <h2 className="text-2xl font-semibold sm:mr-5">{targetPlan.price}</h2>
              </div>
              <p className="text-gray-400 mb-4">
              {'('}
                <span className="text-gray-300 font-bold">
                  {'Aclaración para residentes de Argentina:'}
                </span>{" "}
                {'Se puede pagar en pesos a valor del dólar blue en el momento de la transacción)'}
              </p>
              <p className="">{targetPlan.description}</p>
            </div>
            <div className="sm:w-1/2 flex">
              <Form plan={targetPlan.name} price={targetPlan.price} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

