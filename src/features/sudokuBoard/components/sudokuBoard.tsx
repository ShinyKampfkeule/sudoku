import { NumberField } from "@/src/features/sudokuBoard/components/numberField";
import { PlayerSolutionInterface } from "@/src/interfaces/playerSolution";
import puzzles from "@/src/json/puzzles.json";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { addNote } from "../../inputs/functions/addNote";
import { PuzzleDataInterface } from "@/src/interfaces/puzzleData";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { PuzzlesInterface } from "@/src/interfaces/puzzles";
import { formatTime } from "@/src/functions/formatTime";
import { NotesInterface } from "@/src/interfaces/notes";
import { cloneDeep } from "lodash";
import { MoveHistoryInterface } from "@/src/interfaces/moveHistory";
import { undoLastStep } from "@/src/functions/undoLastStep";

interface Props {
  activeField: number;
  setActiveField: Dispatch<SetStateAction<number>>;
  currentPlayerSolution: PlayerSolutionInterface;
  setCurrentPlayerSolution: Dispatch<SetStateAction<PlayerSolutionInterface>>;
  noteMode: boolean;
  setNoteMode: Dispatch<SetStateAction<boolean>>;
  currentPuzzle: string;
  elapsedTime: number;
  setPuzzleActive: Dispatch<SetStateAction<boolean>>;
  moveHistory: MoveHistoryInterface[];
  setMoveHistory: Dispatch<SetStateAction<MoveHistoryInterface[]>>;
}

export const SudokuBoard = ({
  activeField,
  setActiveField,
  currentPlayerSolution,
  setCurrentPlayerSolution,
  noteMode,
  setNoteMode,
  currentPuzzle,
  elapsedTime,
  setPuzzleActive,
  moveHistory,
  setMoveHistory,
}: Props) => {
  const [openDialog, setOpenDialog] = useState(false);
  const puzzlesObject: PuzzlesInterface = puzzles;
  const puzzleData: PuzzleDataInterface = puzzlesObject.expert[currentPuzzle];
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const pressedKey = event.key;
      const fieldIsNotCorrect =
        currentPlayerSolution.solution[activeField] !==
        puzzleData.solution[activeField];

      if (pressedKey === "Delete" && fieldIsNotCorrect) {
        const newCurrentPlayerSolution = { ...currentPlayerSolution };
        if (noteMode) {
          console.log("No note mode");
        } else {
          const newSolution = currentPlayerSolution.solution.split("");
          newSolution[activeField] = "x";
          newCurrentPlayerSolution.solution = newSolution.join("");
        }
        setCurrentPlayerSolution(newCurrentPlayerSolution);
        event.preventDefault();
      } else if (pressedKey === "ArrowUp" || pressedKey === "w") {
        setActiveField((prev) =>
          prev !== null && prev >= 9 ? prev - 9 : prev,
        );
        event.preventDefault();
      } else if (pressedKey === "ArrowDown" || pressedKey === "s") {
        setActiveField((prev) =>
          prev !== null && prev < 72 ? prev + 9 : prev,
        );
        event.preventDefault();
      } else if (pressedKey === "ArrowLeft" || pressedKey === "a") {
        setActiveField((prev) =>
          prev !== null && prev % 9 !== 0 ? prev - 1 : prev,
        );
        event.preventDefault();
      } else if (pressedKey === "ArrowRight" || pressedKey === "d") {
        setActiveField((prev) =>
          prev !== null && prev % 9 !== 8 ? prev + 1 : prev,
        );
        event.preventDefault();
      } else if (pressedKey === "n") {
        setNoteMode((prev) => !prev);
        event.preventDefault();
      } else if (pressedKey === "u" || pressedKey === "Backspace") {
        undoLastStep(
          moveHistory,
          setCurrentPlayerSolution,
          setActiveField,
          setMoveHistory,
        );
      }

      let newCurrentPlayerSolution: {
        solution: string;
        notes: NotesInterface;
      } | null = null;
      const keyValue = parseInt(pressedKey);
      if (fieldIsNotCorrect && keyValue >= 1 && keyValue <= 9) {
        if (noteMode) {
          newCurrentPlayerSolution = addNote(
            currentPlayerSolution,
            keyValue,
            activeField,
          );
        } else {
          let newValue = pressedKey;
          if (currentPlayerSolution.solution[activeField] === newValue) {
            newValue = "x";
          }

          newCurrentPlayerSolution = { ...currentPlayerSolution };
          const newSolution = currentPlayerSolution.solution.split("");
          newSolution[activeField] = newValue;
          newCurrentPlayerSolution.solution = newSolution.join("");

          const isPuzzleSolved = puzzleData.solution.includes(
            newCurrentPlayerSolution.solution,
          );
          if (isPuzzleSolved) {
            setPuzzleActive(false);
            setOpenDialog(true);
          }

          event.preventDefault();
        }

        setCurrentPlayerSolution(newCurrentPlayerSolution);
        setMoveHistory([
          ...moveHistory,
          {
            playerSolution: cloneDeep(newCurrentPlayerSolution),
            activeField: activeField,
          },
        ]);
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
    setPuzzleActive,
    moveHistory,
    setMoveHistory,
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
        <AlertDialogContent className="justify-center">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl">
              Yata! Puzzle solved!
            </AlertDialogTitle>
          </AlertDialogHeader>
          <div className="flex flex-col justify-center items-center gap-3">
            <span className="text-xl">Experte 7</span>
            <span className="text-lg">{formatTime(elapsedTime)}</span>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel className="cursor-pointer">
              Menu
            </AlertDialogCancel>
            <AlertDialogAction className="cursor-pointer">
              Next Puzzle
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
