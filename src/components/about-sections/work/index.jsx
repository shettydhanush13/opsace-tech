import React from "react";
import "./styles.css";
import Workcard from "./workcard"
import { workList } from "../../../data"

const Work = () => {
    return (
        <section className="skillsContainer flex flex-column flex-align-center bg-color-secondary font-color-primary full-view">
            <h1 className="introRole font-bold">My Work</h1>
            <h3 className="introDesc2 font-thin">Here are a few projects I've worked on recently. Want to see more? Email me.</h3>
            <div className="skillRow flex flex-wrap">
                {workList.map((work, index) => <Workcard key={index} work={work}/>)}
            </div>
        </section>        
    )
}

export default Work