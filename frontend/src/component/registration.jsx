import React from 'react'
import '../styling/registration.css'

const Registration = () => {
    return (
        <div className="registration-form">
             <form>
            <label htmlFor="">Username</label>
            <input type="text" placeholder="input username" />

            <label htmlFor="">Password</label>
            <input type="text" placeholder="input password" />

            <label htmlFor="">Project Name</label>
            <input type="text" placeholder="input project name" />

            <button>Register</button>
            </form>
        </div>
    )
}

export default Registration
