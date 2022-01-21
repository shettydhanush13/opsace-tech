import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles.scss'

const Header = () => {
  
  useEffect(() => {
    setTimeout(() => {
      document?.getElementById('title')?.classList.add('neonText');
    }, 2500)
  }, [])

  const navigate = useNavigate()

  return <header>
    <h1 onClick={() => navigate('/')} className='heading'>
      <span id='title' className='font-space'>Ospace Tech.</span>
    </h1>
  </header>
};

export default Header