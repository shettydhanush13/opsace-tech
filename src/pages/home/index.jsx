import React, { useEffect } from 'react'
import { homeContents } from '../../data'
import Wrapper from '../../hoc/routeWrapper'
import {
  ContentSection,
  Project
} from '../../components'

const Home = () => {

  useEffect(() => {
      window.scrollTo(0,0)
  }, [])

  return <Wrapper>
      <Project/>
      {homeContents.map(content => <ContentSection data={content}/>)}
  </Wrapper>
};

export default Home