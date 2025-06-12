import './App.css'
import { AppForm, Button, ColorRed } from './components'
import { GlobalProvider } from './context/global.provider'


function App() {

  const submit = () => {
    console.log("submitted")
  }

  const handleClick = () => {
    console.log("iiii")
  }

  const dimeHola = () => {
    alert("hola !!")
  }

  return (
    // si no pongo el Provider, value = null (error)
    <GlobalProvider>
      <ColorRed><Button parentMethod={dimeHola}>My red button</Button></ColorRed>
      <Button parentMethod={handleClick}>My normal button</Button>
    
      <AppForm>
        <button type="submit" onClick={submit} ></button>
      </AppForm>
    </GlobalProvider>
  )
}

export default App
