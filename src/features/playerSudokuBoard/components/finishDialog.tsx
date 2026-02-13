import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { formatTime } from "@/src/functions/formatTime";

interface Props {
  openDialog: boolean;
  elapsedTime: number;
}

export const FinishDialog = ({ openDialog, elapsedTime }: Props) => {
  return (
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
          <AlertDialogCancel className="cursor-pointer">Menu</AlertDialogCancel>
          <AlertDialogAction className="cursor-pointer">
            Next Puzzle
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
