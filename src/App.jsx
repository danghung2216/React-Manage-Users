import { Fragment, useState } from 'react'

import './App.css'
import LoginPage from './Page/LoginPage/LoginPage'
import ManegeUser from './Page/ManegeUser/ManegeUser'
import Homepage from './Page/Home/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavTop from './Page/Nav/NavTop'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
      
     
      {/* <NavTop/> */}
      
        {/* <Routes >
          <Route path="/home" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/users" element={<ManegeUser />} />
        </Routes> */}
        <ManegeUser/>
        
      
      
     
    </Fragment>
  )
}

export default App
