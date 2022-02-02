import React, { useEffect } from "react";
import { aboutContents } from '../../data'
import { backendSkills, frontEndskills, workList } from "../../data"
import {
    Introduction,
    ContentSection,
    CenteredSection,
    Skillset,
    Workcard
} from '../../components'
import { Wrapper } from '../../hoc'

const About = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return <Wrapper>
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
                {workList.map((work, index) => <Workcard index={index} work={work}/>)}
            </div>}
            theme='dark'
        />
        {aboutContents.map(content => <ContentSection data={content}/>)}
    </Wrapper>
}

export default About 