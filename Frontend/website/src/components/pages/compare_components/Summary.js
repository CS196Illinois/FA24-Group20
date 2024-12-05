import React from "react";
import "../ComparePage.css";
import { useCompareContext } from "./CompareContext";

function Summary() {
	const { summary } = useCompareContext();
	return (
		<div className='summaryBox' id='scroll-text'>
			<ul>
				<li className='summaryHeading'>Summary:</li>
				<li className='summaryContent'>{summary}</li>
			</ul>
		</div>
	);
}

export default Summary;
