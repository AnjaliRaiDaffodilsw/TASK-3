import React from 'react'
import { Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (

        <>
            <nav className="  nav justify-content-center nav-pills flex-column flex-md-row">
                <ul >
                    <li>
                        <button className="btn btn-primary " ><Link to="/addlist"style={{color: "white"}}><i className = "fa fa-plus"></i> New</Link>
                        </button>
                    </li>
                </ul>
            </nav>
        </>

    )
}

export default Header
