import 'bootstrap/dist/css/bootstrap.min.css';
import './Forms.css'
import React from 'react';

export default function Forms(){
    return(
        <div className="min-h-screen flex flex-col items-center justify-start pt-16">
        <div className="text-center mt-8 mb-5">
          <h1 className="text-4xl font-extrabold text-black">Forms</h1>
        </div>
      
        <div className="text-center mt-20 space-y-4">
          <label className="text-3xl font-bold text-gray-700 hover:text-red-500 cursor-pointer transition-colors duration-300">
            Registration Form
          </label>
          <br />
          <label className="text-3xl font-bold text-gray-700 hover:text-red-500 cursor-pointer transition-colors duration-300">
            Installation Form
          </label>
          <br />
          <label className="text-3xl font-bold text-gray-700 hover:text-red-500 cursor-pointer transition-colors duration-300">
            Service Form
          </label>
          <br />
          <label className="text-3xl font-bold text-gray-700 hover:text-red-500 cursor-pointer transition-colors duration-300">
            Part Request Form
          </label>
        </div>
      </div>
    )
}