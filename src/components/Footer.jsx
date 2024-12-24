import React, { useContext } from 'react'
import { data } from '../Context/UserContext'

const Footer = () => {
    const cityData = useContext(data)
  return (

    <div>
        <h1>I live in  {cityData.city}</h1>
    </div>
  )
}

export default Footer