import React from 'react';


export function TodoItem(props) {
    return (
        <div className='todo-item'>
            <div>{props.task}</div>
            <button>&times;</button>
        </div>
    );
}
