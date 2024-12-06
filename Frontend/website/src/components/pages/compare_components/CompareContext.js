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
	async function webscrapeFile(file, fileNumber) {
		try {
            // Read the file content
            const htmlContent = await file.text(); // File object supports .text() in modern Node.js environments
    
            // JSON payload
            const payload = {
                html_content: htmlContent
            };
    
            // Send POST request to the API
            const response = await fetch("https://biasbuster.pythonanywhere.com/api/scrape_article", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
    
            if (response.ok) {
                const data = await response.json();
                if (fileNumber === 1) {
                    setFile1Heading(data.Header)
                    setFile1String(data.Content)
                }
                if (fileNumber === 2) {
                    setFile2Heading(data.Header)
                    setFile2String(data.Content)
                }
            } else {
                console.error(`Error: ${response.status}`);
                console.error("Response Text:", await response.text());
            }
        } catch (error) {
            console.error("Network or Server Error:", error);
        }
	}

    // if (fileNumber === 1) {
    //     setFile1Heading(data.Header)
    //     setFile1String(data.Content)
    // }
    // if (fileNumber === 2) {
    //     setFile2Heading(data.Header)
    //     setFile2String(data.Content)
    // }

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
		webscrapeFile(file1, 1);
		webscrapeFile(file2, 2);
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
