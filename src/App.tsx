import { useEffect, useState } from 'react';
import './App.css'
import { EffectExample, PromiseError, UndefinedExample } from './components/ErrorBoundaryExamples'
import { getCharacter } from './services/api.service'
import { type Character, emptyCharacter } from './models';
import { useApi } from './hooks/useApi';

function App() {
/*   const [data, setData] = useState<Character>(emptyCharacter)

  const fetchMorty = async () => {
    const result = await getCharacter(1);
    setData(result.data)
  }

  useEffect(() => {
    fetchMorty()
  }, []) */

  const { loading, error, data, fetch } = useApi<Character>(getCharacter(1), { autoFetch: true }) // cuando carga el componente, hace el fetch automaticamente (autoFetch: true)

  if (loading) {
    return (<p>Cargando</p>)
  }

  if (error) {
  return (<p>Ups {error.message}</p>)
  }

  return (
    <>
      {JSON.stringify(data)}
      <button onClick={fetch}></button>
    </>
  )
}

export default App
