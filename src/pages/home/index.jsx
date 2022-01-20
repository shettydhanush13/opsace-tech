import React, { useEffect } from 'react'
import Header from '../../components/header'
import './styles.scss'

import {
  About,
  Work,
  Me,
  Contact
} from "../../components/opace-sections"

const Home = () => {
  useEffect(() => {
      window.scrollTo(0,0)
  }, [])
  return <section className='bg-color-secondary'>
    <Header/>
    <section className='relative' style={{ top: 100 }}>
        <Work/>
        <About/>
        <Me/>
        <Contact/>
    </section>
  </section>
};

export default Home