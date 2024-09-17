import React from 'react'
import './style.css'
import { useNavigate } from 'react-router'
const Header = () => {
    const navigate = useNavigate()
  return (
    <div className='header'>
      <h2>ACO<span style={{color:'gold'}}>N</span>EWS</h2>
      <p style={{fontWeight:"bold"}} onClick={()=>navigate(-1)}>Back</p>
    </div>
  )
}

export default Header
