import React, { useState } from "react";
import "../ComparePage.css";

function URLBox({ id, placeholder }) {
	const [text, setText] = useState("");

	const handleChange = (event) => {
		setText(event.target.value);
	};

	return (
		<div>
			<input
				className={id}
				type='text'
				disabled={true}
				value={text}
				onChange={handleChange}
				placeholder={placeholder}
			/>
		</div>
	);
}

export default URLBox;
