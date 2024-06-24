import React, { ChangeEvent, FC, ReactNode } from "react";

interface TextAreaProps {
  required: boolean;
  label: string;
  name: string;
  placeholder?: string;
  error?: string;
  value?: string | number;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: FC<TextAreaProps> = ({
  label,
  name,
  required,
  error,
  value,
  onChange,
}) => {
  return (
    <div>
      <label className="text-[#627A9E]">
        {label} {required && <span style={{ color: "red" }}>*</span>}
        <textarea
          rows={4}
          cols={40}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          className="border-orange block text-xl p-2 rounded-3xl w-full focus:outline-main_orange placeholder-[#627a9e71] max-md:text-base max-sm:  "
        />
        <p className="text-rose-500 invisible">{error}</p>
      </label>
    </div>
  );
};

export default TextArea;
