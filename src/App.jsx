import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Items from './Component/Items'
import Cart from './Component/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Items</h2>
      <Items name={"Macbook"} price={100000}/>
      <Items name={"Airpods"} price={9000}/>
      <Items name={"Mouse"} price={520}/>
      <Items name={"pendrive"} price={10}/>
      <Cart/>
    </>
  )
}

export default App
