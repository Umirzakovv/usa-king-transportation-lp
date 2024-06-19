import Image from "next/image";
import React, { Dispatch, FC, SetStateAction, useEffect, useRef } from "react";

type SidebarType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Sidebar: FC<SidebarType> = ({ isOpen, setIsOpen }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [setIsOpen]);

  return (
    <div
      ref={modalRef}
      className={`h-screen w-3/4 bg-white absolute top-0 right-0 p-5 rounded-l-md`}
    >
      <div onClick={() => setIsOpen(!isOpen)} className="w-max">
        <Image src="/x-mark.svg" alt="xmark icon" width={24} height={24} />
      </div>
    </div>
  );
};

export default Sidebar;
