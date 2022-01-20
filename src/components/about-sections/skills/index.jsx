import React from "react";
import "./styles.css";
import { backendSkills, frontEndskills } from "../../../data"
import Skillset from "./Skillset"

const Skills = () => {
    return (
        <section className="skillsContainer flex flex-column  flex-align-center bg-color-primary font-color-secondary full-view">
            <h1 className="introRole font-bold">My Skills</h1>
            <h3 className="introDesc2 font-thin">Current stats. I hope to keep improving this list</h3>
            <Skillset skills={frontEndskills}/>
            <Skillset skills={backendSkills}/>
        </section>
    )
}

export default Skills