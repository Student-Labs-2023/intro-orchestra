import Home from "@/components/home/Home";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
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
      <Home />
    </>
  );
};

export default HomePage;

