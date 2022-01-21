import React from "react";
import { useNavigate } from "react-router";
import "./styles.css";

const astronaut = () => {
    return <>
        <div className="backg">
		<div className="planet">
			<div className="r1"></div>
			<div className="r2"></div>
			<div className="r3"></div>
			<div className="r4"></div>
			<div className="r5"></div>
			<div className="r6"></div>
			<div className="r7"></div>
			<div className="r8"></div>
			<div className="shad"></div>
		</div>
		<div className="stars">
			<div className="s1"></div>
			<div className="s2"></div>
			<div className="s3"></div>
			<div className="s4"></div>
			<div className="s5"></div>
			<div className="s6"></div>
		</div>
		<div className="an">
			<div className="tank"></div>
			<div className="astro">
					
					<div className="helmet">
						<div className="glass">
							<div className="shine"></div>
						</div>
					</div>
					<div className="dress">
						<div className="c">
							<div className="btn1"></div>
							<div className="btn2"></div>
							<div className="btn3"></div>
							<div className="btn4"></div>
						</div>
					</div>
					<div className="handl">
						<div className="handl1">
							<div className="glovel">
								<div className="thumbl"></div>
								<div className="b2"></div>
							</div>
						</div>
					</div>
					<div className="handr">
						<div className="handr1">
							<div className="glover">
								<div className="thumbr"></div>
								<div className="b1"></div>
							</div>
						</div>
					</div>
					<div className="legl">
						<div className="bootl1">
							<div className="bootl2"></div>
						</div>
					</div>
					<div className="legr">
						<div className="bootr1">
							<div className="bootr2"></div>
						</div>
					</div>
					<div className="pipe">
						<div className="pipe2">
							<div className="pipe3"></div>
						</div>
					</div>
				</div>
			</div>
    </div>
    </>
}

const Me = () => {
    const navigate = useNavigate();
    return (
        <section className="bg-color-secondary font-color-primary section-component" style={{ paddingTop: 0 }}>
            {astronaut()}
            <h1 className="introRole font-space">About Me</h1>
            <p className="aboutMe font-space flatingContainer">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <br />
            <div className="flex flex-row flex-align-center">
                <button className="primaryButton font-bold" onClick={() => navigate('/about-me')}>More about me</button>
            </div>
        </section>
    )
}

export default Me