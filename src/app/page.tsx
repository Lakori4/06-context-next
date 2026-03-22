"use client"

import { useList } from "@/context/ListaContext"
import { useRouter } from "next/navigation";


const Home = () => {

  const {list} = useList();

  const router = useRouter();

  /* listPush("string1") I'm an idiot and didn't know that I had to import the function from useList()*/

  return (
    <div>
      <button onClick={()=> {router.push("/addToList")}}>Go to add to list page</button>
      {list.map (e => (<p>{e}</p>))}
    </div>
  )
}

export default Home