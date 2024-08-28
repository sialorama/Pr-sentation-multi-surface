import { Avatar } from '@mui/material'
import React from 'react'

export const Header = () => {
    return (
        <>
            <Avatar spacing={2} padding={2} style={{ marginTop: 16 }} position="static" 
            alt="Jamal IBANNI" 
            src="./src/assets/avatar.svg"
            sx={{ width: 100, height: 100 }}
            />
            <h2 spacing={0} padding={0} style={{ marginTop: 0 }} position="static">TP2 Application de Présentation multi-surface en React</h2>
        
        </>
    )
}
