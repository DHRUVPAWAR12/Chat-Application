import React from 'react'
import "./adduser.css"
const Adduser = () => {
  return (
    <div className='adduser'>
        <form>
            <input type="text" placeholder='Username' name='Username'/>
            <button>Search</button>
        </form>
        <div className="user">
            <div className="details">
                <img src="./public/avatar.png"/>
                <span>Doctor Doom</span>
            </div>
            <button>Add Users</button>
        </div>
    </div>
  )
}

export default Adduser