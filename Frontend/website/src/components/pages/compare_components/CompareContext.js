import React, { createContext, useContext, useState, useEffect } from "react";

const CompareContext = createContext();

export const useCompareContext = () => {
	return useContext(CompareContext);
};

// Context provider for storing variable states globally within the compare page
export const CompareContextProvider = ({ children }) => {
	// User uploaded files
	const [file1, setFile1] = useState(null);
	const [file2, setFile2] = useState(null);

	// Label strings for displaying the upload instructions/file name
	const [file1Label, setFile1Label] = useState(
		`Upload Article 1 (.html) ${String.fromCodePoint(8594)}`
	);
	const [file2Label, setFile2Label] = useState(
		`Upload Article 2 (.html) ${String.fromCodePoint(8594)}`
	);

	// Articles' body text
	const [file1String, setFile1String] = useState("");
	const [file2String, setFile2String] = useState("");

	// Degree to which the two articles contrast each other
	const [contrastPercent, setContrastPercent] = useState(-1.0);

	// Sentiment analysis value of the two articles
	const [sentimentPercent1, setSentimentPercent1] = useState(-1.0);
	const [sentimentPercent2, setSentimentPercent2] = useState(-1.0);

	// Articles' heading text
	const [file1Heading, setFile1Heading] = useState("Article 1");
	const [file2Heading, setFile2Heading] = useState("Article 2");

	// User defined aspect
	const [aspect, setAspect] = useState("");

	// Summary of comparison between two articles
	const [summary, setSummary] = useState("");

	// List of phrases/sentences to highlight
	const [highlightItemsPositive1, setHighlightItemsPositive1] = useState([]);
	const [highlightItemsNegative1, setHighlightItemsNegative1] = useState([]);
	const [highlightItemsPositive2, setHighlightItemsPositive2] = useState([]);
	const [highlightItemsNegative2, setHighlightItemsNegative2] = useState([]);

	// What is displayed in the aspect box
	const [aspectText, setAspectText] = useState("");

	// True if both files are uploaded and not null
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

	async function webscrapeFile(file, fileNumber) {
		setFile1String("");
		setFile2String("");
		setHighlightItemsPositive1([]);
		setHighlightItemsNegative1([]);
		setHighlightItemsPositive2([]);
		setHighlightItemsNegative2([]);
		try {
			// Read the file content
			const htmlContent = await file.text(); // File object supports .text() in modern Node.js environments

			// JSON payload
			const payload = {
				html_content: htmlContent,
			};

			// Send POST request to the API
			const response = await fetch(
				"https://biasbuster.pythonanywhere.com/api/scrape_article",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(payload),
				}
			);

			if (response.ok) {
				const data = await response.json();
				if (fileNumber === 1) {
					setFile1Heading(data.Heading.toUpperCase());
					setFile1String(data.Content);
				}
				if (fileNumber === 2) {
					setFile2Heading(data.Heading.toUpperCase());
					setFile2String(data.Content);
				}
			} else {
				console.error(`Error: ${response.status}`);
				console.error("Response Text:", await response.text());
			}
		} catch (error) {
			console.error("Network or Server Error:", error);
		}
	}

	useEffect(() => {
		if (file1String && file2String) {
			// Set the summary and sentiment bars to temporary "loading" values
			// while waiting for the api request to return
			setSummary("Generating Summary...");
			setSentimentPercent1(-1);
			setSentimentPercent2(-1);
            setContrastPercent(0);
			// Get the summary of the contrast between the two articles
			var inputString = "";
			if (aspect.length >= 0) {
				inputString =
					"compare and contrast these two articles regarding this topic: " +
					aspect +
					"article 1: " +
					file1String +
					"article 2: " +
					file2String;
			} else {
				inputString =
					"compare and contrast these two articles: article 1: " +
					file1String +
					"article 2: " +
					file2String;
			}

			// Get sentiment scores and highlight data for article 1
			var payload = {
				scraped_content: file1String,
				aspect: aspect,
			};

			fetch(
				"https://biasbuster.pythonanywhere.com/api/get_sentiment_scores",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(payload),
				}
			)
				.then((response) => response.json())
				.then((data) => {
					setSentimentPercent1(
						(data.average_sentiment_score * 50 + 50).toFixed(2)
					);
					if (
						!Object.keys(data.top_positive).includes("NO POSITIVE")
					) {
						setHighlightItemsPositive1(
							Object.keys(data.top_positive)
						);
					}
					if (
						!Object.keys(data.top_negative).includes("NO NEGATIVE")
					) {
						setHighlightItemsNegative1(
							Object.keys(data.top_negative)
						);
					}
				})
				.catch((error) =>
					console.error(
						"Sentiment score retrieval failed for article 1",
						error
					)
				);

			// Get sentiment scores and highlight data for article 2
			payload = {
				scraped_content: file2String,
				aspect: aspect,
			};

			fetch(
				"https://biasbuster.pythonanywhere.com/api/get_sentiment_scores",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(payload),
				}
			)
				.then((response) => response.json())
				.then((data) => {
					setSentimentPercent2(
						(data.average_sentiment_score * 50 + 50).toFixed(2)
					);
					if (
						!Object.keys(data.top_positive).includes("NO POSITIVE")
					) {
						setHighlightItemsPositive2(
							Object.keys(data.top_positive)
						);
					}
					if (
						!Object.keys(data.top_negative).includes("NO NEGATIVE")
					) {
						setHighlightItemsNegative2(
							Object.keys(data.top_negative)
						);
					}
				})
				.catch((error) =>
					console.error(
						"Sentiment score retrieval failed for article 2",
						error
					)
				);

			payload = {
				scraped_content: inputString,
			};

			fetch("https://biasbuster.pythonanywhere.com/api/get_summary", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload),
			})
				.then((response) => response.json())
				.then((data) => {
					setSummary(data.Summary);
				})
				.catch((error) =>
					console.error("Summary generation failed", error)
				);
		}
	}, [file1String, file2String]);

	useEffect(() => {
		if (sentimentPercent1 >= 0 && sentimentPercent2 >= 0) {
			console.log(sentimentPercent1);
			console.log(sentimentPercent2);
			setContrastPercent(
				(
					Math.tanh(
						3 *
							Math.abs(
								(sentimentPercent1 - sentimentPercent2) / 100
							)
					) * 100
				).toFixed(2)
			);
		}
	}, [sentimentPercent1, sentimentPercent2]);

	async function executeAnalysis() {
		await Promise.all([webscrapeFile(file1, 1), webscrapeFile(file2, 2)]);
		reset();
	}

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
				highlightItemsPositive1,
				highlightItemsPositive2,
				highlightItemsNegative1,
				highlightItemsNegative2,
				aspect,
				summary,
				reset,
				setFile1Handler,
				setFile2Handler,
				setAspect,
				setAspectText,
				executeAnalysis,
			}}
		>
			{children}
		</CompareContext.Provider>
	);
};
