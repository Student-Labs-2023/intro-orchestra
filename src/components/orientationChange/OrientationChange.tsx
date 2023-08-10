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
    setIsCorrectOrientation(window.screen.width > window.screen.height);
    setLoading(false);
  }, [screenWidth, screenHeight]);

  useEffect(() => {
    const handleResize = (event: UIEvent) => {
      setScreenWidth(window.screen.width);
      setScreenHeight(window.screen.height);
    };

    window.addEventListener("resize", handleResize, false);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    if (isCorrectOrientation) {
      return Children.map(children, (child) => <>{child}</>);
    } else {
      return <OrientationScreen></OrientationScreen>;
    }
  }
};

export default OrientationChange;
