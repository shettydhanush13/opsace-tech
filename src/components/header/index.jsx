import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import './styles.scss'

const Header = ({ page = '' }) => {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById('title').classList.add('neonText');
    }, 2500)
  }, [])
  const navigate = useNavigate()
  return <header>
    <h1 onClick={() => navigate('/')} className='heading'>{page !== 'about' ?
      <>
      {/* <img loading='lazy' src={require('../../assets/icons/logo_white.svg').default} alt="" /> */}
      <span id='title' className='font-space'>Ospace Tech.</span>
      </>
      :
      <>
        <FontAwesomeIcon icon={faArrowLeft}/>
        <img loading='lazy' src={require('../../assets/icons/logo_white.svg').default} alt="" />
      </>}
    </h1>
  </header>
};

export default Header