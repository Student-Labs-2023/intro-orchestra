"use client";
import { useRouter } from "next/navigation";
import { Children, PropsWithChildren, useEffect, useState } from "react";
import { useIdleTimer } from "react-idle-timer";
import { deviceRecognizer } from "../fakeChat/lib";
import AlertWindow from "./alertWindow/AlertWindow";

type stateProps = "Active" | "Idle";

export default function ActivityCheck({ children }: PropsWithChildren) {
  const [device, setDevice] = useState<"phone" | "desktop">();
  const { push } = useRouter();
  const [state, setState] = useState<stateProps>("Active");

  const [remaining, setRemaining] = useState<number>(0);

  useEffect(() => {
    setDevice(deviceRecognizer());
  }, []);

  const onIdle = () => {
    setState("Idle");
  };

  const onActive = () => {
    setState("Active");
  };

  const { getRemainingTime } = useIdleTimer({
    onIdle,
    onActive,
    timeout: 90_000,
    throttle: 500,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(Math.ceil(getRemainingTime() / 1000));
    }, 500);

    return () => {
      clearInterval(interval);
    };
  });

  useEffect(() => {
    if (state === "Idle") {
      push("/");
    }
  }, [state, push]);

  return (
    <>
      {Children.map(children, (child) => (
        <>{child}</>
      ))}
      {state === "Active" &&
      device === "desktop" &&
      remaining <= 30 &&
      remaining > 0 ? (
        <AlertWindow remaining={remaining} />
      ) : (
        <></>
      )}
    </>
  );
}
