import Home from "@/components/home/Home";
import Link from "next/link";
import Image from "next/image";
export default function HomePage() {
  return (
    <div className="relative w-screen h-screen">
      <Link
        href={"/instruction"}
        style={{
          position: "absolute",
          display: "block",
          width: "100%",
          height: "100%",
          zIndex: "1",
        }}
      />
      <Image
        className={
          "h-[100%] absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]"
        }
        src={"/main-image.svg"}
        alt={"Картинка"}
        width={1920}
        height={1080}
      />
      <Home />
    </div>
  );
}
