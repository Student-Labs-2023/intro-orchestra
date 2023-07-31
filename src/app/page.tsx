import Home from "@/components/home/Home";
import Link from "next/link";
import Image from "next/image";
export default function HomePage() {
  return (
    <>
      <Link 
      href={'/panorama'} 
      style={
        { position: "absolute", display: "block", width: "100%", height: "100%", zIndex: '1' }
      }/>
      <Home />
    </>
  );
}
