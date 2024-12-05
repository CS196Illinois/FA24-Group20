import React from "react";
import "../ComparePage.css";
import { useCompareContext } from "./CompareContext";

const sentimentLevels = [
	"Negative Sentiment ",
	"Moderately Negative Sentiment ",
	"Neutral Sentiment ",
	"Moderately Positive Sentiment ",
	"Positive Sentiment ",
];

export function ArticleSentimentBar1() {
	const { sentimentPercent1 } = useCompareContext();
	var sentiment = "";
	if (sentimentPercent1 < 0) {
	} else if (sentimentPercent1 < 20) {
		sentiment = sentimentLevels[0];
	} else if (sentimentPercent1 < 40) {
		sentiment = sentimentLevels[1];
	} else if (sentimentPercent1 < 60) {
		sentiment = sentimentLevels[2];
	} else if (sentimentPercent1 < 80) {
		sentiment = sentimentLevels[3];
	} else if (sentimentPercent1 <= 100) {
		sentiment = sentimentLevels[4];
	}
	var r = document.querySelector(":root");
	var topRightBorder = "";

	if (sentimentPercent1 >= 98.5) {
		topRightBorder = "10px";
	} else {
		topRightBorder = "0px";
	}
	r.style.setProperty("--sentiment-top-right-border1", `${topRightBorder}`);
	if (0 < sentimentPercent1 && sentimentPercent1 <= 2) {
		r.style.setProperty("--sentiment-width1", `2%`);
	} else {
		r.style.setProperty("--sentiment-width1", `${sentimentPercent1}%`);
	}
	if (sentimentPercent1 >= 0) {
		sentiment = `${sentiment} (${sentimentPercent1}%)`;
	}
	return (
		<div className='sentimentContainer1'>
			<span className='sentimentText1'>{sentiment}</span>
			<div className='sentimentFiller1' />
		</div>
	);
}

export function ArticleSentimentBar2() {
	const { sentimentPercent2 } = useCompareContext();
	var sentiment = "";
	if (sentimentPercent2 < 0) {
	} else if (sentimentPercent2 < 20) {
		sentiment = sentimentLevels[0];
	} else if (sentimentPercent2 < 40) {
		sentiment = sentimentLevels[1];
	} else if (sentimentPercent2 < 60) {
		sentiment = sentimentLevels[2];
	} else if (sentimentPercent2 < 80) {
		sentiment = sentimentLevels[3];
	} else if (sentimentPercent2 <= 100) {
		sentiment = sentimentLevels[4];
	}
	var r = document.querySelector(":root");
	var topRightBorder = "";

	if (sentimentPercent2 >= 98.5) {
		topRightBorder = "10px";
	} else {
		topRightBorder = "0px";
	}
	r.style.setProperty("--sentiment-top-right-border2", `${topRightBorder}`);
	if (0 < sentimentPercent2 && sentimentPercent2 <= 2) {
		r.style.setProperty("--sentiment-width2", `2%`);
	} else {
		r.style.setProperty("--sentiment-width2", `${sentimentPercent2}%`);
	}
	if (sentimentPercent2 >= 0) {
		sentiment = `${sentiment} (${sentimentPercent2}%)`;
	}
	return (
		<div className='sentimentContainer2'>
			<span className='sentimentText2'>{sentiment}</span>
			<div className='sentimentFiller2' />
		</div>
	);
}
