import { NotesInterface } from "@/src/interfaces/notes";
import { addNote } from "../../inputs/functions/addNote";
import { PlayerSolutionInterface } from "@/src/interfaces/playerSolution";
import { PuzzleDataInterface } from "@/src/interfaces/puzzleData";
import { Dispatch, SetStateAction } from "react";
import { MoveHistoryInterface } from "@/src/interfaces/moveHistory";
import { cloneDeep } from "lodash";
import { socket } from "@/app/socket";

export const inputNumber = (
  noteMode: boolean,
  newCurrentPlayerSolution: {
    solution: string;
    notes: NotesInterface;
  } | null,
  currentPlayerSolution: PlayerSolutionInterface,
  keyValue: number,
  activeField: number,
  pressedKey: string,
  puzzleData: PuzzleDataInterface,
  setPuzzleActive: Dispatch<SetStateAction<boolean>>,
  setOpenDialog: Dispatch<SetStateAction<boolean>>,
  event: KeyboardEvent,
  setCurrentPlayerSolution: Dispatch<SetStateAction<PlayerSolutionInterface>>,
  setMoveHistory: Dispatch<SetStateAction<MoveHistoryInterface[]>>,
  moveHistory: MoveHistoryInterface[],
) => {
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

    socket.emit("numberInput", {
      field: activeField,
      added: newValue !== "x",
    });

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
};
