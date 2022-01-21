import React from "react";
import { useNavigate } from "react-router";
import "./styles.scss";

const ContentSection = ({ data }) => {
    const { title, content, buttonText=null, buttonRoute=null, link=null, theme } = data;
    const navigate = useNavigate();
    const background = theme === 'light' ? 'bg-color-secondary' : 'bg-color-primary'
    const fontColor = theme === 'light' ? 'font-color-primary' : 'font-color-secondary'
    const float = theme === 'light' ? 'flatingContainer' : ''

    const onButtonClick = () => {
        if(link) window.open(link, "_blank")
        else navigate(`/${buttonRoute}`)
    }

    return (
        <section className={`${background} ${fontColor} section-component`}>
            <h1 className={`introRole ${theme === 'light' ? 'font-space' : 'font-bold'}`}>{title}</h1>
            <p className={`aboutMe ${theme === 'light' ? 'font-space' : 'font-regular'} ${float}`}>{content}</p>
            {buttonText && <br />}
            {(buttonText || link) && <div className={`flex flex-row flex-align-center ${float}`}>
                <button className="primaryButton font-bold" onClick={onButtonClick}>{buttonText}</button>
            </div>}
        </section>
    )
}

export default ContentSection