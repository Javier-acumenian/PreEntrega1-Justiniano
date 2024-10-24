import { useState } from 'react'
import NavBarComponent from './components/NavBarComponent'
import ItemListContainer from './components/ItemListContainerComponent'
import './App.css'
  
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBarComponent />
      <div></div>
      <ItemListContainer greeting={"Bienvenidos a la tienda On Line"}/>
    </>
  )
}

export default App
