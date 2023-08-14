import { ArtistViewIdleTimer } from "../../lib";
import { Button } from "../../msgComponents";

interface IChatBlurModal {
  activeBlur: boolean;
  changeView: (t: string | undefined) => void;
  activateFlicker: () => void;
  activeFlicker: boolean;
}

export function ChatBlurModal({
  activeBlur,
  changeView,
  activateFlicker,
  activeFlicker,
}: IChatBlurModal) {
  if (activeBlur) {
    return (
      <ArtistViewIdleTimer
        backToChat={changeView}
        switchFlicker={activateFlicker}
      >
        <div className="h-full w-[39.65%] absolute right-0 z-20 bg-[#424242] opacity-[15%] rounded-tl-[16px] 2xl:rounded-tl-[32px] rounded-bl-[16px] 2xl:rounded-bl-[32px]"></div>

        <div className="flex flex-col items-center justify-center h-full w-[39.65%] absolute right-0 z-30 backdrop-blur-[6px] rounded-tl-[16px] 2xl:rounded-tl-[32px] rounded-bl-[16px] 2xl:rounded-bl-[32px]">
          <Button
            onClick={changeView}
            variant="pink"
            activeFlicker={activeFlicker}
          >
            вернуться к диалогу
          </Button>
        </div>
      </ArtistViewIdleTimer>
    );
  }
  return <></>;
}
