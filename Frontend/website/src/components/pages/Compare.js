/**
 * @author William Lei &lt;wllei2@illinois.edu>
 */

import "./ComparePage.css";
import React, { useState } from "react";
import { FileUploadProvider } from "./components/FileUploadContext";
import { useFileUpload } from "./components/FileUploadContext";
import FileUpload from "./components/FileUpload";

function URLBox1() {
	const [text, setText] = useState("");
	const handleChange = (event) => {
		setText(event.target.value);
	};
	return (
		<div>
			<input
				className='urlBox'
				type='text'
				value={text}
				onChange={handleChange}
				placeholder='Paste Link Here or Upload Article 1 (.html) &#8594;'
			/>
		</div>
	);
}

function URLBox2() {
	const [text, setText] = useState("");
	const handleChange = (event) => {
		setText(event.target.value);
	};
	return (
		<div>
			<input
				className='urlBox'
				type='text'
				value={text}
				onChange={handleChange}
				placeholder='Paste Link Here or Upload Article 2 (.html) &#8594;'
			/>
		</div>
	);
}

function UploadBox() {
	return (
		<div className='upload'>
			<ul>
				<li>
					<div>
						<URLBox1 />
					</div>
				</li>
				<li>
                    <FileUpload id="file1"/>
				</li>
			</ul>
			<ul className='upload2'>
				<li>
					<div>
						<URLBox2 />
					</div>
				</li>
				<li>
                    <FileUpload id="file2"/>
				</li>
			</ul>
		</div>
	);
}

function AspectBox() {
	const [text, setText] = useState("");
	const handleChange = (event) => {
		setText(event.target.value);
	};
	return (
		<div>
			<input
				className='aspectBox'
				type='text'
				value={text}
				onChange={handleChange}
				placeholder='Enter a topic to analyze i.e. "Harris" (leave blank for automatic analysis)'
			/>
		</div>
	);
}

function CompareButton() {
	const { isFormValid } = useFileUpload();

    const handleSubmit = () => {

    };

	return (
		<div>
			<button disabled={!isFormValid} onClick={handleSubmit}>
				Compare!
			</button>
		</div>
	);
}

function ContrastBar({ percentage }) {
	const contrastLevels = [
		"Weak Contrast ",
		"Moderately Weak Contrast ",
		"Moderate Contrast ",
		"Moderately Strong Contrast ",
		"Strong Contrast ",
	];
	var contrast = "";
	if (percentage < 20) {
		contrast = contrastLevels[0];
	} else if (percentage < 40) {
		contrast = contrastLevels[1];
	} else if (percentage < 60) {
		contrast = contrastLevels[2];
	} else if (percentage < 80) {
		contrast = contrastLevels[3];
	} else if (percentage <= 100) {
		contrast = contrastLevels[4];
	}
	var r = document.querySelector(":root");
	var rightBorder = "";
	if (percentage >= 98.5) {
		rightBorder = "50px";
	} else {
		rightBorder = "0px";
	}
	r.style.setProperty("--contrast-border", `${rightBorder}`);
	if (percentage < 2) {
		r.style.setProperty("--contrast-width", `2%`);
	} else {
		r.style.setProperty("--contrast-width", `${percentage}%`);
	}
	return (
		<div className='contrastContainer'>
			<span className='contrastText'>{`${contrast} (${percentage}%)`}</span>
			<div className='contrastFiller' />
		</div>
	);
}

function ArticleSentimentBar1({ percentage }) {
	const sentimentLevels = [
		"Strongly Left-Leaning ",
		"Moderately Strongly Left-Leaning ",
		"Moderately Left-Leaning ",
		"Moderately Weakly Left-Leaning ",
		"Weakly Left-Leaning ",
		"Neither Left Nor Right-Leaning ",
		"Weakly Right-Leaning ",
		"Moderately Weakly Right-Leaning ",
		"Moderately Right-Leaning ",
		"Moderately Strongly Right-Leaning ",
		"Strongly Right-Leaning ",
	];

	var sentiment = "";
	if (percentage < -80) {
		sentiment = sentimentLevels[0];
	} else if (percentage < -60) {
		sentiment = sentimentLevels[1];
	} else if (percentage < -40) {
		sentiment = sentimentLevels[2];
	} else if (percentage < -20) {
		sentiment = sentimentLevels[3];
	} else if (percentage < -1) {
		sentiment = sentimentLevels[4];
	} else if (-1 <= percentage && percentage <= 1) {
		sentiment = sentimentLevels[5];
	} else if (percentage < 20) {
		sentiment = sentimentLevels[6];
	} else if (percentage < 40) {
		sentiment = sentimentLevels[7];
	} else if (percentage < 60) {
		sentiment = sentimentLevels[8];
	} else if (percentage < 80) {
		sentiment = sentimentLevels[9];
	} else if (percentage <= 100) {
		sentiment = sentimentLevels[10];
	}

	var r = document.querySelector(":root");
	var color = "";
	var topRightBorder = "";
	if (percentage >= 0) {
		color = "#EF3D3D";
	} else {
		color = "#58A3F4";
	}
	if (Math.abs(percentage) >= 98.5) {
		topRightBorder = "10px";
	} else {
		topRightBorder = "0px";
	}
	r.style.setProperty("--sentiment-top-right-border1", `${topRightBorder}`);
	if (
		(-2 <= percentage && percentage < 0) ||
		(0 < percentage && percentage <= 2)
	) {
		r.style.setProperty("--sentiment-width1", `2%`);
	} else {
		r.style.setProperty("--sentiment-width1", `${Math.abs(percentage)}%`);
	}
	r.style.setProperty("--sentiment-color1", `${color}`);

	return (
		<div className='sentimentContainer1'>
			<span className='sentimentText1'>{`${sentiment} (${Math.abs(
				percentage
			)}%)`}</span>
			<div className='sentimentFiller1' />
		</div>
	);
}

