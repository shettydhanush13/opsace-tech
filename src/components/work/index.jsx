import React from "react";
import { FancyCard } from '../../hoc'
import "./styles.scss";

const Workcard = ({ work }) => {

    const openLink = url => {
        window.open(url, "_blank")
    }

    return (
        <FancyCard>
            <p className="font-bold">{work.title}</p>
            <p className="work-description text-center">{work.discription}</p>
            {work.github && <img height={40} className='projectLink' onClick={() => window.open(work.github, "_blank")} src={require(`../../assets/social/github_black.svg`).default} alt=""/>}
            {work.buttonText && <button className='primaryButton' onClick={() => openLink(work.link)}>{work.buttonText}</button>}
            <br />
            <div className="flex workSkillContainer">
                {work.skills.map(skill => (
                    <img key={skill} loading='lazy' src={require(`../../assets/icons/${skill}.svg`).default} alt=""/>
                ))}
            </div>
        </FancyCard>
    )
}

export default Workcard