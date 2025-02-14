'use client'

import { Container } from '@chakra-ui/react'

import { useFetchTasks } from "./hooks/useFetchTasks"

import { TaskProvider } from '@context/TaskContext'

import Header from "@/components/Header"
import AddTask from "@/components/AddTask"
import TasksList from "@components/TasksList"

export default function Home() {
  const { tasks, loading, error, reloadTasks } = useFetchTasks()

  return (
    <Container maxWidth="900px">
      <Header />
      <TaskProvider reloadTasks={reloadTasks}>
        <AddTask reloadTasks={reloadTasks} />
        <TasksList tasks={tasks} />
      </TaskProvider>
    </Container>
  );
}
