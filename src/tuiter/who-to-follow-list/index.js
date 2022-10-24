import React from "react";
import whoArray from './who.json';
import WhoToFollowListItem from "./WhoToFollowListItem";

const WhoToFollowList = () => {
    return(
        <ul className="list-group">
            <li className="list-group-item">
                <h3>Who to follow</h3>
            </li>
            {
                whoArray.map((w,index) => {
                    return(<WhoToFollowListItem key={w.id} avatarIcon={w.avatarIcon} handle={w.handle} userName={w.userName}/>)
                })
            }
        </ul>
    );
};

export default WhoToFollowList;