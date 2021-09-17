import React from 'react'
import '../styling/task.css'

const AddTask = () => {
    return (
        <div className="task-form">
            <form action="">
                <h2>ADD TASK</h2>
                <label htmlFor="">Task Name</label>
                <input type="text" placeholder="input task"/>
                <button>Add</button>
            </form>
            
        </div>
    )
}
export default AddTask
