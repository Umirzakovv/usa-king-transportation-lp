import LinkGen from "../reusable/LinkGen";
import LanguageSwitcher from "../reusable/SwitchLang";

const Utilitybar = () => {
  return (
    <div className="flex items-center">
      <LanguageSwitcher />
      <LinkGen title="Apply" href="#join-us" />
    </div>
  );
};

export default Utilitybar;
