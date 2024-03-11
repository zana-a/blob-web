import React from "react";
import { Metadata } from "next";
import { Jumbotron } from "@/components";

export const metadata: Metadata = {
  title: "Blob — Home",
  description: "Blob homepage!",
};

export default function RootPage() {
  return (
    <div>
      <Jumbotron>
        <Jumbotron.Title>Homepage</Jumbotron.Title>
      </Jumbotron>
    </div>
  );
}
