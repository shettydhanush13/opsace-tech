import React, { useState } from "react";
import "./styles.scss";
import Workcard from "./workcard"
import ProjectDescriptionModal from '../../modal/ProjectDescriptionModal'
import { projects } from '../../data'

const Work = () => {
    
    const [activeWork, setActiveWork] = useState(null)

    const open = (work) => {
        setActiveWork(work)
        const container = document?.querySelector("#modal-container");
        container?.classList.remove('out');
        container?.classList.add('open-modal');
        document?.body?.classList.add("modal-active");
    }

    return (
        <>
            <ProjectDescriptionModal activeWork={activeWork} setActiveWork={setActiveWork}/>
            <section className="skillsContainer flex flex-column flex-align-center bg-color-secondary font-color-primary">
                <h1 className="introRole font-space fade-in box-1">A void space where my random ideas come into life</h1>
                <h3 className="introDesc2 font-space fade-in box-1">Here are a few of them.</h3>
                <div className="skillRow flex flex-wrap">
                    {projects.map((project, index) => <Workcard key={index} project={project} index={index} click={open}/>)}
                </div>
            </section>   
        </>     
    )
}

export default Work