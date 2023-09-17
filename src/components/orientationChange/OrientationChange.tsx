"use client";
import localFont from "next/font/local";
import { Children, PropsWithChildren, useEffect, useState } from "react";
import { deviceRecognizer } from "../fakeChat/lib";
import OrientationScreen from "./OrientationScreen";
import OrientationScreenPC from "./OrientationScreenPC";
import "./loader.css";

const geometriaMedium = localFont({
  src: "../../fonts/Geometria-Medium.woff",
});

const OrientationChange = ({ children }: PropsWithChildren) => {
  const [screenWidth, setScreenWidth] = useState<number>();
  const [screenHeight, setScreenHeight] = useState<number>();
  const [device, setDevice] = useState<"phone" | "desktop">("phone");

  const [isCorrectOrientation, setIsCorrectOrientation] = useState<boolean>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = (event: UIEvent) => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    setDevice((prev) => deviceRecognizer());
    console.log(device);
    console.log(deviceRecognizer());

    window.addEventListener("resize", handleResize, false);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setIsCorrectOrientation(window.innerWidth > window.innerHeight);
    setLoading(false);
  }, [screenWidth, screenHeight]);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
        <span
          className="loading text-[20px] mt-2 text-[#dd1181]"
          style={geometriaMedium.style}
        >
          Загрузка...
        </span>
      </div>
    );
  } else {
    return (
      <>
        {!isCorrectOrientation && device === "phone" && (
          <OrientationScreen></OrientationScreen>
        )}
        {!isCorrectOrientation && device === "desktop" && (
          <OrientationScreenPC></OrientationScreenPC>
        )}
        {Children.map(children, (child) => (
          <>{child}</>
        ))}
      </>
    );
  }
};

export default OrientationChange;
