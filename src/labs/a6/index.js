import React from "react";
import {Link} from "react-router-dom";
import Classes from './Classes';
import Styles from './Styles';
import ConditionalOutput from './ConditionalOutput';
import TodoList from './Todo/TodoList';

const Assignment6 = () => {
    return(
        <>
            <Link to="/tuiter/home">
                tuiter
            </Link>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <Link to="/tuiter/home">
                tuiter
            </Link>
        </>
    )
};

export default Assignment6;