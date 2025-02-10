'use client'

import { useState} from "react"

import Header from "@/components/Header"
import AddTask from "@/components/AddTask"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [updateTasksList, setUpdateTasksList] = useState(false)

  return (
    <>
      <Header />
      <AddTask setIsLoading={setIsLoading} setUpdateTasksList={setUpdateTasksList} />
    </>
  );
}
