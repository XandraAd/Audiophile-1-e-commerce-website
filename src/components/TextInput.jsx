/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const TextInput = ({ label, name, type, placeholder, register, errors }) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={label}
        className={`block text-sm font-medium text-gray-700 ${
          errors[label] ? 'text-red-500' : ''
        }`}
      >
        {name}
        {errors[label] && (
          <p className="mt-1 text-sm text-red-600">{errors[label].message}</p>
        )}
      </label>
      <input
        id={label}
        type={type}
        placeholder={placeholder}
        className={`border border-gray-300 rounded-md p-2 focus:ring-primary-500 focus:border-primary-500 ${
          errors[label] ? 'border-red-500' : ''
        }`}
        {...register(label)}
      />
    </div>
  );
};

export default TextInput;
