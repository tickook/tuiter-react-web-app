import React, {useEffect} from "react";

import TuitItem from "./TuitItem";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../../../services/tuits-thunks";

// const selectAllTweets = (state) => state.tuits;

const TuitList = () => {
    // console.log(selectAllTweets);
    // const tuits = useSelector(selectAllTweets);

    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                tuits.map((tuit,index) =>
                    <TuitItem key={index} tuit={tuit}/>
                )
            }
        </ul>
    )
};
export default TuitList;