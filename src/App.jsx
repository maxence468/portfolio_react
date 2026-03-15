import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AsciiText from './component/ASCIIText'


function App() {
  return (
    <>
      <AsciiText
        text="Maxence"
        font="Big"
        color="#ffffff"
      />
    </>
  )
}

export default App

