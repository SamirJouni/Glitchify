import React from "react";
import styled, { keyframes } from "styled-components";

const generateAnimation = (steps = 20) => {
	let animation = "";
	for (let i = 0; i < steps; i++) {
		animation += `${((i * 1) / steps) * 100}%{clip: rect(${Math.random() *
			100}px, 9999px,${Math.random() * 100}px, 0);}`;
	}
	return animation;
};

const Glitchify = props => {
	const glitch = keyframes`
			${generateAnimation(props.steps)}
			`;
	const Glitched = styled.div`
	font-family: "Comfortaa", sans-serif;
	font-size: ${props.fontSize ? props.fontSize : "1rem"};
	color: ${props.color ? props.color : 'black'};
	text-align: center;
	position: relative;
	margin-top: 3vw;
	margin-right: auto;
	margin-left: auto;

	&,
	&:before,
	&:after {
		width: fit-content;
	}
	&:before,
	&:after {
		content: "${props.children}";
		position: absolute;
		top: 0;
		color: #464748;
		background: white;
		overflow: hidden;
		clip: rect(0, 900px, 0, 0);
	}
	&:before {
		left: -2px;
		text-shadow: 1px 0 blue;
		animation: ${glitch} 3s infinite linear alternate-reverse;
	}
	&:after {
		left: 2px;
		text-shadow: -1px 0 red;
		animation: ${glitch} 2s infinite linear alternate-reverse;
	}
`;
	return <Glitched id="copyright">{props.children}</Glitched>;
};

export default Glitchify;
