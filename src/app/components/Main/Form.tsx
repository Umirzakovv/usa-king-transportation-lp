"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import Input from "../reusable/Input";
import TextArea from "../reusable/TextArea";
import Button from "../reusable/Button";
import { useTranslations } from "next-intl";
import { Toaster, toast } from "sonner";

interface FormData {
  [key: string]: string;
}

const Form = () => {
  const t = useTranslations("FormSection");
  const t2 = useTranslations("Toast");
  
  const toaster = () => toast.success(t2("formSubmit"));
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    number: "",
    address: "",
    experience: "",
    additional: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("https://sheetdb.io/api/v1/6i9xxvj37486y", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [formData],
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.log(err);
    } finally {
      toaster();
    }
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      className="border-orange w-max p-10 rounded-3xl bg-white shadow-lg max-md:p-5 max-sm:grid max-sm:w-[330px]"
    >
      <h4 className="text-3xl text-[#627A9E] max-lg:text-2xl max-md:text-base">
        {t("Form.title")}
      </h4>

      <div className="flex gap-10 max-md:gap-5 max-sm:grid">
        <Input
          type="text"
          name="name"
          label={t("Form.name")}
          value={formData.name}
          onChange={handleChange}
          required={true}
          error="1"
        />
        <Input
          type="email"
          name="email"
          label={t("Form.email")}
          value={formData.email}
          onChange={handleChange}
          required={true}
          error="1"
        />
      </div>
      <div className="flex gap-10 max-md:gap-5 max-sm:grid max-sm:gap-5">
        <Input
          type="number"
          name="number"
          label={t("Form.phoneNumber")}
          value={formData.number}
          onChange={handleChange}
          required={true}
          error="1"
        />
        <Input
          type="text"
          name="address"
          label={t("Form.address")}
          value={formData.address}
          onChange={handleChange}
          required={true}
          error="1"
        />
      </div>
      <Input
        type="text"
        name="experience"
        label={t("Form.experience")}
        value={formData.experience}
        onChange={handleChange}
        required={false}
        error="1"
      />
      <TextArea
        label={t("Form.additional")}
        name="additional"
        value={formData.additional}
        onChange={handleChange}
        required={false}
        error="lorem"
      />
      <Button type="submit" title={t("Form.button")} className="w-full" />
      <Toaster richColors />
    </form>
  );
};

export default Form;
