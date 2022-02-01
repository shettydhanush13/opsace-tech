import React from "react";
import "./styles.scss";

const Workcard = ({work}) => {

    const openLink = url => {
        window.open(url, "_blank")
    }

    return (
        <div className="flex flex-column flex-align-center worklist-container relative fancy-card">
            <div className="worklist flex flex-column flex-align-center">
                <p className="font-bold">{work.title}</p>
                <p className="work-description text-center">{work.discription}</p>
                <span className="projectLink font-thin" onClick={() => openLink(work.link)}>view</span>
                <div className="flex workSkillContainer">
                    {work.skills.map(skill => (
                        <img key={skill} loading='lazy' src={require(`../../assets/icons/${skill}.svg`).default} alt=""/>
                    ))}
                </div>
            </div>
            <div className="middle"></div>
            <div className="bottom"></div>
        </div>
    )
}

export default Workcard