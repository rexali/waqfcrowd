'use client'

import * as React from "react";
import HomePage from "./home/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cwaqf | an Islamic endowment",
  description: "It provide different waqf-funded causes to support",
  viewport: {
    width: "device-width",
    initialScale: 1.0
  },
  keywords: ["waqf", "endowment", 'Islamic endowment', 'awqaf', 'cash waqf'],
}

export default function Page() {
  return (
      <HomePage />
  );
}