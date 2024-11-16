import React from "react";
import "../ComparePage.css";
import { useCompareContext } from "./CompareContext";

function AspectBox() {
	const { isFormValid,
		    executeAnalysis,
		    reset,
            aspectText,
            setAspectText,
    } = useCompareContext();
	const handleChange = (event) => {
		setAspectText(event.target.value);
	};
	const handleKeyDown = (event) => {
		if (event.key === "Enter" && isFormValid) {
            executeAnalysis();
		    reset();
		}
	};

	return (
		<div>
			<input
				className='aspectBox'
				type='text'
				value={aspectText}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
				placeholder='Enter a topic (i.e. "Harris") to analyze here, or leave blank for automatic selection'
			/>
		</div>
	);
}

export default AspectBox;