function ArticleSentimentBar2({ percentage }) {
	const sentimentLevels = [
		"Strongly Left-Leaning ",
		"Moderately Strongly Left-Leaning ",
		"Moderately Left-Leaning ",
		"Moderately Weakly Left-Leaning ",
		"Weakly Left-Leaning ",
		"Neither Left Nor Right-Leaning ",
		"Weakly Right-Leaning ",
		"Moderately Weakly Right-Leaning ",
		"Moderately Right-Leaning ",
		"Moderately Strongly Right-Leaning ",
		"Strongly Right-Leaning ",
	];

	var sentiment = "";
	if (percentage < -80) {
		sentiment = sentimentLevels[0];
	} else if (percentage < -60) {
		sentiment = sentimentLevels[1];
	} else if (percentage < -40) {
		sentiment = sentimentLevels[2];
	} else if (percentage < -20) {
		sentiment = sentimentLevels[3];
	} else if (percentage < -1) {
		sentiment = sentimentLevels[4];
	} else if (-1 <= percentage && percentage <= 1) {
		sentiment = sentimentLevels[5];
	} else if (percentage < 20) {
		sentiment = sentimentLevels[6];
	} else if (percentage < 40) {
		sentiment = sentimentLevels[7];
	} else if (percentage < 60) {
		sentiment = sentimentLevels[8];
	} else if (percentage < 80) {
		sentiment = sentimentLevels[9];
	} else if (percentage <= 100) {
		sentiment = sentimentLevels[10];
	}

	var r = document.querySelector(":root");
	var color = "";
	var topRightBorder = "";
	if (percentage >= 0) {
		color = "#EF3D3D";
	} else {
		color = "#58A3F4";
	}
	if (Math.abs(percentage) >= 98.5) {
		topRightBorder = "10px";
	} else {
		topRightBorder = "0px";
	}
	r.style.setProperty("--sentiment-top-right-border2", `${topRightBorder}`);
	if (
		(-2 <= percentage && percentage < 0) ||
		(0 < percentage && percentage <= 2)
	) {
		r.style.setProperty("--sentiment-width2", `2%`);
	} else {
		r.style.setProperty("--sentiment-width2", `${Math.abs(percentage)}%`);
	}
	r.style.setProperty("--sentiment-color2", `${color}`);

	return (
		<div className='sentimentContainer2'>
			<span className='sentimentText2'>{`${sentiment} (${Math.abs(
				percentage
			)}%)`}</span>
			<div className='sentimentFiller2' />
		</div>
	);
}

function ArticlePane1({ percentage }) {
	return (
		<div className='articlePane'>
			<ArticleSentimentBar1 percentage={percentage} />
		</div>
	);
}

function ArticlePane2({ percentage }) {
	return (
		<div className='articlePane'>
			<ArticleSentimentBar2 percentage={percentage} />
		</div>
	);
}

function LegendPair({ color, value }) {
	console.log(color);
	return (
		<div className='legendPair'>
			<div
				style={{ backgroundColor: color }}
				className='legendColor'
			></div>
			<div className='legendText'>
				<p>{value}</p>
			</div>
		</div>
	);
}

function Legend() {
	return (
		<div className='legendBox'>
			<ul>
				<li></li>
				<li>
					<LegendPair color='#FFDA57' value='statements' />
				</li>
				<li>
					<LegendPair color='#4BA4ED' value='statistics' />
				</li>
				<li>
					<LegendPair color='#EC7ACE' value='quotes' />
				</li>
				<li>
					<LegendPair color='#26EBA4' value='provocative language' />
				</li>
				<li></li>
			</ul>
		</div>
	);
}

function Summary({ content }) {
	return (
		<div className='summaryBox' id='scroll-text'>
			<ul>
				<li className='summaryHeading'>Summary:</li>
				<li className='summaryContent'>{content}</li>
			</ul>
		</div>
	);
}

function Compare() {
	const [contrastPercent, setContrastPercent] = useState(0.0);
	const [article1Percent, setArticle1Percent] = useState(0.0);
	const [article2Percent, setArticle2Percent] = useState(0.0);
	const [summaryText, setSummaryText] = useState("");
	return (
		<FileUploadProvider>
			<div className='pageContent'>
				<UploadBox />
				<ul>
					<li>
						<AspectBox />
					</li>
					<li>
						<CompareButton />
					</li>
				</ul>
				<ContrastBar percentage={contrastPercent} />
				<div className='articlePaneBox'>
					<ArticlePane1 percentage={article1Percent} />
					<ArticlePane2 percentage={article2Percent} />
				</div>
				<Legend />
				<Summary content={summaryText} />
			</div>
		</FileUploadProvider>
	);
}

export default Compare;
