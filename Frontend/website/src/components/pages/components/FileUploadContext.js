import React, { createContext, useContext, useState } from "react";

// Create Context
const FileUploadContext = createContext();

// Create a custom hook to use the context
export const useFileUpload = () => {
	return useContext(FileUploadContext);
};

// Create a Provider component to wrap your app
export const FileUploadProvider = ({ children }) => {
	const [file1, setFile1] = useState(null);
	const [file2, setFile2] = useState(null);

	// Check if both files are uploaded
	const isFormValid = file1 && file2;

	const setFile1Handler = (file) => {
        setFile1(file)
    };
	const setFile2Handler = (file) => {
        setFile2(file)
    };

	return (
		<FileUploadContext.Provider
			value={{
				file1,
				file2,
				isFormValid,
				setFile1Handler,
				setFile2Handler,
			}}
		>
			{children}
		</FileUploadContext.Provider>
	);
};
