import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";
import puzzles from "@/src/json/puzzles.json";
import { PlayerSolutionInterface } from "@/src/interfaces/playerSolution";

interface Props {
  num: number;
  activeField: number;
  currentPlayerSolution: PlayerSolutionInterface;
  setCurrentPlayerSolution: Dispatch<SetStateAction<PlayerSolutionInterface>>;
}

export const NumberButton = ({
  num,
  activeField,
  currentPlayerSolution,
  setCurrentPlayerSolution,
}: Props) => {
  const updateField = (num: number) => {
    const fieldIsNotCorrect =
      currentPlayerSolution.solution[activeField] !==
      puzzles.expert[1].solution[activeField];

    if (fieldIsNotCorrect) {
      if (num >= 1 && num <= 9) {
        let newValue = num.toString();
        if (currentPlayerSolution.solution[activeField] === newValue) {
          newValue = "x";
        }
        const newCurrentPlayerSolution = { ...currentPlayerSolution };
        const newSolution = currentPlayerSolution.solution.split("");
        newSolution[activeField] = newValue;
        newCurrentPlayerSolution.solution = newSolution.join("");
        setCurrentPlayerSolution(newCurrentPlayerSolution);
      }
    }
  };

  return (
    <Button
      key={num}
      variant={num as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}
      size="basic"
      onClick={() => updateField(num)}
    >
      {num}
    </Button>
  );
};
