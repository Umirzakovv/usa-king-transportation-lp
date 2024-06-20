import React, { FC } from "react";

interface inputProps {
  required: boolean;
  label: string;
  type: string;
  error?: string;
}

const Input: FC<inputProps> = ({ type, label, required, error }) => {
  return (
    <div className="w-max max-sm:w-full">
      <label className="text-[#627A9E]">
        {label} {required && <span style={{ color: "red" }}>*</span>}
        <input
          type={type}
          required={required}
          className="border-orange block text-xl p-2 rounded-3xl focus:outline-main_orange max-md:text-base max-sm:w-full" 
        />
        <p className="text-rose-500 invisible">{error}</p>
      </label>
    </div>
  );
};

export default Input;
