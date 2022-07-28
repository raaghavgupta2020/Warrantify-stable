import React from "react";
import cover from "./../../../../images/1234.png";

function ProfileCover() {
  return (
    <div className="h-60 w-full ">

      <img
        src={cover}
        alt="cover"
        className="w-full h-full object-contain object-center"
      />
    </div>
  );
}

export default ProfileCover;
