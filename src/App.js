import React from 'react'
import Bingo from './Bingo'
import Form from './Form'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  //Ver el código funcionando en: https://entrevista-juan-sabbatini.netlify.app/
  return (
    <Routes>
      <Route exact path="/" element={<Bingo/>}/>
      <Route exact path="/form" element={<Form/>}/>
    </Routes>
  )
}

export default App
