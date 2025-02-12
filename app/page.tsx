'use client'

import { useState} from "react"

import { useFetchTasks } from "./hooks/useFetchTasks"

import Header from "@/components/Header"
import AddTask from "@/components/AddTask"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [updateTasksList, setUpdateTasksList] = useState(false)
  const { tasks, loading, error, reloadTasks } = useFetchTasks()

  return (
    <>
      <Header />
      <AddTask setIsLoading={setIsLoading} setUpdateTasksList={setUpdateTasksList} />
    </>
  );
}
