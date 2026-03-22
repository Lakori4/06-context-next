"use client"

import { useList } from "@/context/ListaContext"
import { useRouter } from "next/navigation";


const Home = () => {

  const { list } = useList();

  const router = useRouter();

  return (
    <div>
      <button onClick={() => { router.push("/addToList") }}>Go to add to list page</button>
      {list.map(e => (<p key={e}>{e}</p>))}
    </div>
  )
}

export default Home