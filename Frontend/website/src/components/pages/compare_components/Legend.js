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
					<LegendPair color='#FFDA57' value='statements' />
				</li>
				<li>
					<LegendPair color='#4BA4ED' value='statistics' />
				</li>
				<li>
					<LegendPair color='#EC7ACE' value='quotes' />
				</li>
				<li>
					<LegendPair color='#26EBA4' value='provocative language' />
				</li>
				<li></li>
			</ul>
		</div>
	);
}

export default Legend;
