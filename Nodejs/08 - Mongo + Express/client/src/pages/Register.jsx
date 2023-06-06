import React from 'react'

export default function Regsiter() {
    return (
        <div>
            <h1>Regsiter</h1>
            <form>
                <input type='text' placeholder='username' required/>
                <input type='email' placeholder='email' required/>
                <input type='password' placeholder='password' required/>
                <button type="submit">Regsiter</button>
            </form>
        </div>
    )
}
