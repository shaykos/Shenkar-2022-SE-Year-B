import React, { useState } from 'react'

export default function Login() {
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');


    async function Submit(event) {
        event.preventDefault();

        let user = { email, password };

        let res = await fetch('http://localhost:5500/api/user/login', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        });

        let data = await res.json();

        alert('welcome ' + data.username);
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={Submit}>
                <input type='email' placeholder='email' required
                    onChange={(event) => SetEmail(event.target.value)} />

                <input type='password' placeholder='password' required
                    onChange={(event) => SetPassword(event.target.value)} />

                <button type="submit">Login</button>
            </form>
        </div>
    )
}
