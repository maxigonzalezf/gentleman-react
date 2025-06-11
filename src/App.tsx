import './App.css'
import { AppForm, Button, ColorRed } from './components'

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
    <>
      <ColorRed><Button parentMethod={dimeHola}>My red button</Button></ColorRed>
      <Button parentMethod={handleClick}>My normal button</Button>
    
      <AppForm>
        <button type="submit" onClick={submit} ></button>
      </AppForm>
    </>
    )
}

export default App
