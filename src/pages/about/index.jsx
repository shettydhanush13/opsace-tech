import React, { useEffect } from "react";
import "./styles.css";
import Header from '../../components/header'

import {
    Introduction,
    Skills,
    Work,
    Me,
    Contact
} from "../../components/about-sections"

const About = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <>
            <Header page='about'/>
            <section>
                <Introduction/>
                <Skills/>
                <Work/>
                <Me/>
                <Contact/>
            </section>
        </>
    )
}

export default About