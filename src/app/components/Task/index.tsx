'use client'
import React from 'react'
import * as S from './styles'
import { MdDeleteOutline, MdEdit } from "react-icons/md"
import ITask from '@/app/types/ITask'
import { useState } from 'react'

interface TaskProps {
    task: ITask,
    onHandleDelete: (id: string) => void
}

export default function Task({
    task,
    onHandleDelete
}: Readonly<TaskProps>) {

    const [checked, setChecked] = useState(false);
    return (
        <S.Container>
            <S.Checkbox
                type="checkbox"
                onChange={() => setChecked(!checked)}
                checked={checked}
            />
            <S.TaskName
                done={checked}
                onClick={() => setChecked(!checked)}>{task.name}
            </S.TaskName>
            <S.BtnContainer>
                <S.BtnDelete>
                    <MdEdit size={28} color='#f5f5f5' />
                </S.BtnDelete>
                <S.BtnDelete onClick={() => onHandleDelete(task.id)}>
                    <MdDeleteOutline size={28} color='red'/>
                </S.BtnDelete>
            </S.BtnContainer>
        </S.Container>
    )
}
