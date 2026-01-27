import { Dispatch, SetStateAction } from "react";
import { MoveHistoryInterface } from "../interfaces/moveHistory";
import { PlayerSolutionInterface } from "../interfaces/playerSolution";
import { cloneDeep } from "lodash";

export const undoLastStep = (
  moveHistory: MoveHistoryInterface[],
  setCurrentPlayerSolution: Dispatch<SetStateAction<PlayerSolutionInterface>>,
  setActiveField: Dispatch<SetStateAction<number>>,
  setMoveHistory: Dispatch<SetStateAction<MoveHistoryInterface[]>>,
) => {
  if (moveHistory.length > 1) {
    const newMoveHistory = cloneDeep(moveHistory);
    newMoveHistory.pop();

    setCurrentPlayerSolution(
      newMoveHistory[newMoveHistory.length - 1].playerSolution,
    );
    setActiveField(newMoveHistory[newMoveHistory.length - 1].activeField);
    setMoveHistory(newMoveHistory);
  }
};
