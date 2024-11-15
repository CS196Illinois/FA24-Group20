/**
 * @author William Lei &lt;wllei2@illinois.edu>
 */

import "./ComparePage.css";
import React from "react";
import { CompareContextProvider } from "./compare_components/CompareContext";
import ContrastBar from "./compare_components/ContrastBar";
import Legend from "./compare_components/Legend";
import Summary from "./compare_components/Summary";
import CompareButton from "./compare_components/CompareButton";
import AspectBox from "./compare_components/AspectBox";
import UploadBox from "./compare_components/UploadBox";
import { ArticlePane1, ArticlePane2 } from "./compare_components/ArticlePane";


function Compare() {
	return (
		<CompareContextProvider>
			<div className='pageContent'>
				<UploadBox />
				<ul className='aspectBoxAndCompareButton'>
					<li>
						<AspectBox />
					</li>
					<li>
						<CompareButton />
					</li>
				</ul>
				<hr className='horizontalLine' />
				<ContrastBar />
				<div className='articlePaneBox'>
					<ArticlePane1 />
					<ArticlePane2 />
				</div>
				<Legend />
				<hr className='horizontalLine' />
				<Summary />
			</div>
		</CompareContextProvider>
	);
}

export default Compare;
