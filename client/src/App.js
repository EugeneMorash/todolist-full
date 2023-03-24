import React, {useEffect, useState} from "react";
import {TodoItem} from "./component/TodoItem";
import axios from "axios";

function App() {
    const [todo, setTodo] = useState([])
    const [title, setTitle] = useState('')

    useEffect(() => {
        let data = axios.get('http://localhost:8000')
        data.then(res => {
            setTodo(res.data)
        })
    }, [])

    const onTitleChangeHandler = (e) => {
        setTitle(e.currentTarget.value)
    };

    const onPostDataHandler = () => {
        let post = axios.post('http://localhost:8000', {
            id: null,
            task: title,
            isDone: 0
        })
        setTitle('')

    };

    return (
        <div className='app__wrapper'>
            <h1>Todolist Full</h1>
            <div className='addTask__wrapper'>
                <input placeholder='Add task name' onChange={onTitleChangeHandler} value={title}/>
                <button onClick={onPostDataHandler}>Add Task</button>
            </div>

            {
                todo.map(el => {
                    return <TodoItem task={el.task} key={el.id}/>
                })
            }

        </div>
    );
}

export default App;
