'use client'

import { useState, useEffect } from "react"

import Header from "@/components/Header"
import AddTask from "@/components/AddTask"

export default function Home() {
  const [task, setTask] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const handleCreateTask = async () => {
    setIsLoading(true)

    try {
      const response = await fetch("/api/task/new", {
        method: 'POST',
        body: JSON.stringify({
          task
        })
      })
      if (response.ok) {
        setTask('')
      } else {
        console.log('error')
      }
    } catch (error) {
      console.error(error)
    }

    setIsLoading(false)
  }

  return (
    <>
      <Header />
      <AddTask task={task} setTask={setTask} handleCreateTask={handleCreateTask} />
    </>
  );
}
