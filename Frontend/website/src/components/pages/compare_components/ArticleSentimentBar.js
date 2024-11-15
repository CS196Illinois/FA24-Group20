import React, { useState } from "react";
import "../ComparePage.css";
import { useCompareContext } from "./CompareContext";

export function ArticleSentimentBar1() {
    const { sentimentPercent1 } = useCompareContext();
    const [sentiment, setSentiment] = useState("");

	var r = document.querySelector(":root");
	var color = "";
	var topRightBorder = "";
	if (sentimentPercent1 >= 0) {
		color = "#EF3D3D";
	} else {
		color = "#58A3F4";
	}
	if (Math.abs(sentimentPercent1) >= 98.5) {
		topRightBorder = "10px";
	} else {
		topRightBorder = "0px";
	}
	r.style.setProperty("--sentiment-top-right-border1", `${topRightBorder}`);
	if (
		(-2 <= sentimentPercent1 && sentimentPercent1 < 0) ||
		(0 < sentimentPercent1 && sentimentPercent1 <= 2)
	) {
		r.style.setProperty("--sentiment-width1", `2%`);
	} else {
		r.style.setProperty("--sentiment-width1", `${Math.abs(sentimentPercent1)}%`);
	}
	r.style.setProperty("--sentiment-color1", `${color}`);

	return (
		<div className='sentimentContainer1'>
			<span className='sentimentText1'>{`${sentiment} (${Math.abs(
				sentimentPercent1
			)}%)`}</span>
			<div className='sentimentFiller1' />
		</div>
	);
}

export function ArticleSentimentBar2() {
    const { sentimentPercent2 } = useCompareContext();
    const [sentiment, setSentiment] = useState("");

	var r = document.querySelector(":root");
	var color = "";
	var topRightBorder = "";
	if (sentimentPercent2 >= 0) {
		color = "#EF3D3D";
	} else {
		color = "#58A3F4";
	}
	if (Math.abs(sentimentPercent2) >= 98.5) {
		topRightBorder = "10px";
	} else {
		topRightBorder = "0px";
	}
	r.style.setProperty("--sentiment-top-right-border2", `${topRightBorder}`);
	if (
		(-2 <= sentimentPercent2 && sentimentPercent2 < 0) ||
		(0 < sentimentPercent2 && sentimentPercent2 <= 2)
	) {
		r.style.setProperty("--sentiment-width2", `2%`);
	} else {
		r.style.setProperty("--sentiment-width2", `${Math.abs(sentimentPercent2)}%`);
	}
	r.style.setProperty("--sentiment-color2", `${color}`);

	return (
		<div className='sentimentContainer2'>
			<span className='sentimentText2'>{`${sentiment} (${Math.abs(
				sentimentPercent2
			)}%)`}</span>
			<div className='sentimentFiller2' />
		</div>
	);
}
