import Home from "@/components/home/Home";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <Link
        href={"/instruction"}
        className="absolute block w-full h-full z-[1]"
      />
      <Image
        className={
          "absolute max-w-none h-screen top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]"
        }
        src={"/main-image.svg"}
        alt={"Картинка"}
        width={1610}
        height={1590}
      />
      <Home />
    </>
  );
};

