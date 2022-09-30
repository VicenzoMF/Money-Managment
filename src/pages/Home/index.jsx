import { useState } from 'react'
import "./style.css"

export function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Lista de presença</h1>
    <input type="text" placeholder='Digite um nome'/>
    <button>Adicionar</button>
    </>
  )
}
