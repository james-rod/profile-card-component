import React from "react";
import img from "../src/assets/images/image-victor.jpg";
export function ImageProfile() {
  return (
    <div className="profile-container">
      <img className="profileImg" src={img} />
    </div>
  );
}
