"use client";

import React, { useState } from "react";
import Input from "../reusable/Input";
import TextArea from "../reusable/TextArea";
import Button from "../reusable/Button";
import { useTranslations } from "next-intl";

const Form = () => {
  const [textareaValue, setTextAreaValue] = useState<string>("");
  const t = useTranslations("FormSection");
  return (
    <form className="border-orange w-max p-10 rounded-3xl bg-white shadow-lg borderr max-md:p-5 max-sm:grid max-sm:w-[330px]">
      <h4 className="text-3xl text-[#627A9E]">Select Form</h4>
      <div className="flex gap-10 max-md:gap-5 max-sm:grid">
        <Input type="text" label={t("Form.name")} required={true} error="1" />
        <Input type="email" label={t("Form.email")} required={true} error="1" />
      </div>
      <div className="flex gap-10 max-md:gap-5 max-sm:grid max-sm:gap-5">
        <Input
          type="number"
          label={t("Form.phoneNumber")}
          required={true}
          error="1"
        />
        <Input
          type="text"
          label={t("Form.address")}
          required={true}
          error="1"
        />
      </div>
      <Input
        type="text"
        label={t("Form.experience")}
        required={false}
        error="1"
      />
      <TextArea label={t("Form.additional")} required={false} error="lorem" />
      <Button type="submit" title={t("Form.button")} className="w-full" />
    </form>
  );
};

export default Form;
