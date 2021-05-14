import React, { useState } from 'react';
import { addTodo } from '../redux/actions';
import { v1 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './TodoInput.css';

function TodoInput() {


    let [name, setName] = useState();
    let [length, setlength] = useState()
    let [Category, setCategory] = useState()
    let [Author, setAuthor] = useState()
    const [isEmpty, setisEmpty] = useState(true);

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

              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="/"><button style={{ marginLeft: "-50%" }} type="button" class="btn btn-light">Cancel</button></a>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button
                style={{ textAlign: "center" }}
                type="button"
                class="btn btn-info"
                
                onClick={() => {
                    setName('');
                    setlength('');
                    setCategory('');
                    setAuthor('');
                }}>Clear</button>
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
            <form >
                <div className="row m-2">
                    <input
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                           
                        }}
                        placeholder="Title"
                        type="text" className="col form-control"
                        required="required"

                    />&nbsp;
                <br />

                    <input
                        value={length}
                        onChange={(e) => setlength(e.target.value)}
                        placeholder="Length"
                        type="number" className="col form-control"
                        required="required" />&nbsp;
                <br />
                    <input

                        value={Category}
                        onChange={(e) => {
                            setCategory(e.target.value);
                        }}
                        placeholder="Category"
                        type="text" className="col form-control"
                        required="required" />&nbsp;
                <br />
                    <select
                        value={Author}
                        onChange={(e) => setAuthor(e.target.value)}
                        type="text" className="col form-control"
                        required>
                        <option value=""></option>
                        <option value="cory-house">Cory House</option>
                        <option value="scott-allen">Scott Allen</option>
                        <option value="dan-wahlin">Dan Wahlin</option>
                    </select>
                    <br />

                </div>

                <br />

            </form>
        </div>
    )
}

export default TodoInput
