import React from "react";
import "../ComparePage.css";
import { useCompareContext } from "./CompareContext";

function ContrastBar() {
    const { contrastPercent } = useCompareContext();
	const contrastLevels = [
		"Weak Contrast ",
		"Moderately Weak Contrast ",
		"Moderate Contrast ",
		"Moderately Strong Contrast ",
		"Strong Contrast ",
	];
	var contrast = "";
	if (contrastPercent < 20) {
		contrast = contrastLevels[0];
	} else if (contrastPercent < 40) {
		contrast = contrastLevels[1];
	} else if (contrastPercent < 60) {
		contrast = contrastLevels[2];
	} else if (contrastPercent < 80) {
		contrast = contrastLevels[3];
	} else if (contrastPercent <= 100) {
		contrast = contrastLevels[4];
	}
	var r = document.querySelector(":root");
	var rightBorder = "";
	if (contrastPercent >= 98.5) {
		rightBorder = "50px";
	} else {
		rightBorder = "0px";
	}
	r.style.setProperty("--contrast-border", `${rightBorder}`);
	if (contrastPercent < 2) {
		r.style.setProperty("--contrast-width", `2%`);
	} else {
		r.style.setProperty("--contrast-width", `${contrastPercent}%`);
	}
	return (
		<div className='contrastContainer'>
			<span className='contrastText'>{`${contrast} (${contrastPercent}%)`}</span>
			<div className='contrastFiller' />
		</div>
	);
}

export default ContrastBar;