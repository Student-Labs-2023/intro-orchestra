import Home from "@/components/home/Home";
import OrientationChange from "@/components/orientationChange/OrientationChange";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export default function HomePage() {
  return (
    <OrientationChange>
      <main className="main">
        <Link href={"/panorama"} className="absolute block w-full h-full z-[1]" />
        <Image
          className={
            "absolute w-[100dvw] h-[100dvh] object-contain translate-x-[-50%] translate-y-[-50%] top-2/4 left-2/4"
          }
          src={"/main-image.webp"}
          alt={"Картинка"}
          width={1920}
          height={1080}
          priority
        />
        <Home />
      </main>
    </OrientationChange>
  );
}
