import { useState } from 'react'
import './App.css'
import { Button } from './components'

function App() {
  const [count, setCount] = useState(0) // componente inteligente, tiene un estado
  const [name, setName] = useState("Lucas")

  const countMore = () => {
    setCount((count) => count + 1) // agarra el contador y le suma 1. Ejecuta el metodo para agarrar el contador primero, y luego ejecuta el metodo que le suma 1
  }

  // En este caso con cada click, se sumaria 5
  // const countMore = () => {
  //   setCount((count) => count + 1)
  //   setCount((count) => count + 1)
  //   setCount((count) => count + 1)
  //   setCount((count) => count + 1)
  //   setCount((count) => count + 1)
  // }

  // En este caso con cada click, se sumaria internamente count pero no se ejecutaria el render, por lo que siempre mostraria 0
  // const countMore = () => {
  //   setCount(count + 1)
  //   setCount(count + 1)
  //   setCount(count + 1)
  //   setCount(count + 1)
  //   setCount(count + 1)
  // }

  const changeName = () => {
    setName("Maximiliano")
  }

  return (
    <>
      <Button label={`Count is ${count}`} parentMethod={countMore} />
      <p>{name}</p>
      <Button label="Change Name" parentMethod={changeName} />
    </>
  )
}

export default App
