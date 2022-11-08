import React from "react";

import TuitItem from "./TuitItem";
import {useSelector} from "react-redux";

const selectAllTweets = (state) => state.tuits;

const TuitList = () => {
    console.log(selectAllTweets);
    const tuits = useSelector(selectAllTweets);
    return(
        <ul className="list-group">
            {
                tuits.map((tuit,index) =>
                    <TuitItem key={index} tuit={tuit}/>
                )
            }
        </ul>
    )
};
export default TuitList;