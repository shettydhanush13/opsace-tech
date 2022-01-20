import React, { useState, useEffect } from "react";
import "./styles.scss";
import Workcard from "./workcard"
import { CloseButton } from '../../modules'

const Work = () => {
    const workList2 = [
        // {
        //     title: 'trippospace',
        //     description: 'description',
        //     logo: 'https://cdn-icons-png.flaticon.com/512/30/30514.png'
        // },
        {
            title: 'SkillOspace',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            logo: 'https://img.icons8.com/external-konkapp-outline-color-konkapp/344/external-guitar-player-stay-at-home-konkapp-outline-color-konkapp.png'
        },
        {
            title: 'FunOspace',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            logo: 'https://img.icons8.com/external-filled-outline-icons-pause-08/344/external-console-party2-filled-outline-icons-pause-08.png'
        },
        {
            title: 'DecentrOspace',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            logo: 'https://img.icons8.com/external-wanicon-lineal-color-wanicon/344/external-blockchain-nft-wanicon-lineal-color-wanicon.png'
        },
        // {
        //     title: 'decentrospace',
        //     description: 'description',
        //     logo: 'https://cdn-icons-png.flaticon.com/512/30/30514.png'
        // },
        // {
        //     title: 'techospace',
        //     description: 'coming soon...',
        //     logo: 'https://cdn-icons-png.flaticon.com/512/30/30514.png'
        // },
        // {
        //     title: 'ethospace',
        //     description: 'coming soon...',
        //     logo: 'https://www.freeiconspng.com/uploads/puzzle-icon-31.png'
        // }
    ]

    const [activeWork, setActiveWork] = useState({})

    const click = (id, work) => {
        setActiveWork(work)
        document.querySelector("#modal-container").classList.remove('out');
        document.querySelector("#modal-container").classList.add(id);
        document.body.classList.add("modal-active");
    }

    const clickOut = (id) => {
        document.querySelector("#modal-container").classList.add('out');
        document.body.classList.remove("modal-active");
        setTimeout(() => {
            document.querySelector("#modal-container").classList.remove(id);
        }, 500)
    }

    const modal = () => {
        return <div id="modal-container" onClick={() => clickOut('four')}>
            <div class="modal-background">
                <div class="modal">
                    <CloseButton onClick={() => clickOut('four')}/>
                    <h2>{activeWork.title}</h2>
                    <p>{activeWork.description}</p>
                </div>
            </div>
        </div>
    }

    useEffect(() => {
        setTimeout(() => {
            document.getElementById('introDesc2').classList.add('flatingContainer')
        }, 500)
    }, [])

    return (
        <section className="skillsContainer flex flex-column flex-align-center bg-color-secondary font-color-primary full-view">
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            {modal()}
            <h1 id='introDesc2' className="introRole font-bold font-space flatingContainer fade-in box-1">A void space where my random ideas come into life</h1>
            <h3 id='introDesc3' className="introDesc2 font-thin font-space fade-in box-1">Here are a few of them.</h3>
            <div className="skillRow flex flex-wrap">
                {workList2.map((work, index) => <Workcard work={work} index={index} click={click}/>)}
            </div>
        </section>        
    )
}

export default Work