import React from "react";
import "../ComparePage.css";

function HighlightList({ highlightItems }) {
	return (
		<div>
			<ul>
				{highlightItems.map((item, index) => (
					<li
						className='hyphenate'
						key={index}
						style={{ paddingTop: "3px", paddingBottom: "2px" }}
					>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
}

export default HighlightList;
