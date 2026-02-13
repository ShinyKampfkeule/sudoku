import { NumberField } from "@/src/features/sudokuBoardBase/components/numberField";
import { PlayerSolutionInterface } from "@/src/interfaces/playerSolution";
import { Dispatch, SetStateAction } from "react";

interface Props {
  activeField: number;
  setActiveField: Dispatch<SetStateAction<number>>;
  currentPlayerSolution: PlayerSolutionInterface;
  playerBoard: boolean;
}

export const SudokuBoardBase = ({
  activeField,
  setActiveField,
  currentPlayerSolution,
  playerBoard,
}: Props) => {
  return (
    <div className="grid grid-cols-9 grid-rows-9 w-fit">
      {currentPlayerSolution.solution.split("").map((num, index) => (
        <NumberField
          key={index}
          number={num}
          index={index}
          activeField={activeField}
          setActiveField={setActiveField}
          currentPlayerSolution={currentPlayerSolution}
          playerBoard={playerBoard}
        />
      ))}
    </div>
  );
};
