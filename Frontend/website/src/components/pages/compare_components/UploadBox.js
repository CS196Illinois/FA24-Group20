import FileUpload from "./FileUpload";
import URLBox from "./URLBox";
import "../ComparePage.css";
import React from "react";
import { useCompareContext } from "./CompareContext";

function UploadBox() {
	const { file1Label, file2Label } = useCompareContext();

	return (
		<div className='upload'>
			<ul>
				<li>
					<div>
						<URLBox id='urlBox1' placeholder={file1Label} />
					</div>
				</li>
				<li>
					<FileUpload id='file1' />
				</li>
			</ul>
			<ul className='upload2'>
				<li>
					<div>
						<URLBox id='urlBox2' placeholder={file2Label} />
					</div>
				</li>
				<li>
					<FileUpload id='file2' />
				</li>
			</ul>
		</div>
	);
}

export default UploadBox;
