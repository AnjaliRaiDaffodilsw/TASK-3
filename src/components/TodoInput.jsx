import React, { useState } from 'react';
import { addTodo } from '../redux/actions';
import { v1 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


function TodoInput() {
    let [name, setName] = useState();
    let [length, setlength] = useState()
    let [Category, setCategory] = useState()
    let [Author, setAuthor] = useState()
    let dispatch = useDispatch();
    return (
        <div>
            <ul style={{ textDecoration: "none", listStyle: "none", float: "left" }}>
                <li style={{ textDecoration: "none", listStyle: "none" }}><Link to="/" style={{ textDecoration: "none", listStyle: "none" }}>
                    <button
                        onClick={() => {
                            dispatch(addTodo({
                                id: uuid(),
                                name: name,
                                length: length,
                                Category: Category,
                                Author: Author
                            }));
                            setName('');
                            setlength('');
                            setCategory('');
                            setAuthor('');
                        }}
                        className="btn btn-primary  " style={{ color: "white", textDecoration: "none", listStyle: "none" }}>
                        <i className="fa fa-paper-plane" > </i> Submit
                </button>
                </Link>
                </li>
            </ul>

              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="/"><button style={{ marginLeft: "-60%" }} type="button" class="btn btn-light">Cancel</button></a>
            <br />
            <br />
            <table className="table table-hover table-condensed">

                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Length</th>
                        <th>Category</th>
                        <th>Author</th>
                    </tr>
                </thead>
            </table>
            <div className="row m-2">
                <input

                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Title"
                    type="text" className="col form-control"
                    required />&nbsp;
                <br />
                <input

                    value={length}
                    onChange={(e) => setlength(e.target.value)}
                    placeholder="Length"
                    type="number" className="col form-control"
                    required />&nbsp;
                <br />
                <input

                    value={Category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Category"
                    type="text" className="col form-control"
                    required />&nbsp;
                <br />
                <input

                    value={Author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Author name"
                    type="text" className="col form-control"
                    required />
                <br />

            </div>

            <br />


        </div>
    )
}

export default TodoInput
