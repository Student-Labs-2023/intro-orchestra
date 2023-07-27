import { Children, PropsWithChildren, useEffect, useState } from "react";

export default function OrientationChange({ children }: PropsWithChildren) {
  const [screenWidth, setScreenWidth] = useState<number>();
  const [screenHeight, setScreenHeight] = useState<number>();

  const [isCorrectOrientation, setIsCorrectOrientation] = useState<boolean>();

  useEffect(() => {
    setIsCorrectOrientation(window.screen.width > window.screen.height);
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

  if (isCorrectOrientation || isCorrectOrientation == undefined) {
    return Children.map(children, (child) => <>{child}</>);
  } else {
    return <span className="text-white">Change orientation</span>;
  }
}
