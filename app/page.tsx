"use client";

import { useState, useEffect } from "react";
import { useFormContext } from "./context";
import TextInput from "./components/textInput";
import Link from "next/link";

export default function Home() {
  const { form, setForm } = useFormContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const newForm = form;
    newForm.userName = email;
    newForm.password = password;
    setForm(newForm);
  }, [email, password]);

  return (
    <form className="flex flex-col justify-center items-center h-screen">
      <h1 className="m-4">Welcome to the Onboarding Flow!</h1>
      <TextInput id="email" text="Email:" value={email} onInput={setEmail} />
      <TextInput
        id="password"
        text="Password:"
        value={password}
        onInput={setPassword}
      />
      <button type="submit" className="m-4" disabled={!email || !password}>
        <Link href="/pages/pageTwo">Create Account</Link>
      </button>
    </form>
  );
}
