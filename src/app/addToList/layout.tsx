import { ReactNode } from "react"

import "./styles.css";


const AddToListLay = ({ children }: { children: ReactNode }) => {

    return (
        <div className="addToListLay">{children}</div>
    )
}

export default AddToListLay