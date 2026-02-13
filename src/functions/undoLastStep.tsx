import { Dispatch, SetStateAction } from "react";
import { MoveHistoryInterface } from "../interfaces/moveHistory";
import { PlayerSolutionInterface } from "../interfaces/playerSolution";
import { cloneDeep } from "lodash";
import { socket } from "@/app/socket";

export const undoLastStep = (
  moveHistory: MoveHistoryInterface[],
  setCurrentPlayerSolution: Dispatch<SetStateAction<PlayerSolutionInterface>>,
  setActiveField: Dispatch<SetStateAction<number>>,
  setMoveHistory: Dispatch<SetStateAction<MoveHistoryInterface[]>>,
) => {
  if (moveHistory.length > 1) {
    const newMoveHistory = cloneDeep(moveHistory);
    const deletedMove = newMoveHistory.pop();

    if (deletedMove) {
      socket.emit("numberInput", {
        field: deletedMove.activeField,
        added:
          newMoveHistory[newMoveHistory.length - 1].playerSolution.solution[
            deletedMove.activeField
          ] !== "x",
      });

      socket.emit(
        "activeField",
        newMoveHistory[newMoveHistory.length - 1].activeField,
      );
    }

    setCurrentPlayerSolution(
      newMoveHistory[newMoveHistory.length - 1].playerSolution,
    );
    setActiveField(newMoveHistory[newMoveHistory.length - 1].activeField);
    setMoveHistory(newMoveHistory);
  }
};
