import puzzles from "@/src/json/puzzles.json";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { PlayerSolutionInterface } from "@/src/interfaces/playerSolution";
import { MoveHistoryInterface } from "@/src/interfaces/moveHistory";
import { PuzzlesInterface } from "@/src/interfaces/puzzles";
import { PuzzleDataInterface } from "@/src/interfaces/puzzleData";
import { undoLastStep } from "@/src/functions/undoLastStep";
import { NotesInterface } from "@/src/interfaces/notes";
import { deleteInput } from "@/src/functions/deleteInput";
import { inputNumber } from "../functions/inputNumber";
import { SudokuBoardBase } from "../../sudokuBoardBase/components/sudokuBoardBase";
import { FinishDialog } from "./finishDialog";
import { socket } from "@/app/socket";

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

export const PlayerSudokuBoard = ({
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
      const newCurrentPlayerSolution: {
        solution: string;
        notes: NotesInterface;
      } | null = null;
      const pressedKey = event.key;
      const fieldIsNotCorrect =
        currentPlayerSolution.solution[activeField] !==
        puzzleData.solution[activeField];
      const keyValue = parseInt(pressedKey);
      let newActiveField: number | null = null;

      if (pressedKey === "Delete" && fieldIsNotCorrect) {
        deleteInput(
          currentPlayerSolution,
          noteMode,
          activeField,
          setCurrentPlayerSolution,
          event,
        );
      } else if (pressedKey === "ArrowUp" || pressedKey === "w") {
        newActiveField =
          activeField !== null && activeField >= 9
            ? activeField - 9
            : activeField;

        socket.emit("activeField", newActiveField);
        setActiveField(newActiveField);
        event.preventDefault();
      } else if (pressedKey === "ArrowDown" || pressedKey === "s") {
        newActiveField =
          activeField !== null && activeField < 72
            ? activeField + 9
            : activeField;

        socket.emit("activeField", newActiveField);
        setActiveField(newActiveField);
        event.preventDefault();
      } else if (pressedKey === "ArrowLeft" || pressedKey === "a") {
        newActiveField =
          activeField !== null && activeField % 9 !== 0
            ? activeField - 1
            : activeField;

        socket.emit("activeField", newActiveField);
        setActiveField(newActiveField);
        event.preventDefault();
      } else if (pressedKey === "ArrowRight" || pressedKey === "d") {
        newActiveField =
          activeField !== null && activeField % 9 !== 8
            ? activeField + 1
            : activeField;

        socket.emit("activeField", newActiveField);
        setActiveField(newActiveField);
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
      } else if (fieldIsNotCorrect && keyValue >= 1 && keyValue <= 9) {
        inputNumber(
          noteMode,
          newCurrentPlayerSolution,
          currentPlayerSolution,
          keyValue,
          activeField,
          pressedKey,
          puzzleData,
          setPuzzleActive,
          setOpenDialog,
          event,
          setCurrentPlayerSolution,
          setMoveHistory,
          moveHistory,
        );
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
    puzzleData,
  ]);

  return (
    <>
      <SudokuBoardBase
        activeField={activeField}
        setActiveField={setActiveField}
        currentPlayerSolution={currentPlayerSolution}
        playerBoard={true}
      />
      <FinishDialog
        openDialog={openDialog}
        elapsedTime={elapsedTime}
      />
    </>
  );
};
