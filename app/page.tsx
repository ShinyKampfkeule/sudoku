"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { LoginForm } from "@/src/features/login/components/loginForm";

export default function Login() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [router, session]);

  return (
    <div className="grow flex items-center justify-center">
      <LoginForm />
    </div>
  );
}
