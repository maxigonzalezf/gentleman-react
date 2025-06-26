import type { ReactNode } from 'react';
import './App.css'

interface Props {
    children: ReactNode // nodo renderizable por React
}

function App({ children }: Props) {

  return (
    <>
      <p>Navbar</p>
      {children}
      <p>Footer</p>
    </>
  )
}

export default App;
