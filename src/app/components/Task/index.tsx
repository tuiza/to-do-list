'use client'
import React from 'react'
import * as S from './styles'
import { MdDeleteOutline } from "react-icons/md"
import ITask from '@/app/types/ITask'

interface TaskProps {
    task: ITask,
    onHandleDelete: (id: string) => void
}

export default function Task({
    task,
    onHandleDelete
}: Readonly<TaskProps>) {
    return (
        <S.Container>
            <S.TaskName>{task.name}</S.TaskName>
            <S.BtnDelete onClick={() => onHandleDelete(task.id)}>
                <MdDeleteOutline size={28} />
            </S.BtnDelete>
        </S.Container>
    )
}
