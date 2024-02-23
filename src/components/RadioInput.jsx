/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const RadioInput = ({ name, label, value, register, defaultChecked = false }) => {
  return (
    <div className="flex items-center gap-4 mb-4">
      <input
        id={name}
        type="radio"
        value={value}
        name={name}
        defaultChecked={defaultChecked}
        {...register(name)}
      />
      <label htmlFor={name} className="flex items-center gap-2 font-medium cursor-pointer">
        <span className="rounded-full w-5 h-5 border border-gray-300"></span>
        {label}
      </label>
    </div>
  );
};

export default RadioInput;
