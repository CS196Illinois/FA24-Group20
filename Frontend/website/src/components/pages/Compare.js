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
	if (percent < 20) {
		contrast = contrastLevels[0];
	} else if (percent < 40) {
		contrast = contrastLevels[1];
	} else if (percent < 60) {
		contrast = contrastLevels[2];
	} else if (percent < 80) {
		contrast = contrastLevels[3];
	} else if (percent <= 100) {
		contrast = contrastLevels[4];
	}
	var r = document.querySelector(":root");
	r.style.setProperty("--width", `${percentage}%`);

	return (
		<div className='contrastContainer'>
			<span className='contrastText'>{`${contrast} (${percentage}%)`}</span>
			<div className='contrastFiller' />
		</div>
	);
}

function ArticleSentimentBar1() {
    return(
       <div className='sentimentBar1'>

       </div>
    );
}

function ArticleSentimentBar2() {
    return(
       <div className='sentimentBar2'>
        
       </div>
    );
}


function ArticlePane1() {
    return(
        <div className='articlePane'>
            
        </div>
    );
}

function ArticlePane2() {
    return(
        <div className='articlePane'>
            
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
			<ContrastBar percent={56} />
            <div className = 'articlePaneBox'>
                <ArticlePane1 />
                <ArticlePane2 />
            </div>
		</div>
	);
}

export default Compare;
