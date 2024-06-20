import React, { FC, ReactNode } from "react";

interface TextAreaProps {
  required: boolean;
  label: string;
  placeholder?: string;
  error?: string;
  value?: string | number;
}

const TextArea: FC<TextAreaProps> = ({ label, required, error }) => {
  return (
    <div>
      <label className="text-[#627A9E]">
        {label} {required && <span style={{ color: "red" }}>*</span>}
        <textarea
          rows={4}
          cols={40}
          required={required}
          className="border-orange block text-xl p-2 rounded-3xl w-full focus:outline-main_orange placeholder-[#627a9e71] max-md:text-base max-sm:  "
        />
        <p className="text-rose-500 invisible">{error}</p>
      </label>
    </div>
  );
};

export default TextArea;
