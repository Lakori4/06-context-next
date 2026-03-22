"use client"

import { createContext, ReactNode, useCallback, useContext, useState } from "react";


type ListContextType = {
    list: string [],
    listPush: (item: string) => void,
    listPop: (item: string) => void,
}

const ListContext = createContext<ListContextType | null>(null);

export const ListProvider = ({children}: {children: ReactNode}) => {
    const [list, setList] = useState<string[]>([])

    const listPush = (item: string) => {setList([...list, item])}
    const listPop = (item: string) => {setList(list.filter(e => e !== item))}

    return (
        <ListContext.Provider value={{list, listPop, listPush}}>
            {children}
        </ListContext.Provider>
    )
    
    
}

export const useList = () => {
    const context = useContext(ListContext)
    if (!context) {
        throw new Error("Page out of context")
    }
    return context
}