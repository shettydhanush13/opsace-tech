import React, { useEffect } from "react";
import "./styles.css";
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