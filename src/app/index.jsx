'use client'

import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    console.log("LOL");
    router.push("/docs");
  }, [router]);

  return false;
}
