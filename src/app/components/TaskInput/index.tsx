'use client'
import React, {useState, useCallback} from 'react'
import * as S from './styles'
import { MdAddTask } from "react-icons/md"
import ITask from '@/app/types/ITask'
import { v4 as uuidv4 } from 'uuid';

interface TaskInputProps {
        addTask: (task: ITask) => void 
}

export default function TaskInput({ addTask }: Readonly<TaskInputProps>) {
    const [taskName, setTaskName] = useState('');
    
    const onHandleAdd = useCallback((e: React.MouseEvent<HTMLButtonElement> ) => {
        e.preventDefault()
        if (taskName.trim() === '') return;
        const newTask: ITask = {
            id: uuidv4(),
            name: taskName,
        }
        addTask(newTask)
        setTaskName('')
    }, [addTask, taskName])
        
        
    return (
        <S.Container>
            <S.Input
                placeholder="Digite uma tarefa"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value) }
            />
            <S.BtnAdd onClick={onHandleAdd} type='submit'>
                <MdAddTask size='30' />
            </S.BtnAdd>
        </S.Container>
    )
}
