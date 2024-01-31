"use client"

import * as React from "react"

import HeaderComponent from "../components/common/header";

import { useTheme } from "next-themes"

export default function Home() {
  const { setTheme } = useTheme()

  return (
    <main>
      <HeaderComponent></HeaderComponent> 
    </main>
  )
}
