import React from "react";
import TuitList from "../tuits/TuitsList";
import WhatsHappening from "./whats-happening";

const Home = () => {
    return(
        <div>
            <div className="row pt-3">
                <div className="col-12 col-lg-12 col-xl-12">
                    <WhatsHappening/>
                    <TuitList/>
                </div>
            </div>
        </div>
    )
}

export default Home;