import React from "react";
import Link from "next/link";
import Image from "next/image";


export const TheHeader = () => {
  return (
    <header className="flex justify-between items-center gap-[25px] flex-wrap pr-[25px] pt-[10px] pl-[10px] lg:pr-[30px] lg:pt-[30px] lg:pl-[30px]">
      <Link href="https://omfil.ru" style={{ zIndex: "2" }}>
        <Image
          className="sm:w-[100px] md:w-[120px] lg:w-[150px] xl:w-[200px]"
          src={"/logo.svg"}
          alt={"Омская Филармония"}
          width={80}
          height={50}
        />
      </Link>
    </header>
  );
};
