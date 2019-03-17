import React from 'react';
import Todo from './Todo'

const TodoList = props => {
    return(
        <div>
            {props.items.map(task => (
                <Todo
                    key={task.id}
                    task={task}
                    toggleTask={props.toggleTask}
                />
            ))}
        </div>
    )
}

export default TodoList
