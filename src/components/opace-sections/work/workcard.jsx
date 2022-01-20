import React, { useEffect } from "react";
import "./styles.scss";

const Workcard = ({ work, click, index }) => {
    useEffect(() => {
        document.getElementById(work.title).classList.add('flatingContainer')
    }, [work.title])
    return (
        <>
        <div id={work.title} className={`flex flex-column flex-align-center worklist-container relative fancy-card fade-in box-${index+2}`}>
            <div id={work.title} className="worklist flex flex-column flex-align-center">
                <img loading='lazy' src={work.logo} alt="" />
                <p className="font-bold">{work.title}</p>
                <p className="work-description text-center">{work.description}</p>
                <div class="content">
                    <div class="buttons">
                        <div id="four" onClick={() => click('four', work)} class="button">Explore More...</div>
                    </div>
                </div>
            </div>
            <div class="middle"></div>
            <div class="bottom"></div>
        </div>
        </>
    )
}

export default Workcard