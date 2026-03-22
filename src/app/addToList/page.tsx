"use client"

import { useList } from "@/context/ListaContext"
import { useState } from "react"


const AddToList = () => {

    const [item, setItem] = useState<string>("")

    const { listPush } = useList();

    return <div>
        <input value={item} onChange={e => { setItem(e.target.value) }} onKeyDown={e => { if (e.key === "Enter") { listPush(item); setItem("") } }} type="text" />
    </div>
}

export default AddToList