import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div>
  
      <p className="f4">
        {"This Magic Brain will detect faces in your pictures. Give it a try."}
      </p>
      <div className="center">
        <div
          className="form center ma2 pa4 br3 shadow-5"
          style={{ display: "flex" }}
        >
          <input
            className="f4 pa2 w-70 center br3"
            type="tex"
            onChange={onInputChange}
          />
          <button
            
            className="w-25 grow f4 link ph3 pv2 dib white pa4 br3 shadow-5"
            style={{
              background: "linear-gradient(to right, rgba(251, 155, 185, 1) 0%, rgba(242, 123, 149, 1) 50%, rgba(238, 104, 131, 1) 100%)",
            }}
            onClick={onSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
    
    );
};
export default ImageLinkForm;