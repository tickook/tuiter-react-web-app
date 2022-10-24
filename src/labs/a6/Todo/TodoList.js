import TodoItem from "./TodoItem";
import todos from "./todos";
const TodoList = () => {
    return(
        <ul>
            {
                todos.map((todo,index) => {
                    return(<TodoItem key={index} todo={todo}/>);
                })
            }
        </ul>
    );
}
export default TodoList;