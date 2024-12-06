import React, { createContext, useContext, useState } from "react";

const CompareContext = createContext();

export const useCompareContext = () => {
	return useContext(CompareContext);
};

export const CompareContextProvider = ({ children }) => {
	const [file1, setFile1] = useState(null);
	const [file2, setFile2] = useState(null);
	const [file1Label, setFile1Label] = useState(
		`Upload Article 1 (.html) ${String.fromCodePoint(8594)}`
	);
	const [file2Label, setFile2Label] = useState(
		`Upload Article 2 (.html) ${String.fromCodePoint(8594)}`
	);
	const [file1String, setFile1String] = useState("");
	const [file2String, setFile2String] = useState("");
	const [contrastPercent, setContrastPercent] = useState(-1.0);
	const [sentimentPercent1, setSentimentPercent1] = useState(-1.0);
	const [sentimentPercent2, setSentimentPercent2] = useState(-1.0);
	const [file1Heading, setFile1Heading] = useState("Article 1");
	const [file2Heading, setFile2Heading] = useState("Article 2");
	const [aspect, setAspect] = useState("");
	const [summary, setSummary] = useState("");
	const [highlightItems1, setHighlightItems1] = useState([]);
	const [highlightItems2, setHighlightItems2] = useState([]);
	const [aspectText, setAspectText] = useState("");
	const isFormValid = file1 && file2;
	var r = document.querySelector(":root");

	const reset = () => {
		setAspect(aspectText);
		setAspectText("");
		setFile1(null);
		setFile2(null);
		setFile1Label(`Upload Article 1 (.html) ${String.fromCodePoint(8594)}`);
		setFile2Label(`Upload Article 2 (.html) ${String.fromCodePoint(8594)}`);
		r.style.setProperty("--URLBox-placeholder-color1", "#A6A4A3");
		r.style.setProperty("--URLBox-placeholder-color2", "#A6A4A3");
	};
	const setFile1Handler = (file) => {
		setFile1(file);
		if (file) {
			setFile1Label(`Uploaded File: "${file.name}"`);
			r.style.setProperty("--URLBox-placeholder-color1", "#F2E9E4");
		}
	};
	const setFile2Handler = (file) => {
		setFile2(file);
		if (file) {
			setFile2Label(`Uploaded File: "${file.name}"`);
			r.style.setProperty("--URLBox-placeholder-color2", "#F2E9E4");
		}
	};

	//Implement with backend API @todo
	const webscrapeFiles = () => {
		setFile1Heading(
			"1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
		);
		setFile2Heading(
			"2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
		);
		setFile1String(
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? "
		);
		setFile2String(
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? "
		);
	};
	const calculateContrast = () => {
		setContrastPercent(Math.floor(Math.random() * 99) + 1);
	};
	const calculateSentiment = () => {
		setSentimentPercent1(Math.floor(Math.random() * 99) + 1);
		setSentimentPercent2(Math.floor(Math.random() * 99) + 1);
	};
	const findHighlights = () => {
		setHighlightItems1([
			"Lorem ipsum odor amet, consectetuer adipiscing elit.",
			"Lorem ipsum odor amet, consectetuer adipiscing elit.",
			"Lorem ipsum odor amet, consectetuer adipiscing elit.",
			"Lorem ipsum odor amet, consectetuer adipiscing elit.",
			"Lorem ipsum odor amet, consectetuer adipiscing elit.",
			"Lorem ipsum odor amet, consectetuer adipiscing elit.",
			"Lorem ipsum odor amet, consectetuer adipiscing elit.",
			"Lorem ipsum odor amet, consectetuer adipiscing elit.",
		]);
		setHighlightItems2([
			"Lorem ipsum odor amet, consectetuer adipiscing elit.",
			"Lorem ipsum odor amet, consectetuer adipiscing elit.",
			"Lorem ipsum odor amet, consectetuer adipiscing elit.",
			"Lorem ipsum odor amet, consectetuer adipiscing elit.",
			"Lorem ipsum odor amet, consectetuer adipiscing elit.",
			"Lorem ipsum odor amet, consectetuer adipiscing elit.",
			"Lorem ipsum odor amet, consectetuer adipiscing elit.",
			"Lorem ipsum odor amet, consectetuer adipiscing elit.",
			"Lorem ipsum odor amet, consectetuer adipiscing elit.",
			"Lorem ipsum odor amet, consectetuer adipiscing elit.",
			"Lorem ipsum odor amet, consectetuer adipiscing elit.",
			"Lorem ipsum odor amet, consectetuer adipiscing elit.",
		]);
	};
	const generateSummary = () => {
		setSummary(
			"Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti ligula magna senectus vel massa neque aenean sollicitudin dignissim consequat sociosqu purus donec hac placerat cubilia suscipit ac congue sagittis suscipit condimentum consequat vel duis sollicitudin tristique felis senectus enim habitasse condimentum bibendum amet ultrices facilisi adipiscing justo dui mauris fames bibendum gravida donec donec cubilia justo taciti sem etiam tellus placerat metus mi leo sagittis ultrices vitae dapibus nullam ornare interdum praesent quam nascetur integer massa rutrum donec aenean erat magnis tellus justo orci platea dapibus risus nibh nisl fusce ante integer dictumst dignissim sodales vivamus cubilia tincidunt sem nec montes consectetur neque nullam penatibus nulla volutpat porta imperdiet cras posuere erat nullam curabitur penatibus est sed dolor suscipit velit rutrum faucibus nam dictum convallis laoreet eget. Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti ligula magna senectus vel massa neque aenean sollicitudin dignissim consequat sociosqu purus donec hac placerat cubilia suscipit ac congue sagittis suscipit condimentum consequat vel duis sollicitudin tristique felis senectus enim habitasse condimentum bibendum amet ultrices facilisi adipiscing justo dui mauris fames bibendum gravida donec donec cubilia justo taciti sem etiam tellus placerat metus mi leo sagittis ultrices vitae dapibus nullam ornare interdum praesent quam nascetur integer massa rutrum donec aenean erat magnis tellus justo orci platea dapibus risus nibh nisl fusce ante integer dictumst dignissim sodales vivamus cubilia tincidunt sem nec montes consectetur neque nullam penatibus nulla volutpat porta imperdiet cras posuere erat nullam curabitur penatibus est sed dolor suscipit velit rutrum faucibus nam dictum convallis laoreet eget."
		);
	};
	const executeAnalysis = () => {
		webscrapeFiles();
		findHighlights();
		calculateContrast();
		calculateSentiment();
		generateSummary();
	};
	return (
		<CompareContext.Provider
			value={{
				file1,
				file2,
				file1Label,
				file2Label,
				isFormValid,
				file1String,
				file2String,
				file1Heading,
				file2Heading,
				contrastPercent,
				sentimentPercent1,
				sentimentPercent2,
				highlightItems1,
				highlightItems2,
				aspect,
				summary,
				reset,
				setFile1Handler,
				setFile2Handler,
				webscrapeFiles,
				calculateContrast,
				calculateSentiment,
				setAspect,
				setAspectText,
				executeAnalysis,
			}}
		>
			{children}
		</CompareContext.Provider>
	);
};
