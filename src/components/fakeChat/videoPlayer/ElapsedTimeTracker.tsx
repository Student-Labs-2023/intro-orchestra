type Props = {
  elapsedSec: number;
  totalSec: number | null;
};

export default function ElapsedTimeTracker({ ...props }: Props) {
  const elapsedMin = Math.floor(props.elapsedSec / 60);
  const elapsedSec = Math.floor(props.elapsedSec % 60);

  return (
    <div className="elapsed-time-tracker flex align-middle font-semibold gap-1 transition-opacity delay-500 mt-[-8px] p-0 ml-[1vw] flex-row">
      <div className="flex justify-end text-[1.3vw]">
        <div className="font-semibold text-white">{elapsedMin}:</div>
        <div className="font-semibold text-white">
          {elapsedSec.toString().padStart(2, "0")}
        </div>
        <p className="font-semibold text-white"> / </p>
        {props.totalSec && (
          <div className="flex flex-row">
            <div className="font-semibold text-white">
              {Math.floor(props.totalSec / 60)}:
            </div>
            <div className="font-semibold text-white">
              {Math.floor(props.totalSec % 60)
                .toString()
                .padStart(2, "0")}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
