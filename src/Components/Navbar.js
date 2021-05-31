import React from 'react'
import "./navbar.css"
import logo from "./images/ZH style 2 WIP3pdf.jpg"

const Navbar = () => {
    return (
        <header>
            <nav className="navBar">
                <div className="logo">
                    <img src={logo} alt="Personal logo" className="logoPic" />
                    <h1 className="logoName" >Ziad Hegazi</h1>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
