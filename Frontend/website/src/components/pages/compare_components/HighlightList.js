import React from "react";
import "../ComparePage.css";
import Highlighter from "react-highlight-words";
function HighlightList({highlightItems, highlightItemsPositive, highlightItemsNegative }) {
    var highlightClassNames = {};
    highlightItemsPositive.forEach((item) => {
        highlightClassNames[item] = 'greenHighlight'
    });
    highlightItemsNegative.forEach((item) => {
        highlightClassNames[item] = 'redHighlight'
    });
	return (
		<div>
			<ul>
				{highlightItems.map((item, index) => (
					<li
						className='hyphenate'
						key={index}
						style={{ paddingTop: "3px", paddingBottom: "2px" }}
					>
						
                        <Highlighter 
                            searchWords={highlightItems}
                            textToHighlight={item}
                            autoEscape={true}
                            caseSensitive={true}
                            highlightClassName={highlightClassNames}
                        />
                        
					</li>
				))}
			</ul>
		</div>
	);
}

export default HighlightList;
