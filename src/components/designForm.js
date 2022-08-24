import React from 'react'

import './designForm.css'

const DesignForm = () => {
    return (
        <div class='form-background'>
            <form class='srg-form'>
                <h1 class='form-heading'>Login</h1>
                <input type='email' placeholder='Email'></input>
                <input type='password' placeholder='Password'></input>
                <button>NEXT</button>
            </form>

        </div>
    )
}

export default DesignForm