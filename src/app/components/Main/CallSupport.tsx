import { FC } from "react";
import CallSupportCard from "./CallSupportCard";
import { callSupportData } from "@/app/data/call-support";

interface CallSupportProps {
  className?: string;
}

const CallSupport: FC<CallSupportProps> = () => {
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
