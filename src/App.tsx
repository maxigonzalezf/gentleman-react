import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const consoleLoader = (loadingValue: boolean) => {
    setLoading(loadingValue)
    console.info(loading)
  }
  const fetchData = async () => {
    consoleLoader(true)
    try {
      const response = await fetch("https://api.example.com/data")
      
      if (!response.ok) {
        throw new Error("Error al obtener datos")
      }

      const jsonData = await response.json()
      setData(jsonData)
    } catch (err) {
      setError(err as string)
    } finally {
      consoleLoader(false)
    }
  }

  
  useEffect(() => {
    fetchData()
    // return () => {
    //   // manejar el estado de la memoria (se libera o controlan las problematicas de lo asincrono)
    // }
  }, [])

  if (loading) {
    return <div>Cargando...</div>
  }

  if (error)  {
    return <div>UPS! Hay un error: {error}</div>
  }

  return (
      <div>{JSON.stringify(data)}</div>
    )
}

export default App
