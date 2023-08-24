"use client";
import localFont from "next/font/local";
import { Children, PropsWithChildren, useEffect, useState } from "react";
import OrientationScreen from "./OrientationScreen";
import "./loader.css";

const geometriaMedium = localFont({
  src: "../../fonts/Geometria-Medium.woff",
});

const OrientationChange = ({ children }: PropsWithChildren) => {
  const [screenWidth, setScreenWidth] = useState<number>();
  const [screenHeight, setScreenHeight] = useState<number>();

  const [isCorrectOrientation, setIsCorrectOrientation] = useState<boolean>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = (event: UIEvent) => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

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
        {!isCorrectOrientation && <OrientationScreen></OrientationScreen>}
        {Children.map(children, (child) => (
          <>{child}</>
        ))}
      </>
    );
  }
};

export default OrientationChange;
