import React, { useContext } from 'react'
import { data } from './Context/UserContext'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  const user = useContext(data)

  return (
  
    <div>
      
      <h1>hello This is App.jsz {user.username}</h1>
      <Header></Header>
      <Footer></Footer>
    </div>
  )
}

export default App