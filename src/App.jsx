import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header/Header'
import HeaderFullContent from './Component/HeaderFullContent/HeaderFullContent'
import CityInformation from './Component/CityInformation/CityInformation'
import ThirdLayer from './Component/ThirdLayer/ThirdLayer'

function App() {


  return (
    <>
     <HeaderFullContent/>
     <CityInformation/>
     <ThirdLayer/>
    </>
  )
}

export default App
