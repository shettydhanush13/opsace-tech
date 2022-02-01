import React from "react";
import "./styles.scss";

const CenteredSection = ({ title, subTitle, content, theme }) => {
    const background = theme !== 'light' ? 'bg-color-secondary' : 'bg-color-primary'
    const fontColor = theme !== 'light' ? 'font-color-primary' : 'font-color-secondary'
    return (
        <section className={`skillsContainer flex flex-column  flex-align-center ${background} ${fontColor} full-view`}>
            <h1 className="introRole font-bold">{title}</h1>
            <h3 className="introDesc2 font-thin">{subTitle}</h3>
            {content}
        </section>
    )
}

export default CenteredSection