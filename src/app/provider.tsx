"use client"

import { SessionProvider } from "next-auth/react"
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

type Props = {
    children?: React.ReactNode
}

export const Provider = ({ children }: Props) => {
    return (
        <SessionProvider>
            <DndProvider backend={HTML5Backend}>
                {children}
            </DndProvider>
        </SessionProvider>)
}