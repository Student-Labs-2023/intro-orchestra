import React from "react";
import Link from "next/link";
import Image from "next/image";

export const TheHeader = () => {
  return (
    <header className="flex justify-between items-center gap-[25px] flex-wrap mt-[10px] mx-[7px] sm:mt-[15px] sm:mx-[15px] md:mt-[20px] md:mx-[20px] lg:mt-[30px] lg:mx-[30px]">
      <Link href="https://omfil.ru" style={{ zIndex: "2" }}>
        <Image
          className="sm:w-[110px] md:w-[130px] lg:w-[170px] xl:w-[200px] 2xl:w-[250px]"
          src={"/logo.svg"}
          alt={"Омская Филармония"}
          width={80}
          height={50}
        />
      </Link>
    </header>
  );
};
