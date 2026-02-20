import { formatTime } from "@/src/functions/formatTime";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

interface Props {
  elapsedTime: number;
  setElapsedTime: Dispatch<SetStateAction<number>>;
  puzzleActive: boolean;
}

export const Header = ({
  elapsedTime,
  setElapsedTime,
  puzzleActive,
}: Props) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (puzzleActive) {
      timerRef.current = setInterval(() => {
        setElapsedTime((prev) => prev + 1);
      }, 1000);

      return () => {
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }
      };
    }
  }, [elapsedTime, setElapsedTime, puzzleActive]);

  return (
    <div className="h-52 flex flex-col gap-2 justify-center items-center text-white">
      <span className="text-3xl">Experte 7</span>
      <span className="text-2xl">{formatTime(elapsedTime)}</span>
    </div>
  );
};
