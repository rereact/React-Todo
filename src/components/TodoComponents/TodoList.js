import React from 'react';
import Todo from './Todo'

const TodoList = props => {
    return(
        <div>
            {props.items.map(task => (
                <Todo task={task} />
            ))}
        </div>
    )
}

export default TodoList
