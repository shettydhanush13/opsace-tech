import React, { useEffect } from 'react'
import {
  About,
  Work,
  Me,
  Contact
} from "../../components/opace-sections"
import { StarryBG } from '../../module'
import Header from '../../components/header'
import PageWrapper from '../../components/pageWrapper'
import './styles.scss'

const Home = () => {

  useEffect(() => {
      window.scrollTo(0,0)
  }, [])

  return <>
    <Header/>
    <StarryBG/>
    <PageWrapper>
      <Work/>
      <About/>
      <Me/>
      <Contact/>
    </PageWrapper>
  </>
};

export default Home