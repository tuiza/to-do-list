'use client'
import React, {useState} from 'react'
import * as S from './styles'
import { MdLightMode, MdNightlightRound } from "react-icons/md"

export default function Tasks() {
    const [isDark, setIsDark] = useState(false);
    const handleTheme = () => {
        setIsDark(!isDark);
    }
    return (
        <S.Header>
            <S.HeaderContent>
                <S.Titulo>Lista de Tarefas</S.Titulo>
                <S.BtnTheme onClick={handleTheme}>
                    {isDark ?
                        <MdLightMode size='30' color='#f5f5f5'/> :
                        <MdNightlightRound size='30' color='#f5f5f5' />
                    }
                </S.BtnTheme>
            </S.HeaderContent>
        </S.Header>
    )
}
