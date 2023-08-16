import Home from "@/components/home/Home";
import OrientationChange from "@/components/orientationChange/OrientationChange";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Link href={"/panorama"} className="absolute block w-full h-full z-[1]" />
      <Image
        className={
          "absolute w-screen h-screen object-contain top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]"
        }
        src={"/main-image.webp"}
        alt={"Картинка"}
        width={1920}
        height={1080}
        priority
      />
      <Home />
    </>
  );
}
