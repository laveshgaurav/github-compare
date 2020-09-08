import React from "react";
import "./ProfileCard.css";
function ProfileCard(props) {
  return (
    <div className="box">
      <div className="ProfileCard__container">
        <div className="ProfileCard__image">
          <img src={props.image} alt="name" />
        </div>
        <div className="ProfileCard__data">
          <p style={{ fontWeight: "bold", color: "orange", fontSize: "32px" }}>
            {props.username}
          </p>
          <p className="ids">{props.id}</p>
          <p>Followers : {props.followers}</p>
          <p>Following : {props.following}</p>
          <p>Public Repos : {props.publicRepo}</p>
          <p>Public Gists : {props.publicGists}</p>
          <p>Created At : {new Date(props.created).toDateString()}</p>
          <a href={props.profile} className="link" target="_blank">
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
