import React from "react";
import "./styles.scss";

const Skillset = ({skills}) => {
    return (
        <div className="skillsContainer skillRow flex">
            {skills.map(skill => (
                <div key={skill.title} className="flex flex-column flex-align-center skillsImageContainer">
                    <img loading='lazy' height='120' src={require(`../../assets/icons/${skill.image}.svg`).default} alt=""/>
                    <span>{skill.title}</span>
                </div>  
            ))}
        </div>
    )
}

export default Skillset