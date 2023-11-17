'use client'
import TaskInput from './components/TaskInput';
import Header from './components/Header';
import { useState } from 'react'
import ITask from './types/ITask';
import * as S from './styles'
import Task from './components/Task';

export default function Home() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const onHandleAdd = (task: ITask) => {
    setTasks((prevTasks) => [...prevTasks, task])
  }

  const onHandleDelete = (id: string) => {
    setTasks((prevTasks) => [...prevTasks.filter((prevTask) => prevTask.id !== id)])
  }

  return (
    <S.Container>
      <Header />
      <S.Body>
        <TaskInput addTask={onHandleAdd} />
        <S.Tasks>
        {tasks.length > 0 && tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onHandleDelete={onHandleDelete}
          />
        ))}
          </S.Tasks>
      </S.Body>
    </S.Container>
  )
}
