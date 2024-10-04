"use client";

import Image from "next/image";
import "./globals.css";
import { UserButton, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const [username, setUsername] = useState("username");
  const { user } = useUser();
  const router = useRouter();

  const pushUser = () => {
    const username = user.username;
    console.log("clicked");
    router.push("/u/"+username);
  }

  return (
    <div className=" flex items-center justify-center bg-black text-white min-h-[100vh] w-full flex-col">
      <h1>
        {username} <UserButton />{" "}
      </h1>

      <Button onClick={() => pushUser()}>Button</Button>
      </div>
  );
}
