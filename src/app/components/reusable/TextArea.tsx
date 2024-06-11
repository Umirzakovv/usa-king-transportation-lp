import React, { FC, ReactNode } from "react";

interface TextAreaProps {
  required: boolean;
  label: string;
  placeholder?: string;
  error?: string;
  children: ReactNode;
}

const TextArea: FC<TextAreaProps> = ({ label, required, error, children }) => {
  return (
    <div>
      <label className="text-[#627A9E]">
        {label} {required && <span style={{ color: "red" }}>*</span>}
        <textarea
          rows={4}
          cols={40}
          required={required}
          className="border-orange block text-xl p-2 rounded-3xl w-full focus:outline-main_orange placeholder-[#627a9e71]"
        >
          {children}
        </textarea>
        <p className="text-rose-500 invisible">{error}</p>
      </label>
    </div>
  );
};

export default TextArea;