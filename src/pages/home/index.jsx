import React, { useEffect } from 'react'
import Project from "../../components/projects"
import { StarryBG } from '../../module'
import Header from '../../components/header'
import PageWrapper from '../../components/pageWrapper'
import ContentSection from '../../components/contentSection'
import { homeContents } from '../../data'
import './styles.scss'

const Home = () => {

  useEffect(() => {
      window.scrollTo(0,0)
  }, [])

  return <>
    <Header/>
    <StarryBG/>
    <PageWrapper>
      <Project/>
      {homeContents.map(content => <ContentSection data={content}/>)}
    </PageWrapper>
  </>
};

export default Home