import React from "react";

const Face = ({ imageUrl }) => {
  return (
    <div className="center">
      <img alt="" src={imageUrl}></img>
    </div>
  );
};
export default Face;
