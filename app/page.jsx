"use client";

import Image from "next/image";
import "./globals.css";
import { UserButton, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const pushUser = () => {
    console.log("clicked");
    router.push("/admin");
  };

  useEffect(() => {
    pushUser();
  }, []);


  return (
    <div className=" flex items-center justify-center bg-black text-white min-h-[100vh] w-full flex-col">
      Redirecting you to admin page...
    </div>
  );
}
