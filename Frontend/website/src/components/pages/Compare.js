/**
 * @author William Lei &lt;wllei2@illinois.edu>
 */

import "./ComparePage.css";
import React, { useState } from "react";
import {
	CompareContextProvider,
	useCompareContext,
} from "./compare_components/CompareContext";
import FileUpload from "./compare_components/FileUpload";
import URLBox from "./compare_components/URLBox";
import ContrastBar from "./compare_components/ContrastBar";
import {
	ArticleSentimentBar1,
	ArticleSentimentBar2,
} from "./compare_components/ArticleSentimentBar";
import Legend from "./compare_components/Legend";

function UploadBox() {
	const { file1Label, file2Label } = useCompareContext();

	return (
		<div className='upload'>
			<ul>
				<li>
					<div>
						<URLBox id='urlBox1' placeholder={file1Label} />
					</div>
				</li>
				<li>
					<FileUpload id='file1' />
				</li>
			</ul>
			<ul className='upload2'>
				<li>
					<div>
						<URLBox id='urlBox2' placeholder={file2Label} />
					</div>
				</li>
				<li>
					<FileUpload id='file2' />
				</li>
			</ul>
		</div>
	);
}

function AspectBox() {
	const { setAspect } = useCompareContext();
	const [text, setText] = useState("");
	const handleChange = (event) => {
		setText(event.target.value);
	};
	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			setAspect(text);
			setText("");
		}
	};

	return (
		<div>
			<input
				className='aspectBox'
				type='text'
				value={text}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
				placeholder='Enter a topic (i.e. "Harris") to analyze here, or leave blank for automatic selection'
			/>
		</div>
	);
}

function CompareButton() {
	const {
		isFormValid,
		webscrapeFiles,
		calculateContrast,
		calculateSentiment,
		setResetFileInput,
		reset,
	} = useCompareContext();

	const handleSubmit = () => {
		webscrapeFiles();
		calculateContrast();
		calculateSentiment();
		setResetFileInput(true);
		reset();
	};

	return (
		<div>
			<button
				className={`compareButton ${
					!isFormValid ? "disabled" : "enabled"
				}`}
				disabled={!isFormValid}
				onClick={handleSubmit}
			>
				Compare!
			</button>
		</div>
	);
}

function ArticlePane1() {
	return (
		<div className='articlePane'>
			<ArticleSentimentBar1 />
		</div>
	);
}

function ArticlePane2() {
	return (
		<div className='articlePane'>
			<ArticleSentimentBar2 />
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
		<CompareContextProvider>
			<div className='pageContent'>
				<UploadBox />
				<ul className='aspectBoxAndCompareButton'>
					<li>
						<AspectBox />
					</li>
					<li>
						<CompareButton />
					</li>
				</ul>
				<hr className='horizontalLine' />
				<ContrastBar />
				<div className='articlePaneBox'>
					<ArticlePane1 />
					<ArticlePane2 />
				</div>
				<Legend />
				<hr className='horizontalLine' />
				<Summary />
			</div>
		</CompareContextProvider>
	);
}

export default Compare;
