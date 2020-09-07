import React from "react";

function ProfileCard(props) {
  return (
    <div>
      <h2>{props.id}</h2>
      <h4>{props.username}</h4>
    </div>
  );
}

export default ProfileCard;
