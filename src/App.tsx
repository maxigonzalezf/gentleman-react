import './App.css'
import { BookReader, FocusInput, ShoppingCart } from './components'

function App() {

  return (
  // siempre los componentes deben tener un padre en el render (en este caso uso un fragmento (<> </>) porque no lo tienen)
  <>
    {/*<BookReader />*/}
    {/*<FocusInput />*/}
    <ShoppingCart />
  </>
  )
}

export default App
