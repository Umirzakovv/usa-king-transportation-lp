import { useTranslations } from "next-intl";
import LinkGen from "../reusable/LinkGen";
import LanguageSwitcher from "../reusable/SwitchLang";

const Utilitybar = () => {
  const t = useTranslations("Header");
  return (
    <div className="flex items-center">
      <LanguageSwitcher />
      <LinkGen title={t("button")} href="#join-us" />
    </div>
  );
};

export default Utilitybar;
