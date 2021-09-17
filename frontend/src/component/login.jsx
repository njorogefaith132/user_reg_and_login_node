import React from 'react'
import '../styling/login.css'

const Login = () => {
    return (
        <div className="login-form">
            <form>
            <label htmlFor="">Username</label>
            <input type="text" placeholder="input username" />

            <label htmlFor="">Password</label>
            <input type="text" placeholder="input password" />

            <button>Login</button>
            </form>

        </div>
        
    )
}

export default Login
