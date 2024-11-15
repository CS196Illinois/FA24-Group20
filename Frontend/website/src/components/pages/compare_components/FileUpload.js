import React, { useRef } from "react";
import { useCompareContext } from "./CompareContext";
import "../ComparePage.css";

function FileUpload({ id }) {
	const { setFile1Handler, setFile2Handler, resetFileInput, setResetFileInput } = useCompareContext();
    const fileInputRef = useRef(null);
	const handleChange = (event) => {
        const file = event.target.files[0];
		if (id === "file1") {
			setFile1Handler(file);
		} else if (id === "file2") {
			setFile2Handler(file);
		}
	};

    const resetInput = () => {
        fileInputRef.current.value = '';
    }

    if (resetFileInput) {
        resetInput();
        setResetFileInput(false);
    }

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
