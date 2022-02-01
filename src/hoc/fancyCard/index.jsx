import React from "react";
import './styles.scss'

const FancyCard = ({ children, onClick, className='' }) => {
    return (
        <div onClick={onClick} className={`flex flex-column flex-align-center worklist-container relative fancy-card ${className}`}>
            <div className="worklist flex flex-column flex-align-center">{children}</div>
            <div className="middle"></div>
            <div className="bottom"></div>
        </div>
    )
}

export default FancyCard