import React from "react";
const WhoToFollowListItem = (props) => {
    console.log(props);
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle float-start"
                         src={props.avatarIcon}
                         alt="Not able to load"
                         height={60}
                         width={60}/>
                </div>
                <div className="col-8">
                    <div className="fw-bold">{props.userName}</div>
                    <div>@{props.handle}</div>
                </div>
                <div className="col-2">
                    <button className="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;