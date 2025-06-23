import './App.css'
import { EffectExample, PromiseError, UndefinedExample } from './components/ErrorBoundaryExamples'

function App() {

  return (
  <>
    {/*<UndefinedExample />*/}
    {/*<EffectExample />*/}
    <PromiseError />
  </>
  )
}

export default App
