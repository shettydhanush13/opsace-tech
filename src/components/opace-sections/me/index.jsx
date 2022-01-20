import React from "react";
import { useNavigate } from "react-router";
import "./styles.css";

const astronaut = () => {
    return <>
        <div class="backg">
		<div class="planet">
			<div class="r1"></div>
			<div class="r2"></div>
			<div class="r3"></div>
			<div class="r4"></div>
			<div class="r5"></div>
			<div class="r6"></div>
			<div class="r7"></div>
			<div class="r8"></div>
			<div class="shad"></div>
		</div>
		<div class="stars">
			<div class="s1"></div>
			<div class="s2"></div>
			<div class="s3"></div>
			<div class="s4"></div>
			<div class="s5"></div>
			<div class="s6"></div>
		</div>
		<div class="an">
			<div class="tank"></div>
			<div class="astro">
					
					<div class="helmet">
						<div class="glass">
							<div class="shine"></div>
						</div>
					</div>
					<div class="dress">
						<div class="c">
							<div class="btn1"></div>
							<div class="btn2"></div>
							<div class="btn3"></div>
							<div class="btn4"></div>
						</div>
					</div>
					<div class="handl">
						<div class="handl1">
							<div class="glovel">
								<div class="thumbl"></div>
								<div class="b2"></div>
							</div>
						</div>
					</div>
					<div class="handr">
						<div class="handr1">
							<div class="glover">
								<div class="thumbr"></div>
								<div class="b1"></div>
							</div>
						</div>
					</div>
					<div class="legl">
						<div class="bootl1">
							<div class="bootl2"></div>
						</div>
					</div>
					<div class="legr">
						<div class="bootr1">
							<div class="bootr2"></div>
						</div>
					</div>
					<div class="pipe">
						<div class="pipe2">
							<div class="pipe3"></div>
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
            <p className="aboutMe font-space flatingContainer">I'm a full stack developer working at Piktorlabs Inc. Prior to this, I worked as a software engineer at Moonraft innovation Labs, Bengaluru for 2 years. I am a graduate of UVCE, Bengaluru, where I majored in BE. I currently live in Bengaluru. When I’m not keeping busy with coding, I enjoy travelling and cooking. Moving around a lot inspired me to travel and explore the world around me. I love learning about the historical and cultural significance of the places i visit. I also maintain a travel website called Trippospace which provides one space solution for all the travel needs. My other hobbies are cooking and soccer. I love to cook and I'm getting pretty good at it. I also love to play soccer and cricket. I used to play soccer regularly before COVID hit the world. I love to watch soccer and cricket as well. My favorite teams are FC Barcelona and Royal Challegers Bengaluru.</p>
            <br />
            <div className="flex flex-row flex-align-center">
                <button className="primaryButton font-bold" onClick={() => navigate('/about-me')}>More about me</button>
            </div>
        </section>
    )
}

export default Me