"use client";

import React, { useState } from "react";
import Input from "../reusable/Input";
import TextArea from "../reusable/TextArea";
import Button from "../reusable/Button";

const Form = () => {
  const [textareaValue, setTextAreaValue] = useState<string>("");
  return (
    <form className="border-orange w-max p-10 rounded-3xl bg-white shadow-lg">
      <h4 className="text-3xl text-[#627A9E]">Select Form</h4>
      <div className="flex gap-10">
        <Input type="text" label="Name" required={true} error="1" />
        <Input type="email" label="Email" required={true} error="1" />
      </div>
      <div className="flex gap-10">
        <Input type="number" label="Phone Number" required={true} error="1" />
        <Input type="text" label="Address" required={true} error="1" />
      </div>
      <Input
        type="text"
        label="Years of Experience"
        required={false}
        error="1"
      />
      <TextArea label="Additional" required={false} error="lorem">
        {textareaValue}
      </TextArea>
      <Button type="submit" title="Submit" className="w-full" />
    </form>
  );
};

export default Form;
