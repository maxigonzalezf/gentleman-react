import './App.css'
import { Modal } from './components'
import { useModalContext } from './components/Modal/context/ModalContext'

function App() {
  const {setState} = useModalContext()

  const openModal = () => {
    setState(true)
  }

  return (
  <>
    <Modal>
      <h2>Hola MAxi</h2>
      <h3>Como estas</h3>
    </Modal>
    <button onClick={openModal}>Abrir</button>
  </>
  )
}

export default App
