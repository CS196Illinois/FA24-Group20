import "../ComparePage.css";
import React from "react";
import {
	ArticleSentimentBar1,
	ArticleSentimentBar2,
} from "./ArticleSentimentBar";
import { useCompareContext } from "./CompareContext";
import HighlightList from "./HighlightList";

function ArticleHeading({ id }) {
	const { file1Heading, file2Heading } = useCompareContext();
	var heading = "";
	if (id === "article1") {
		heading = file1Heading;
		// console.log(typeof(heading) + heading);
	} else if (id === "article2") {
		heading = file2Heading;
		// console.log(typeof(heading) + heading);
	}
	return (
		<div className='articleHeadingBox'>
			<div className='articleHeadlineBox'>{heading}</div>
			<div className='articleHighlightHeadingBox'>Highlight Focus</div>
		</div>
	);
}

function ArticleBody({ id }) {
	const { file1String, file2String } = useCompareContext();
	var article = "";
	if (id === "article1") {
		article = file1String;
	} else if (id === "article2") {
		article = file2String;
	}

	return <div className='articleBody'>{article}</div>;
}

function HighlightBox({ id }) {
	const { highlightItems1, highlightItems2 } = useCompareContext();
	var items = [];
	if (id === "article1") {
		items = highlightItems1;
	} else if (id === "article2") {
		items = highlightItems2;
	}
	return (
		<div className='highlightBox'>
			<HighlightList highlightItems={items} />
		</div>
	);
}

export function ArticlePane1() {
	const id = "article1";
	return (
		<div className='articlePane'>
			<ArticleSentimentBar1 />
			<ArticleHeading id={id} />
			<div className='paneBody'>
				<ArticleBody id={id} />
				<HighlightBox id={id} />
			</div>
		</div>
	);
}

export function ArticlePane2() {
	const id = "article2";
	return (
		<div className='articlePane'>
			<ArticleSentimentBar2 />
			<ArticleHeading id={id} />
			<div className='paneBody'>
				<ArticleBody id={id} />
				<HighlightBox id={id} />
			</div>
		</div>
	);
}
