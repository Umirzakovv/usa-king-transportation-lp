import React, { ChangeEvent, FC } from "react";

interface inputProps {
  required: boolean;
  label: string;
  name: string;
  type: string;
  value: string;
  error?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<inputProps> = ({
  type,
  label,
  name,
  required,
  error,
  value,
  onChange,
}) => {
  return (
    <div className="w-max max-sm:w-full">
      <label className="text-[#627A9E] max-md:text-sm max-sm:text-xs">
        {label} {required && <span style={{ color: "red" }}>*</span>}
        <input
          type={type}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          className="border-orange block text-xl p-2 rounded-3xl focus:outline-main_orange max-md:text-base max-sm:w-full"
        />
        <p className="text-rose-500 invisible">{error}</p>
      </label>
    </div>
  );
};

export default Input;
