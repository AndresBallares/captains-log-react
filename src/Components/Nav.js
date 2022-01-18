import { Component } from "react";
import { Link } from "react-router-dom";
<link rel="stylesheet" href="./Nav.css" />


class Nav extends Component {
    render (){
        return (
            <div className="navBar">
                <Link to="/">
                    <div className="homeButton">Home</div>
                </Link>
                <Link to="/logs">
                    <div className="logButton">LOGS</div>
                </Link>
                <Link to="/logs/new">
                    <div className="newLogButton">NEW</div>
                </Link>

            </div>
        );
    }
}

export default Nav;