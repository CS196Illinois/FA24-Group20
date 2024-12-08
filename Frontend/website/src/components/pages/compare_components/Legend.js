import React from "react";
import "../ComparePage.css";

function LegendPair({ color, value }) {
	return (
		<div className='legendPair'>
			<div
				style={{ backgroundColor: color }}
				className='legendColor'
			></div>
			<div className='legendText'>
				<p>{value}</p>
			</div>
		</div>
	);
}

function Legend() {
	return (
		<div className='legendBox'>
			<ul>
				<li></li>
				<li>
					<LegendPair color='green' value='positive sentiment' />
				</li>
				<li>
					<LegendPair color='red' value='negative sentiment' />
				</li>
				
				<li></li>
			</ul>
		</div>
	);
}

export default Legend;
