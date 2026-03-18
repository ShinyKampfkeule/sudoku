import { LoginForm } from "@/src/features/login/components/loginForm";
import sudoku from "../../public/sudoku.jpg";
import Image from "next/image";

export default function Login() {
  return (
    <div
      className="relative grow flex items-center justify-center"
      data-theme="lightGreen"
    >
      <Image
        src={sudoku}
        alt="Coffe Table with Sudoku from Newspaper"
        className="absolute w-full h-full"
      />
      <LoginForm />
    </div>
  );
}
