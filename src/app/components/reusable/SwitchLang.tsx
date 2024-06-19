"use client";

import { FC } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/navigation";

const options = [
  {
    label: "Eng",
    value: "en",
  },
  {
    label: "Esp",
    value: "es",
  },
  {
    label: "Рус",
    value: "ru",
  },
];

const LanguageSwitcher: FC = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathName = usePathname();

  const handleChange = (e: any) => {
    router.push(pathName, { locale: e.target.value });
  };

  return (
    <div className="mr-5 max-md:mr-1">
      <select
        className="border-none cursor-pointer outline-[#0095ff] bg-transparent text-lg text-main_brown max-lg:text-sm"
        aria-label="select-language"
        value={locale}
        onChange={handleChange}
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
