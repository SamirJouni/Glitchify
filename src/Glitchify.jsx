import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";


const generateAnimation = (steps = 20) => {
	let animation = "";
	for (let i = 0; i < steps; i++) {
		animation += `${((i * 1) / steps) * 100}%{clip: rect(${Math.random() *
			100}px, 9999px,${Math.random() * 100}px, 0);}`;
	}
	return animation;
};

const Glitchify = ({children, steps, font, fontSize, color, background}) => {
	const glitch = keyframes`
			${generateAnimation(steps)}
			`;
	const Glitched = styled.div`
	font-family: ${font};
	font-size: ${fontSize};
	color: ${color};
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
		content: "${children}";
		position: absolute;
		top: 0;
		color: ${color};
		background: ${background};
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
	return <Glitched>{children}</Glitched>;
};

Glitchify.propTypes = {
	steps: PropTypes.number,
	font: PropTypes.string,
	fontSize: PropTypes.string,
	color: PropTypes.string,
	background: PropTypes.string
}
Glitchify.defaultProps = {
	children: 'Please Enter A Custom Text!',
	steps: 20,
	font: 'sans-serif',
	fontSize: '1rem',
	color: 'black',
	background: 'white'
}

export default Glitchify;
