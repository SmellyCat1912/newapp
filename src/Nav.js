import React, { Component } from 'react'

class Nav extends Component{
    render(){
        return(
            <nav className="nav">
            <a className="nav-link active" href="https://www.google.com">Active</a>
            <a className="nav-link" href="#">Link</a>
            <a className="nav-link" href="#">Link</a>
            <a className="nav-link disabled" href="#">Disabled</a>
            </nav>
        )
    }
}

export default Nav 