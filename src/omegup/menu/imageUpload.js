import React, { useRef } from "react";

const ImageUpload = ({ handleImageChange }) => {

    const inputFile = useRef(null);
    const onButtonClick = () => {
        inputFile.current.click();
    };

    return (
        <div>
            <input
                style={{ display: "none" }}
                ref={inputFile}
                onChange={handleImageChange}
                type="file"
            />
            <div className="button" onClick={onButtonClick}>
                Nouveau projet
            </div>
        </div>
    );
};

export default ImageUpload;
