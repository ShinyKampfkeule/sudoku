import { NumberField } from "@/src/features/sudokuBoard/components/numberField";
import { PlayerSolutionInterface } from "@/src/interfaces/playerSolution";
import puzzles from "@/src/json/puzzles.json";
import { Dispatch, SetStateAction, useEffect } from "react";

interface Props {
  activeField: number;
  setActiveField: Dispatch<SetStateAction<number>>;
  currentPlayerSolution: PlayerSolutionInterface;
  setCurrentPlayerSolution: Dispatch<SetStateAction<PlayerSolutionInterface>>;
  noteMode: boolean;
  setNoteMode: Dispatch<SetStateAction<boolean>>;
}

export const SudokuBoard = ({
  activeField,
  setActiveField,
  currentPlayerSolution,
  setCurrentPlayerSolution,
  noteMode,
  setNoteMode,
}: Props) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const pressedKey = event.key;
      const fieldIsNotCorrect =
        currentPlayerSolution.solution[activeField] !==
        puzzles.expert[1].solution[activeField];

      if (
        (pressedKey === "Backspace" || pressedKey === "Delete") &&
        fieldIsNotCorrect
      ) {
        const newCurrentPlayerSolution = { ...currentPlayerSolution };
        const newSolution = currentPlayerSolution.solution.split("");
        newSolution[activeField] = "x";
        newCurrentPlayerSolution.solution = newSolution.join("");
        setCurrentPlayerSolution(newCurrentPlayerSolution);
        event.preventDefault();
      } else if (pressedKey === "ArrowUp" || pressedKey === "w") {
        setActiveField((prev) =>
          prev !== null && prev >= 9 ? prev - 9 : prev
        );
        event.preventDefault();
      } else if (pressedKey === "ArrowDown" || pressedKey === "s") {
        setActiveField((prev) =>
          prev !== null && prev < 72 ? prev + 9 : prev
        );
        event.preventDefault();
      } else if (pressedKey === "ArrowLeft" || pressedKey === "a") {
        setActiveField((prev) =>
          prev !== null && prev % 9 !== 0 ? prev - 1 : prev
        );
        event.preventDefault();
      } else if (pressedKey === "ArrowRight" || pressedKey === "d") {
        setActiveField((prev) =>
          prev !== null && prev % 9 !== 8 ? prev + 1 : prev
        );
        event.preventDefault();
      } else if (pressedKey === "n") {
        setNoteMode((prev) => !prev);
        event.preventDefault();
      }

      const keyValue = parseInt(pressedKey);
      if (fieldIsNotCorrect) {
        if (noteMode) {
        } else {
          if (keyValue >= 1 && keyValue <= 9) {
            let newValue = pressedKey;
            if (currentPlayerSolution.solution[activeField] === newValue) {
              newValue = "x";
            }

            const newCurrentPlayerSolution = { ...currentPlayerSolution };
            const newSolution = currentPlayerSolution.solution.split("");
            newSolution[activeField] = newValue;
            newCurrentPlayerSolution.solution = newSolution.join("");
            setCurrentPlayerSolution(newCurrentPlayerSolution);
            event.preventDefault();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [
    activeField,
    setActiveField,
    currentPlayerSolution,
    setCurrentPlayerSolution,
  ]);

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
        />
      ))}
    </div>
  );
};
