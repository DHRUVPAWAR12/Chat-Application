import React from 'react'

const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Chat Application</span>
            <span className='title'>Register</span>
            <form>
                <input type="text" placeholder='Display Name'/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input type="file" />
                <button>Sign Up</button>
            </form>
            <p>You do have an account? Login</p>
            <button>Sign Up</button>
        </div>

    </div>
  );
}

export default Register