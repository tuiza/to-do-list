'use client'
import React from 'react'
import * as S from './styles'
import { MdAddTask } from "react-icons/md"

export default function TaskInput() {
    return (
        <S.Container>
            <S.Input placeholder="Digite uma tarefa" />
            <S.BtnAdd>
                <MdAddTask size='30' />
            </S.BtnAdd>
        </S.Container>
    )
}
