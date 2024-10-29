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
    if(percentage < 2) {
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
    const percentage = percent
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
        "Strongly Right-Leaning "
	];

    var sentiment = "";
    if(percentage < -80) {
        sentiment = sentimentLevels[0]
    } else if (percentage < -60) {
        sentiment = sentimentLevels[1]
    } else if (percentage < -40) {
        sentiment = sentimentLevels[2]
    } else if (percentage < -20) {
        sentiment = sentimentLevels[3]
    }  else if (percentage < -1) {
        sentiment = sentimentLevels[4]
    } else if (-1 <= percentage && percentage <= 1) {
        sentiment = sentimentLevels[5]
    } else if (percentage < 20) {
        sentiment = sentimentLevels[6]
    } else if (percentage < 40) {
        sentiment = sentimentLevels[7]
    } else if (percentage < 60) {
        sentiment = sentimentLevels[8]
    } else if (percentage < 80) {
        sentiment = sentimentLevels[9]
    } else if (percentage <= 100) {
        sentiment = sentimentLevels[10]
    }

    var r = document.querySelector(":root");
    var color = "";
    var topRightBorder = "";
    if(percentage >= 0) {
        color = "#EF3D3D";
    } else {
        color = "#58A3F4";
    }
    if(Math.abs(percentage) >= 98.5) {
        topRightBorder = "10px";
    } else {
        topRightBorder = "0px";
    }
    r.style.setProperty("--sentiment-top-right-border1", `${topRightBorder}`);
	if((-2 <= percentage && percentage < 0) || (0 < percentage && percentage <= 2)) {
	    r.style.setProperty("--sentiment-width1", `2%`);
    } else {
        r.style.setProperty("--sentiment-width1", `${Math.abs(percentage)}%`);
    }
    r.style.setProperty("--sentiment-color1", `${color}`);
    
    return(
       <div className='sentimentContainer1'>
            <span className='sentimentText1'>{`${sentiment} (${Math.abs(percentage)}%)`}</span>
            <div className='sentimentFiller1' />
       </div>
    );
}

function ArticleSentimentBar2({ percent }) {
    const percentage = percent
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
        "Strongly Right-Leaning "
	];

    var sentiment = "";
    if(percentage < -80) {
        sentiment = sentimentLevels[0]
    } else if (percentage < -60) {
        sentiment = sentimentLevels[1]
    } else if (percentage < -40) {
        sentiment = sentimentLevels[2]
    } else if (percentage < -20) {
        sentiment = sentimentLevels[3]
    }  else if (percentage < -1) {
        sentiment = sentimentLevels[4]
    } else if (-1 <= percentage && percentage <= 1) {
        sentiment = sentimentLevels[5]
    } else if (percentage < 20) {
        sentiment = sentimentLevels[6]
    } else if (percentage < 40) {
        sentiment = sentimentLevels[7]
    } else if (percentage < 60) {
        sentiment = sentimentLevels[8]
    } else if (percentage < 80) {
        sentiment = sentimentLevels[9]
    } else if (percentage <= 100) {
        sentiment = sentimentLevels[10]
    }

    var r = document.querySelector(":root");
    var color = "";
    var topRightBorder = "";
    if(percentage >= 0) {
        color = "#EF3D3D";
    } else {
        color = "#58A3F4";
    }
    if(Math.abs(percentage) >= 98.5) {
        topRightBorder = "10px";
    } else {
        topRightBorder = "0px";
    }
    r.style.setProperty("--sentiment-top-right-border2", `${topRightBorder}`);
    if((-2 <= percentage && percentage < 0) || (0 < percentage && percentage <= 2)) {
	    r.style.setProperty("--sentiment-width2", `2%`);
    } else {
        r.style.setProperty("--sentiment-width2", `${Math.abs(percentage)}%`);
    }
    r.style.setProperty("--sentiment-color2", `${color}`);
    
    return(
       <div className='sentimentContainer2'>
            <span className='sentimentText2'>{`${sentiment} (${Math.abs(percentage)}%)`}</span>
            <div className='sentimentFiller2' />
       </div>
    );
}

function ArticlePane1({ percent }) {
    return(
        <div className='articlePane'>
            <ArticleSentimentBar1 percent={percent} />
        </div>
    );
}

function ArticlePane2({ percent }) {
    return(
        <div className='articlePane'>
            <ArticleSentimentBar2 percent={percent}/>
        </div>
    );
}

function Compare() {
	return (
		<div>
			<div className='upload'>
				<ul>
					<li>
						<URLBox1 />
					</li>
					<li>
						<FileIcon1 />
					</li>
				</ul>
				<ul>
					<li>
						<URLBox2 />
					</li>
					<li>
						<FileIcon2 />
					</li>
				</ul>
			</div>
			<ContrastBar percent={0.1} />
            <div className = 'articlePaneBox'>
                <ArticlePane1 percent={-1.2}/>
                <ArticlePane2 percent={-0.1}/>
            </div>
		</div>
	);
}

export default Compare;
