import Image from "next/image";
import { FC } from "react";

export type ItemType = {
  src: string;
  title: string;
  text: string;
};

type SwiperCardType = {
  item: ItemType;
};

const SwiperCard: FC<SwiperCardType> = ({ item }) => {
  return (
    <div className=" bg-[url(/card-bg.svg)] h-[356px] w-[660px] rounded-2xl relative border">
      <div className="h-[200px] w-[200px] max-w-fit mx-auto mt-20">
        <Image src={item?.src} alt="payment" width={200} height={200} />
      </div>

      <div className="w-[488px] h-max block absolute top-[300px] left-[80px] p-5 bg-[#dceefc] rounded-2xl">
        <h4 className="font-bold text-3xl text-[#4E92E7] mb-2">
          {item?.title}
        </h4>
        <p className="font-md text-xl text-justify text-[#627A9E]">
          {item?.text}
        </p>
      </div>
    </div>
  );
};

export default SwiperCard;
