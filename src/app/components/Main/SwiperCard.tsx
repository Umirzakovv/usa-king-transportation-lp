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
    <div className=" bg-[url(/card-bg.svg)] h-[356px] w-[660px] rounded-2xl relative border max-sx:w-full">
      <div className="h-[200px] w-[200px] max-w-fit mx-auto mt-20">
        <Image src={item?.src} alt="payment" width={200} height={200} />
      </div>

      <div className="w-[488px] h-max block absolute left-1/2 top-[380px] transform -translate-x-1/2 -translate-y-1/2 transform -translate p-5 bg-[#dceefc] rounded-2xl max-sm:w-[300px]">
        <h4 className="font-bold text-3xl text-[#4E92E7] mb-2 max-sm:text-xl">
          {item?.title}
        </h4>
        <p className="font-md text-xl text-justify text-[#627A9E] max-sm:text-sm">
          {item?.text}
        </p>
      </div>
    </div>
  );
};

export default SwiperCard;
