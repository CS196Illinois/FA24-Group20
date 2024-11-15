import "../ComparePage.css";
import React from "react";
import {
	ArticleSentimentBar1,
	ArticleSentimentBar2,
} from "./ArticleSentimentBar";

export function ArticlePane1() {
	return (
		<div className='articlePane'>
			<ArticleSentimentBar1 />
		</div>
	);
}

export function ArticlePane2() {
	return (
		<div className='articlePane'>
			<ArticleSentimentBar2 />
		</div>
	);
}