import React, { useEffect } from "react";
import "./styles.css";
import Introduction from "../../components/introduction"
import { aboutContents } from '../../data'
import { StarryBG } from '../../module'
import Header from '../../components/header'
import PageWrapper from '../../components/pageWrapper'
import ContentSection from '../../components/contentSection'
import CenteredSection from '../../components/centeredSection'
import { backendSkills, frontEndskills, workList } from "../../data"
import Skillset from "../../components/skills"
import Workcard from "../../components/work"

const About = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        
        <section>
            <Header/>
            <StarryBG/>
            <PageWrapper>
                <Introduction/>
                <CenteredSection
                    title='My Skills'
                    subTitle='Current stats. I hope to keep improving this list'
                    content={<>
                        <Skillset skills={frontEndskills}/>
                        <Skillset skills={backendSkills}/>
                    </>}
                    theme='light'
                />
                <CenteredSection
                    title='My Work'
                    subTitle={`Here are a few projects I've worked on recently. Want to see more? Email me.`}
                    content={<div className="skillRow flex flex-wrap">
                        {workList.map((work, index) => <Workcard key={index} work={work}/>)}
                    </div>}
                    theme='dark'
                />
                {aboutContents.map(content => <ContentSection data={content}/>)}
             </PageWrapper>
        </section>
    )
}

export default About