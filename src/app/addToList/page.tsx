import { useList } from "@/context/ListaContext"
import { useState } from "react"


const AddToList = () => {

    const [item, setItem] = useState<string>("")

    const {listPush} = useList();

    return <div>
        <input onChange={e =>{setItem(e.currentTarget.value)}} onKeyDown={e => {if (e.key === "Enter") listPush(item); setItem("")}} type="text" />
    </div>
}

export default AddToList