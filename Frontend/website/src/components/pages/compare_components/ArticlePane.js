import "../ComparePage.css";
import React from "react";
import {
	ArticleSentimentBar1,
	ArticleSentimentBar2,
} from "./ArticleSentimentBar";
import { useCompareContext } from "./CompareContext";
import HighlightList from "./HighlightList";
import Highlighter from "react-highlight-words";

function ArticleHeading({ id }) {
	const { file1Heading, file2Heading } = useCompareContext();
	var heading = "";
	if (id === "article1") {
		heading = file1Heading;
	} else if (id === "article2") {
		heading = file2Heading;
	}
	return (
		<div className='articleHeadingBox'>
			<div className='articleHeadlineBox'>{heading}</div>
			<div className='articleHighlightHeadingBox'>Highlight Focus</div>
		</div>
	);
}

function ArticleBody({ id }) {
	const {
		file1String,
		file2String,
		highlightItemsPositive1,
		highlightItemsNegative1,
		highlightItemsPositive2,
		highlightItemsNegative2,
	} = useCompareContext();
	var article = "";
	var highlightItems = [];
	var highlightClassNames = {};
	if (id === "article1") {
		article = file1String;
		highlightItems = highlightItemsPositive1.concat(
			highlightItemsNegative1
		);
		highlightItemsPositive1.forEach((item) => {
			highlightClassNames[item] = "greenHighlight";
			console.log(item + " green");
		});
		highlightItemsNegative1.forEach((item) => {
			highlightClassNames[item] = "redHighlight";
			console.log(item + " red");
		});
	} else if (id === "article2") {
		article = file2String;
		highlightItems = [];
		highlightItems = highlightItemsPositive2.concat(
			highlightItemsNegative2
		);
		highlightItemsPositive2.forEach((item) => {
			highlightClassNames[item] = "greenHighlight";
		});
		highlightItemsNegative2.forEach((item) => {
			highlightClassNames[item] = "redHighlight";
		});
	}

	return (
		<div className='articleBody'>
			<Highlighter
				searchWords={highlightItems}
				autoEscape={true}
				textToHighlight={article}
				highlightClassName={highlightClassNames}
			/>
		</div>
	);
}

function HighlightBox({ id }) {
	const {
		highlightItemsPositive1,
		highlightItemsNegative1,
		highlightItemsPositive2,
		highlightItemsNegative2,
	} = useCompareContext();
	var items;
	var positive = [];
	var negative = [];
	if (id === "article1") {
		items = highlightItemsPositive1.concat(highlightItemsNegative1);
		positive = highlightItemsPositive1;
		negative = highlightItemsNegative1;
	} else if (id === "article2") {
		items = highlightItemsPositive2.concat(highlightItemsNegative2);
		positive = highlightItemsPositive2;
		negative = highlightItemsNegative2;
	}

	return (
		<div className='highlightBox'>
			<HighlightList
				highlightItems={items}
				highlightItemsPositive={positive}
				highlightItemsNegative={negative}
			/>
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
