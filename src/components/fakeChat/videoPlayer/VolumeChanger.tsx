type Props = {
  elapsedSec: number;
  totalSec: number | null;
};

export default function ElapsedTimeTracker({ ...props }: Props) {
  const elapsedMin = Math.floor(props.elapsedSec / 60);
  const elapsedSec = Math.floor(props.elapsedSec % 60);

  return (
    <div className="elapsed-time-tracker flex align-middle font-semibold gap-1 transition-opacity delay-500 mt-[-8px] p-0 self-end">
      <div className="flex justify-end">
        <div className="font-semibold text-white">{elapsedMin}:</div>
        <div className="font-semibold text-white">
          {elapsedSec.toString().padStart(2, "0")}
        </div>
      </div>
    </div>
  );
}
