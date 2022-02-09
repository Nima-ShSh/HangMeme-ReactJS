import React, { Component } from "react"
import { Link } from "react-router-dom"
// import "bootstrap/dist/css/bootstrap.min.css"


class NavBar extends Component {
    render() {
        return (
            <nav className="navbar bg-dark text-white flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Hangman</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/chat">Chat with Opponent</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/leaderboards">Leaderboards</Link>
                    </li> */}
                    <li className="nav-item">
                        {/* <Link className="nav-link" to="/tasks">Tasks</Link> */}
                    </li>
                    <li className="nav-item">
                        {/* <Link className="nav-link" to="/events">Events</Link> */}
                    </li>
                </ul>
                <span className="navbar-text">
                    <ul className="nav nav-pills nav-fill">
                        <li className="nav-item">
                            {/* <Link className="nav-link" to="/register">Register</Link> */}
                        </li>
                    </ul>
                </span>
            </nav>
        )
    }
}

export default NavBar
