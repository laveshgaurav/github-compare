import React from "react";
import "./ProfileCard.css";
import Pic from "./github-logo.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/swiper.scss";
function ProfileCard(props) {
  return (
    // <Swiper
    //   spaceBetween={50}
    //   slidesPerView={3}
    //   onSlideChange={() => console.log("slide change")}
    //   onSwiper={(swiper) => console.log(swiper)}
    // >
    //   <SwiperSlide>Slide 1</SwiperSlide>
    //   <SwiperSlide>Slide 2</SwiperSlide>
    //   <SwiperSlide>Slide 3</SwiperSlide>
    //   <SwiperSlide>Slide 4</SwiperSlide>
    //   ...
    // </Swiper>
    // <div className="box">
    //   <div className="ProfileCard__container">
    //     <div className="ProfileCard__image">
    //       <img src={Pic} alt="name" />
    //     </div>
    //     <div className="ProfileCard__data">
    //       <h3>UserName</h3>
    //       <h2>Id</h2>
    //       <p>Followers : 3</p>
    //       <p>Following : 4</p>
    //       <p>Created At</p>
    //       <a href="#" className="link">
    //         View Profile
    //       </a>
    //     </div>
    //   </div>

    //   <div className="ProfileCard__container">
    //     <div className="ProfileCard__image">
    //       <img src={Pic} alt="name" />
    //     </div>
    //     <div className="ProfileCard__data">
    //       <h3>UserName</h3>
    //       <h2>Id</h2>
    //       <p>Followers : 3</p>
    //       <p>Following : 4</p>
    //       <p>Created At</p>
    //       <a href="#" className="link">
    //         View Profile
    //       </a>
    //     </div>
    //   </div>

    //   <div className="ProfileCard__container">
    //     <div className="ProfileCard__image">
    //       <img src={Pic} alt="name" />
    //     </div>
    //     <div className="ProfileCard__data">
    //       <h3>UserName</h3>
    //       <h2>Id</h2>
    //       <p>Followers : 3</p>
    //       <p>Following : 4</p>
    //       <p>Created At</p>
    //       <a href="#" className="link">
    //         View Profile
    //       </a>
    //     </div>
    //   </div>
    <div className="box">
      <div className="ProfileCard__container">
        <div className="ProfileCard__image">
          <img src={props.image} alt="name" />
        </div>
        <div className="ProfileCard__data">
          <p>{props.username}</p>
          <p className="ids">{props.id}</p>
          <p>Followers : {props.followers}</p>
          <p>Following : {props.following}</p>
          <p>Created At : {new Date(props.created).toDateString()}</p>
          <a href={props.profile} className="link">
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
