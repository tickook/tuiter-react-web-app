// import React from "react";
// import './index.css';
// import {useSelector} from "react-redux";
// import {useNavigate} from "react-router-dom";
//
// const profileData = (state) => state.profile;
//
// const ProfilePage = () => {
//     let history = useNavigate();
//     const profile = useSelector(profileData)[0];
//
//     return(
//       <div>
//           <div className="row">
//               <div className="col-1 ps-4">
//                   <a href="#>"><i className="fa fa-arrow-left me-3 wd-arrow-color pt-4"></i></a>
//               </div>
//               <div className="col-11">
//                   <div className="wd-font-color-white fw-bold wd-title-font-size" >{profile["firstName"]} {profile["lastName"]}</div>
//                   <div className="wd-font-color-grey pb-2">{profile["numberOfTweets"]} Tweets</div>
//               </div>
//           </div>
//
//
//
//           <img src={profile["backgroundImage"]}
//                className="profile-banner row" alt="Not able to load"
//                width={650}
//           />
//
//           <div className="col-sm-3 avatar-container">
//               <img src={profile["profileImage"]} className="rounded-circle profile-avatar" alt="User avatar"/>
//           </div>
//
//
//           <div className="pt-3 pe-4">
//               <button className="row btn rounded-pill border pull-right fw-bold wd-font-color-white" onClick={()=>history.push("/a7/twitter/editprofile")}>Edit Profile</button>
//           </div>
//
//           <div className="pt-5"></div>
//
//           <div className="wd-font-color-white fw-bold wd-title-font-size pt-5" >{profile["firstName"]} {profile["lastName"]}</div>
//           <div className="wd-font-color-grey">@{profile["handle"]}</div>
//           <div className="wd-font-color-white pt-3 fw-bold wd-bio-font-size">{profile["bio"]}</div>
//
//           <div className="row pt-3 wd-data-font-size">
//               <span className="fa fa-map-marker  wd-font-color-grey float-left col-4"> {profile["location"]}</span>
//               <span className="fa fa-birthday-cake wd-font-color-grey float-left col-4"> Born {profile["dateOfBirth"]}</span>
//               <span className="fa fa-calendar-o wd-font-color-grey float-left col-4"> Joined {profile["dateJoined"]}</span>
//           </div>
//
//           <div className="row pt-2 wd-data-font-size">
//               <span className="wd-font-color-grey float-left col-3"><span className="fw-bold wd-font-color-white">{profile["followingCount"]}</span> Following</span>
//               <span className="wd-font-color-grey float-left col-3"><span className="fw-bold wd-font-color-white"> {profile["followersCount"]}</span> Followers</span>
//           </div>
//
//       </div>
//     );
// }
//
// export default ProfilePage;
//


import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProfilePage = () => {
    const data = useSelector(state => state.profile);
    return(
        <div className="border">
            <div className="row">
                <div className="col-1 d-flex justify-content-center align-items-center">
                    <i className="fa fa-arrow-left" aria-hidden="true"></i>
                </div>
                <div className="col-auto">
                    <h3>{data.firstName + " " + data.lastName}</h3>
                    <small>{data.numberOfTweets} tweets</small>
                </div>
            </div>
            <div>
                <img src={data["backgroundImage"]} width={600} alt="User avatar"/>
            </div>
            <div className="row">
               <div className="col-sm-3 avatar-container">
                   <img src={data["profileImage"]} className="rounded-circle profile-avatar" width={100} style={{marginTop: "-40px", padding:"0px 10px"}} alt="User avatar"/>
               </div>
                <div className="col-9 p-2">
                    <Link to="/tuiter/edit-profile">
                        <button className="btn btn-outline-secondary rounded-pill" style={{marginRight: "30px", float:"right"}}>
                            Edit Profile
                        </button>
                    </Link>
                </div>
            </div>
            <div className="container-fluid">
                <div>
                    <h3>{data.firstName + " " + data.lastName}</h3>
                    <p>{data.handle}</p>
                    <p>{data.bio}</p>
                </div>
                <div className="d-flex justify-content-between p-2" style={{color:"gray"}}>
                    <span><i className="fa fa-map-marker" aria-hidden="true" style={{marginRight:"10px"}}/>{data.location}</span>
                    <span><i className="fa fa-birthday-cake" aria-hidden="true" style={{marginRight:"10px"}}/>{data.dateOfBirth}</span>
                    <span><i className="fa fa-calendar" aria-hidden="true" style={{marginRight:"10px"}}/>{data.dateJoined}</span>
                </div>
                <div>
                    <span><span style={{fontWeight:"bold"}}>{data.followingCount}</span><span  style={{marginLeft:"5px"}}>Following</span></span>
                    <span style={{marginLeft:"15px"}}><span style={{fontWeight:"bold"}}>{data.followersCount}</span><span  style={{marginLeft:"5px"}}>Followers</span></span>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage