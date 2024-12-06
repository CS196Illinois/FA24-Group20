import React from "react";
import "../ComparePage.css";
import { useCompareContext } from "./CompareContext";

function CompareButton() {
	const { isFormValid, executeAnalysis, reset } = useCompareContext();

	const handleSubmit = () => {
		executeAnalysis();
		reset();
	};

	return (
		<div>
			<button
				className={`compareButton ${
					!isFormValid ? "disabled" : "enabled"
				}`}
				disabled={!isFormValid}
				onClick={handleSubmit}
			>
				Compare!
			</button>
		</div>
	);
}

export default CompareButton;