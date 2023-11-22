import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    let location = useLocation();
    let history = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        history("/login");
    }
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary navbar bg-dark" data-bs-theme="dark">
            <div class="container-fluid">
                <Link class="navbar-brand" href="/">iNoteBook</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                    </ul>
                    {!localStorage.getItem('token') ? <form className="d-flex">
                        {/* {(location.pathname !== "/login" && location.pathname !== "/signup") && <Link className="btn btn-primary mx-2" role="button" to="/login">Sign in</Link>}
                        {(location.pathname !== "/login" && location.pathname !== "/signup") && <Link className="btn btn-primary mx-2" role="button" to="/signup">Sign up</Link>} */}
                    </form> : <button className='btn btn-primary' onClick={handleLogout}>Log out</button>}
                </div>
            </div>
        </nav>
    )
}


export default Navbar
