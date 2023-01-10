import React from 'react'
import { Link } from 'react-router-dom'

export default function AppHeader() {
    return (
        <header id="header" className="grid">
            <nav className="grid">
                <Link to="/">
                    <img width="150" src="/images/logo.jpg" alt="logo" title="Dino Store"/>
                </Link>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/store">Store</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
