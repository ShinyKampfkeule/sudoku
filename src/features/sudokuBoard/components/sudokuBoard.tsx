import { NumberField } from "@/src/features/sudokuBoard/components/numberField";
import { PlayerSolutionInterface } from "@/src/interfaces/playerSolution";
import puzzles from "@/src/json/puzzles.json";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { addNote } from "../../inputs/functions/addNote";
import { PuzzleDataInterface } from "@/src/interfaces/puzzleData";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";

interface Props {
  activeField: number;
  setActiveField: Dispatch<SetStateAction<number>>;
  currentPlayerSolution: PlayerSolutionInterface;
  setCurrentPlayerSolution: Dispatch<SetStateAction<PlayerSolutionInterface>>;
  noteMode: boolean;
  setNoteMode: Dispatch<SetStateAction<boolean>>;
  currentPuzzle: number;
}

export const SudokuBoard = ({
  activeField,
  setActiveField,
  currentPlayerSolution,
  setCurrentPlayerSolution,
  noteMode,
  setNoteMode,
  currentPuzzle,
}: Props) => {
  const [openDialog, setOpenDialog] = useState(false);
  const puzzleData: PuzzleDataInterface = puzzles.expert[currentPuzzle];
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const pressedKey = event.key;
      const fieldIsNotCorrect =
        currentPlayerSolution.solution[activeField] !==
        puzzleData.solution[activeField];

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
      if (fieldIsNotCorrect && keyValue >= 1 && keyValue <= 9) {
        if (noteMode) {
          addNote(
            currentPlayerSolution,
            keyValue,
            activeField,
            setCurrentPlayerSolution
          );
        } else {
          let newValue = pressedKey;
          if (currentPlayerSolution.solution[activeField] === newValue) {
            newValue = "x";
          }

          const newCurrentPlayerSolution = { ...currentPlayerSolution };
          const newSolution = currentPlayerSolution.solution.split("");
          newSolution[activeField] = newValue;
          newCurrentPlayerSolution.solution = newSolution.join("");
          setCurrentPlayerSolution(newCurrentPlayerSolution);

          const isPuzzleSolved = puzzleData.solution.includes(
            newCurrentPlayerSolution.solution
          );
          if (isPuzzleSolved) {
            setOpenDialog(true);
          }

          event.preventDefault();
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
    noteMode,
    setNoteMode,
    currentPuzzle,
    puzzleData.solution,
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
      <AlertDialog open={openDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>Yata! Puzzle solved!</AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
