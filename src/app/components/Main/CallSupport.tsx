import { FC } from "react";
import CallSupportCard from "./CallSupportCard";
import { useTranslations } from "next-intl";

interface CallSupportProps {
  className?: string;
}

const CallSupport: FC<CallSupportProps> = () => {
  const t = useTranslations("HaveQuestions");
  const callSupportData = [
    {
      id: 1,
      title: t("CallSupport.person1"),
      email: "toddbrown.dispatch@gmail.com",
      number: "+1 (609) 532 1663",
      username: "",
      link: "https://t.me/+1%20(609)%20532%201663",
    },
    {
      id: 2,
      title: t("CallSupport.person2"),
      email: "",
      number: "+1 (321) 430 1708",
      username: "",
      link: "https://t.me/+1%20(321)%20430%201708",
    },
    {
      id: 3,
      title: t("CallSupport.person3"),
      email: "",
      number: "+1 (215) 352 5546",
      username: "",
      link: "https://t.me/+1%20(215)%20352%205546",
    },
    {
      id: 4,
      title: t("CallSupport.person4"),
      email: "safety.usakingtransportation@gmail.com",
      number: "+1 (321) 430 1708",
      username: "@dispatch42",
      link: "https://t.me/dispatch42",
    },
  ];
  return (
    <div className="border-orange p-10 grid gap-5 rounded-[50px] shadow-xl max-sm:p-6">
      <h2 className="text-[#303030] text-2xl font-semibold text-center">
        Call Support
      </h2>
      {callSupportData?.map((item) => {
        return (
          <CallSupportCard
            key={item?.id}
            title={item?.title}
            email={item?.email}
            number={item?.number}
            username={item?.username}
            link={item?.link}
          />
        );
      })}
    </div>
  );
};

export default CallSupport;
