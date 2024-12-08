import React from "react";
import "../ComparePage.css";
import { useCompareContext } from "./CompareContext";

function CompareButton() {
	const { isFormValid, executeAnalysis } = useCompareContext();

	const handleSubmit = () => {
		executeAnalysis();
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
