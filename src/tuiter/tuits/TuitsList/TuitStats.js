import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../../services/tuits-thunks";

const TuitStats = ({tuit}) => {

    const dispatch = useDispatch();
    const likeTuitHandler = () => {
        dispatch(updateTuitThunk({...tuit, likes : tuit.likes +1 }));
    }

    const dislikeTuitHandler = () => {
        dispatch(updateTuitThunk({...tuit, dislikes : tuit.dislikes +1 }));
    }

    return (<div className="row mt-2">
        <div className="col">
            <i className="fa fa-comment me-2"></i>
            {tuit.comments}
        </div>
        <div className="col">
            <i className="fa fa-retweet me-2"></i>
            {tuit.retuits}
        </div>
        <button className="col" onClick={likeTuitHandler}>
            {
                tuit.liked &&
                <i className="fa fa-heart me-2"
                   style={{color: tuit.liked ? 'red': "white"}}></i>
            }
            {
                !tuit.liked &&
                <i className="fa fa-heart me-2"></i>
            }
            {tuit.likes}
        </button>
        <button className="col" onClick={dislikeTuitHandler}>
            {
                tuit.liked &&
                <i className="fa fa-heart me-2"
                   style={{color: tuit.liked ? 'red': "white"}}></i>
            }
            {
                !tuit.liked &&
                <i className="fa fa-heart me-2"></i>
            }
            {tuit.dislikes}
        </button>
        <div className="col">
            <i className="fa fa-external-link-alt me-2"></i>
        </div>
    </div>)
}

export default TuitStats;