'use client'

import { useFetchTasks } from "./hooks/useFetchTasks"

import Header from "@/components/Header"
import AddTask from "@/components/AddTask"

export default function Home() {
  const { tasks, loading, error, reloadTasks } = useFetchTasks()

  return (
    <>
      <Header />
      <AddTask reloadTasks={reloadTasks} />
    </>
  );
}
