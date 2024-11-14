import React from "react";
import { useFileUpload } from "./FileUploadContext";
import "../ComparePage.css";

function FileUpload({ id }) {
	const { setFile1Handler, setFile2Handler } = useFileUpload();

	const handleChange = (event) => {
		const file = event.target.files[0];
		if (id === "file1") {
			setFile1Handler(file);
		} else if (id === "file2") {
			setFile2Handler(file);
		}
	};

	return (
		<div className='fileIcon'>
			<label for={id}>
				<div className='fileIconSquare'>
					<img
						src={require("../../../Icon.png")}
						width='12px'
						height='15px'
						alt='file icon'
					/>
				</div>
			</label>
			<input
				id={id}
				type='file'
				accept='.html'
				onChange={handleChange}
			/>
		</div>
	);
}

export default FileUpload;
