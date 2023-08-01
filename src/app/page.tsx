import Home from "@/components/home/Home";
import Link from "next/link";
import Image from "next/image";
export default function HomePage() {
  return (
    <>
      <Link
        href={"/panorama"}
        style={{
          position: "absolute",
          display: "block",
          width: "100%",
          height: "100%",
          zIndex: "1",
        }}
      />
      <Image
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        src={"/main-image.svg"}
        width={1610}
        height={1080}
        alt={"Картинка"}
      />
      <Home />
    </>
  );
};

export default HomePage;

