import React from 'react'
import Header from './Header'
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.css';

function NewHeader() {
    return (
        <>
            <div className="App m-5" diver>
                <h1 className="text-secondary">Courses</h1>
                <br />
                <br />
                <Header />
                <TodoList />
            </div>
        </>
    )
}

export default NewHeader
