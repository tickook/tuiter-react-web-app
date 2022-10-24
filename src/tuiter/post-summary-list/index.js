import React from "react";
import PostSummaryListItem from "./PostSummaryListItem";
import post from "./posts.json";

const PostSummaryList = () => {
    return(
        <ul className="list-group">
            {
                post.map((p,index) => {
                    return(<PostSummaryListItem key={index} topic={p.topic}
                                                userName={p.userName} time={p.time}
                                                title={p.title} image={p.image} tweets={p.tweets}/>)
                })
            }
        </ul>
    );
};
export default PostSummaryList;