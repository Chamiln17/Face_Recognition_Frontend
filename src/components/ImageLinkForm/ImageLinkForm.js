import React from "react";
import "./ImageLinkForm.css";


const ImageLinkForm = ({onInputChange,onPictureSubmit}) => {
  return (
    <div>
      <p className="f3 tc">
        {"This Magic Face will detect faces in your pictures. Give it a try."}
      </p>
      <div className="center">
        <div className="form pa4 br3 shadow-5 center">
          <input className="f4 pa2 w-70 center" type="text" onChange={onInputChange} />
          <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple pointer" onClick={onPictureSubmit}>
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
