"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { socket } from "../socket";
import { FormEvent, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const isSubmitting = useRef(false);

  useEffect(() => {
    const onSession = (data: { sessionID: string; userID: string }) => {
      socket.auth = { sessionID: data.sessionID };
      localStorage.setItem("sessionID", data.sessionID);
      socket.userID = userID;
    };

    socket.on("session", onSession);
  });

  const selectUsername = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting.current) return;
    isSubmitting.current = true;

    const data = new FormData(event.currentTarget);
    const username = data.get("username") as string;

    socket.auth = { username };
    socket.connect();
    router.push("/");
  };

  return (
    <form
      className="flex flex-col items-center gap-4 w-1/6 text-white"
      onSubmit={selectUsername}
    >
      <Input
        placeholder="Username"
        name="username"
      />
      <Button
        className="w-1/2"
        type="submit"
      >
        Confirm
      </Button>
    </form>
  );
}
