import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    let history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://inotebook-backend-3vn7.onrender.com/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            //save the authtoken and redirect
            localStorage.setItem('token', json.authtoken);
            props.showAlert("Logged In successfully!", "success");
            history("/noteshome");
        }
        else {
            props.showAlert("Invalid credentials", "danger");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className='mt-2' >
            <h2 className='my-1'>Login to continue</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" value={credentials.email} onChange={onChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <hr />
            <div className="my-2">
                <h6 className='mx-1'>Don't have an account?</h6>
                <Link className="btn btn-success mx-2" role="button" to="/signup">Create a new account</Link>
            </div>
        </div>
    )
}

export default Login
