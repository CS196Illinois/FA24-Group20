/**
 * @author William Lei &lt;wllei2@illinois.edu>
 */

import "./ComparePage.css";
import React from "react";
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
import Summary from "./compare_components/Summary";
import CompareButton from "./compare_components/CompareButton";
import AspectBox from "./compare_components/AspectBox";

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
