/**
 * @author William Lei &lt;wllei2@illinois.edu>
 */

import "./ComparePage.css";
import React, { useState } from "react";

function FileIcon1() {
	const [selectedFile1, setSelectedFile] = useState(null);

	const handleFileChange = (event) => {
		setSelectedFile(event.target.files[0]);
	};

	return (
		<div className='fileIcon'>
			<label for='fileInput'>
				<div className='fileIconSquare'>
					<img
						src={require("../../Icon.png")}
						width='12px'
						height='15px'
						alt='file icon'
					/>
				</div>
			</label>
			<input
				id='fileInput'
				type='file'
				accept='.html'
				onChange={handleFileChange}
			/>
			{selectedFile1 && <p>Selected file: {selectedFile1.name}</p>}
		</div>
	);
}

function FileIcon2() {
	const [selectedFile2, setSelectedFile] = useState(null);

	const handleFileChange = (event) => {
		setSelectedFile(event.target.files[0]);
	};

	return (
		<div className='fileIcon'>
			<label for='fileInput'>
				<div className='fileIconSquare'>
					<img
						src={require("../../Icon.png")}
						width='12px'
						height='15px'
						alt='file icon'
					/>
				</div>
			</label>
			<input
				id='fileInput'
				type='file'
				accept='.html'
				onChange={handleFileChange}
			/>
			{selectedFile2 && <p>Selected file: {selectedFile2.name}</p>}
		</div>
	);
}

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

function ContrastBar({ percent }) {
	const percentage = percent;
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

function ArticleSentimentBar1({ percent }) {
	const percentage = percent;
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

function ArticleSentimentBar2({ percent }) {
	const percentage = percent;
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

function ArticlePane1({ percent }) {
	return (
		<div className='articlePane'>
			<ArticleSentimentBar1 percent={percent} />
		</div>
	);
}

function ArticlePane2({ percent }) {
	return (
		<div className='articlePane'>
			<ArticleSentimentBar2 percent={percent} />
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
	return (
		<div>
			<div className='upload'>
				<ul>
					<li>
						<div>
							<URLBox1 />
						</div>
					</li>
					<li>
						<FileIcon1 />
					</li>
				</ul>
				<ul className='upload2'>
					<li>
						<div>
							<URLBox2 />
						</div>
					</li>
					<li>
						<FileIcon2 />
					</li>
				</ul>
			</div>
			<ContrastBar percent={0.5} />
			<div className='articlePaneBox'>
				<ArticlePane1 percent={-1.2} />
				<ArticlePane2 percent={-0.1} />
			</div>
			<Legend />
			<Summary
				content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet, elit quis sodales varius, nunc velit laoreet erat, ac maximus tellus tellus nec arcu. Fusce vitae pharetra nibh, non accumsan nunc. Phasellus at dictum justo. Vivamus ullamcorper dolor non lobortis tempor. Phasellus egestas eleifend aliquet. Nunc vitae ex ac nunc facilisis imperdiet. Vestibulum erat ligula, viverra ut dui vitae, aliquet placerat tellus. Fusce interdum semper turpis quis lobortis. Phasellus facilisis, nulla ut faucibus fringilla, augue arcu porta erat, a auctor lectus mi et ante. Sed ultrices lectus ut mauris suscipit aliquet. Sed ut interdum nisl. Fusce et erat sit amet nulla tincidunt convallis. Nulla aliquet urna in libero porta porttitor.

Aliquam at odio ac erat vehicula lobortis. Nullam metus urna, sodales sit amet pellentesque et, elementum vitae velit. Pellentesque congue sapien in ultrices sagittis. Vivamus vel venenatis dui. In eu tempus risus. Aenean scelerisque, erat id gravida porta, dui libero vehicula ipsum, non aliquet orci dolor semper libero. Integer eu leo sit amet orci consectetur mollis.

Cras congue congue nisl at fermentum. Nulla consectetur, ante ut egestas rutrum, quam quam pellentesque magna, ultrices pretium libero diam tincidunt dui. In commodo, sem et placerat ultricies, erat leo rutrum mauris, sed malesuada libero mauris eget nulla. Etiam ullamcorper augue eget lectus consectetur vehicula. Phasellus arcu nibh, dignissim a nibh at, fermentum volutpat felis. Pellentesque posuere mauris a massa luctus sollicitudin. Aliquam fermentum mauris vitae diam tempus vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum pretium suscipit venenatis. Quisque sagittis accumsan lobortis. Nam sed orci risus.

Cras tempor enim eu ex posuere, vitae finibus urna iaculis. Ut a fringilla lectus, at congue mauris. Etiam vel ipsum sed felis auctor dignissim ut quis felis. Pellentesque et risus tempus odio iaculis facilisis. Donec vulputate risus in consequat porta. Nullam faucibus maximus libero luctus interdum. Mauris mollis accumsan diam, quis fringilla eros feugiat id. Aenean sed dignissim lectus.

Sed non ullamcorper augue. Aliquam erat volutpat. Nullam consequat mattis turpis. Sed a ex id mi rutrum tristique. Morbi eu rutrum sem, a imperdiet odio. Nam non eros sit amet sapien mollis mollis vel eleifend neque. Sed suscipit in felis non interdum. Proin luctus est ut justo gravida eleifend. Nam sollicitudin dictum mauris, sit amet dictum erat dictum ut. Ut semper mauris in massa semper elementum. Donec maximus, ipsum eget rhoncus posuere, urna turpis fermentum turpis, et sagittis turpis tellus quis mi. Sed ac feugiat sapien. Etiam imperdiet nec urna a blandit. Ut fringilla enim odio, eu pretium felis posuere et.'
			/>
		</div>
	);
}

export default Compare;
