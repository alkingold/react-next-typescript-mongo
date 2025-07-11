'use client'

import { Container } from '@chakra-ui/react'

import { useFetchTasks } from "./hooks/useFetchTasks"

import { TaskProvider } from '@context/TaskContext'

import Header from "@/components/Header"
import AddTask from "@/components/AddTask"
import TasksList from "@components/TasksList"
import { Toaster } from '@components/ui/toaster'

export default function Home() {
  const { tasks, loading, error, reloadTasks } = useFetchTasks()

  return (
    <Container maxWidth="900px">
      <Header />
      <TaskProvider reloadTasks={reloadTasks}>
        <AddTask />
        <TasksList tasks={tasks} loading={loading} error={error} />
      </TaskProvider>
      <Toaster />
    </Container>
  );
}
