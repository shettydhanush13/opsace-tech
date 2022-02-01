import React from 'react';
// import {
//     Skills,
//     Work,
//     Me,
//     Contact
// } from '../components/about-sections'
import { CloseButton } from '../module'
import './styles.scss'

const ProjectDescriptionModal = ({ activeWork }) => {
    
    const close = (e) => {
        e.stopPropagation();
        const container = document?.querySelector("#modal-container");
        container?.classList.add('out');
        document?.body?.classList.remove("modal-active");
        setTimeout(() => {
            container?.classList.remove('open-modal');
        }, 500)
    }
    
    return <div id="modal-container">
        <div className="modal-background">
            <div className="modal">
                <CloseButton onClick={(e) => close(e)}/>
                <h2>{activeWork?.title}</h2>
                <p>{activeWork?.description}</p>
            </div>
        </div>
    </div>
};

export default ProjectDescriptionModal;