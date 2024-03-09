import React from "react";
import { Metadata } from "next";
import { H1 } from "@/components";

export const metadata: Metadata = {
  title: "Blob — Home",
  description: "Blob homepage!",
};

export default function RootPage() {
  return (
    <div>
      <H1>Home</H1>
      <p>The homepage.</p>
    </div>
  );
}
