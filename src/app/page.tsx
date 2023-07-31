import Home from "@/components/home/Home";
import Link from "next/link";

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
