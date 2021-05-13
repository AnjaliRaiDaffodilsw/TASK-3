import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/actions';

function TodoItem({ todo }) {
    const [editable, setEditable] = useState(false)
    const [name, setName] = useState(todo.name)
    const [length, setlength] = useState(todo.length)
    const [Category, setCategory] = useState(todo.Category)
    const [Author, setAuthor] = useState(todo.Author)
    let dispatch = useDispatch();

    return (
        <>

            <div className="row mx-2 align-items-center">
               
                {/* <div>#{todo.id.length > 1 ? todo.id[2] : todo.id}</div> */}

                <div className="col">
                    {editable ?
                        <div><input type="text" className="form-control" 
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                
                            }}
                            required
                            style={{ color: "gray", fontSize: "0.5rem",paddingRight :"-20px"}}
                        />
                            <input type="number" className="form-control"
                                value={length}
                                onChange={(e) => {
                                    setlength(e.target.value);
                                }}
                                required
                                style={{ color: "gray", fontSize: "0.5rem" }}
                            />
                            <input type="text" className="form-control"
                                value={Category}
                                onChange={(e) => {
                                    setCategory(e.target.value);
                                }}
                                required
                                style={{ color: "gray", fontSize: "0.5rem" ,paddingRight :"-20px"}}
                            />
                            <input type="text" className="form-control"
                                value={Author}
                                onChange={(e) => {
                                    setAuthor(e.target.value);
                                }}
                                style={{ color: "gray", fontSize: "0.5rem" }}
                                required
                            />
                        </div>

                        :
                        <p style={{ color: "#0275d8", fontSize: "0.6rem" }}>{todo.name}</p>}
                </div>

                <div className="col" style={{ color: "black", fontSize: "0.8rem" }}>{todo.length}</div>
                <div className="col" style={{ color: "black", fontSize: "0.8rem" }}>{todo.Category}</div>
                <div className="col" style={{ color: "black", fontSize: "0.8rem" }}>{todo.Author}</div>
                <br/>
            
                <button className="btn btn-primary m-2 btn btn-warning ml-2"style={{float:"right"}}
                    onClick={() => {
                        dispatch(updateTodo({
                            ...todo,
                            name: name,
                            length: length,
                            Category: Category,
                            Author: Author
                        }))
                        if (editable) {
                            setName(todo.name);
                            setlength(todo.length);
                            setCategory(todo.Category);
                            setAuthor(todo.Author);
                        }
                        setEditable(!editable);


                    }}
                ><i className = "fa fa-pencil"></i>  {editable ? "Update" : "Edit"}</button>
                <button className="btn btn-danger m-2"
                    onClick={() => dispatch(deleteTodo(todo.id))}
                ><i className = "fa fa-trash"> </i> Delete</button>
            </div>
        </>
    )
}

export default TodoItem
