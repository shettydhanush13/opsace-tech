import React from "react";
import { FancyCard } from '../../hoc'
import "./styles.scss";

const Workcard = ({ project, click, index }) => {
    const { title, logo, description } = project;
    return <FancyCard onClick={() => click(project)} className={`fade-in box-${index+2}`}>
        <img loading='lazy' src={logo} alt="" />
        <p className="font-bold">{title}</p>
        <p className="work-description text-center">{description}</p>
    </FancyCard>
}

export default Workcard