import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

function TodoList() {
    let todos = useSelector(state => state);

    return (
        <>

            <br />
            <br />
            <br />
            <table className="table table-hover table-condensed">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Length</th>
                        <th>Category</th>
                        <th>Author</th>
                        <th>Action</th>

                    </tr>
                </thead>
            </table>

            <div className="my-4">
                {todos.map((todo) => {
                    return <TodoItem key={todos.id} todo={todo} />;
                })}
            </div>
        </>
    )
}

export default TodoList
