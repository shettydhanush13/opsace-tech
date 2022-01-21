import React, { useEffect } from "react";
import "./styles.scss";

const Workcard = ({ project, click, index }) => {

    const { title, logo, description } = project;

    useEffect(() => {
        document?.getElementById(title)?.classList.add('flatingContainer')
    }, [title]);

    return (
        <>
        <div onClick={() => click(project)}  id={title} className={`flex flex-column flex-align-center worklist-container relative fancy-card fade-in box-${index+2} clickable`}>
            <div id={title} className="worklist flex flex-column flex-align-center">
                <img loading='lazy' src={logo} alt="" />
                <p className="font-bold">{title}</p>
                <p className="work-description text-center">{description}</p>
            </div>
            <div className="middle"></div>
            <div className="bottom"></div>
        </div>
        </>
    )
}

export default Workcard