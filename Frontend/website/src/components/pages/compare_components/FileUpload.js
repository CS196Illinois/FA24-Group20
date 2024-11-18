import React, { useRef } from "react";
import { useCompareContext } from "./CompareContext";
import "../ComparePage.css";

function FileUpload({ id }) {
    const fileInputRef = useRef(null);
	const { setFile1Handler, setFile2Handler } = useCompareContext();
	const handleChange = (event) => {
        const file = event.target.files[0];
		if (id === "file1") {
			setFile1Handler(file);
            fileInputRef.current.value = '';
		} else if (id === "file2") {
			setFile2Handler(file);
            fileInputRef.current.value = '';
		}
	};

	return (
		<div className='fileIcon'>
			<label htmlFor={id}>
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
                ref={fileInputRef}
				type='file'
				accept='.html'
				onChange={handleChange}
			/>
		</div>
	);
}

export default FileUpload;
