import React from 'react'

export default function Header() {
    return (
        <header>
            <nav className="mb-4 navbar navbar-expand-sm navbar-light sticky-top" id="navbar">
                <a className="navbar-brand " href="/">YT Reader</a>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbar-menu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar-menu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
