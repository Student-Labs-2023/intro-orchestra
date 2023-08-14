import { Children, PropsWithChildren } from "react";
import { useIdleTimer } from "react-idle-timer";

type stateProps = "Active" | "Idle" | "Prompted";

interface IArtistViewIdleTimer {
  switchFlicker: () => void;
  backToChat: (t: string | undefined) => void;
}

export function ArtistViewIdleTimer({
  switchFlicker,
  backToChat,
  children,
}: PropsWithChildren<IArtistViewIdleTimer>) {
  const onIdle = () => {
    switchFlicker();
    backToChat("");
  };

  const onActive = () => {
    switchFlicker();
  };

  const onPrompt = () => {
    switchFlicker();
  };

  const onAction = () => {
    activate();
  };

  const { activate } = useIdleTimer({
    onIdle,
    onPrompt,
    onActive,
    onAction,
    timeout: 30000_000,
    promptBeforeIdle: 1_000,
    throttle: 500,
  });

  return Children.map(children, (child) => <>{child}</>);
}
