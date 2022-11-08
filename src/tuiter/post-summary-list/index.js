import React from "react";
import PostSummaryListItem from "./PostSummaryListItem";
import {useSelector} from "react-redux";
// import post from "./posts.json";

const PostSummaryList = () => {
    const postsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
            {
                postsArray.map((p,index) => {
                    return(<PostSummaryListItem key={index} topic={p.topic}
                                                userName={p.userName} time={p.time}
                                                title={p.title} image={p.image} tweets={p.tweets}/>)
                })
            }
        </ul>
    );
};
export default PostSummaryList;