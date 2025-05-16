import { useState } from 'react'
import Slots from './components/SlotGame/Slots'

import './App.css'
import SlotButton from './components/SlotButton/SlotButton'

function App() {


  return (
    <>
      <Slots value={['🍒', '🍔', '🍭']} />

    </>
  )
}

export default App
