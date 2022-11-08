import React, {useState} from "react";
import './index.css';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {updateProfile} from "../ProfileScreen/profile-reducer";

const profileData = (state) => state.profile;

const EditPage = () => {
    let history = useNavigate();
    const profile = useSelector(profileData);
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState(profile["firstName"]);
    const [lastName, setLastName] = useState(profile["lastName"]);
    const [bio, setBio] = useState(profile["bio"]);
    const [location, setLocation] = useState(profile["location"]);
    const [website, setWebsite] = useState(profile["website"]);
    const [birthDate, setBirthdate] = useState(profile["dateOfBirth"]);

    const saveUserProfileDetails = () => {
        const updatedData = {firstName,lastName, bio, location, website, dateOfBirth: birthDate};
        dispatch(updateProfile(updatedData))
        history("/tuiter/profile");
    }

    return(
      <div>
          <div className="row">
              <div className="row pt-2 wd-data-font-size">
                  <span className="fa fa-times wd-color-white col-1 pt-2" onClick={() => history("/tuiter/profile")}></span>
                  <span className="wd-font-color-white fw-bold wd-title-font-size float-left col-6">Edit Profile</span>
                  <span className="row wd-font-color-grey float-left col-5">
                      <button className="btn wd-save-page-style rounded-pill border fw-bold wd-font-color-white float-left" onClick={()=>saveUserProfileDetails()}>Save</button>
                  </span>
              </div>
          </div>

          <div className="pt-2"></div>

          <div className="row border rounded">
              <div className="wd-text-color-grey wd-input-text">Name</div>
                  <input className="col-6 wd-form-background wd-text-color-white  wd-user-input" type="text" placeholder="Enter first name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                  <input className="col-6 wd-form-background wd-text-color-white  wd-user-input" type="text" placeholder="Enter last name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
          </div>

          <div className="pt-3"></div>
          <div className="row border rounded">
              <div className="wd-text-color-grey wd-input-text">Bio</div>
              <textarea className="wd-form-background wd-text-color-white  wd-user-input" type="text" placeholder="Enter bio" value={bio} onChange={(e) => setBio(e.target.value)}/>
          </div>

          <div className="pt-3"></div>
          <div className="row border rounded">
              <div className="wd-text-color-grey wd-input-text">Location</div>
              <input className="wd-form-background wd-text-color-white  wd-user-input" type="text" placeholder="Enter location" value={location} onChange={(e) => setLocation(e.target.value)}/>
          </div>

          <div className="pt-3"></div>
          <div className="row border rounded">
              <div className="wd-text-color-grey wd-input-text">Website</div>
              <input className="wd-form-background wd-text-color-white  wd-user-input" type="text" value={website} onChange={(e) => setWebsite(e.target.value)}/>
          </div>

          <div className="pt-3"></div>
          <div className="row">
              <div>
                  <span className="wd-text-color-grey wd-input-text">Birth Date</span>
              </div>

              <input className="wd-form-background wd-text-color-white  wd-user-input" type="text" placeholder="Enter birth date" value={birthDate} onChange={(e) => setBirthdate(e.target.value)}/>
          </div>

      </div>
    );
}

export default EditPage;