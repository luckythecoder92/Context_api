import React, { useContext } from 'react'
import { data } from '../Context/UserContext'

const Header = () => {
    const userData = useContext(data)
  return (
    <div>
        <h1>My age is {userData.age} </h1>
    </div>
  )
}

export default Header