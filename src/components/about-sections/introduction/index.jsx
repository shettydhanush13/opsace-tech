import React from "react";
import "./styles.css";
import { social } from "../../../data"
import { ScrollDown } from "../../modules";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faTasks } from '@fortawesome/free-solid-svg-icons'

const Introduction = () => {

    const download = () => {
        const link = document.createElement("a");
        link.setAttribute('download', "dhanush-s-shetty-resume");
        link.href = require("../../../assets/profile/dhanush-s-shetty-resume.pdf").default;
        document.body.appendChild(link);
        link.click();
        link.remove();
    }

    return (
        <section className="flex flex-row bg-color-secondary font-color-primary full-view intro-container">
            <ScrollDown/>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <section className="hideInMobile imageContainer flex flex-align-center">
                <img loading='lazy' className="profileImage flatingContainer" src={'https://www.nicepng.com/png/full/266-2666972_software-developer.png'} alt=''/>
            </section>
            <section className="flex flex-column flex-justify-center">
                <div className="introContainer">
                    <div className="introName noMargin">
                        <h1 className='noMarginTop'>Hi, I'm Dhanush</h1>
                    </div>
                    <div className="introRoleContainer">
                        <p className="introRole">Full-Stack Developer</p>
                        <p className="introAddress"><FontAwesomeIcon icon={faMapMarkerAlt}/>&nbsp;&nbsp;Somewhere between web 2.0 and web 3.0</p>
                        <p className="introDesc"><FontAwesomeIcon icon={faTasks}/>&nbsp;&nbsp;Travelling or cooking when not coding</p>
                    </div>
                </div>
                <div>
                    <ul className="contactBoxes flex flex-row flex flex-align-center">
                        {social.map(item => <li className="flex flex-align-center"><img onClick={() => window.open(item.link, "_blank")} src={require(`../../../assets/social/${item.name}.svg`).default} alt=""/></li>)}
                        <li className="flex flex-align-center">Resume <img onClick={() => download()}className="download" src={require(`../../../assets/social/download.svg`).default} alt=""/></li>
                    </ul>
                </div>
            </section>
        </section>
    )
}

export default Introduction