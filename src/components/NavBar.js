import React from "react";
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <div className={"navwrap"}>
            <nav className={"navbar"}>
                <div className={"navlogo"}>This is logo</div>
                <ul className={"lst1"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Concert">Concerts</Link>
                    </li>
                    {/*<li>*/}
                    {/*    <Link to="/Showcase">Showcase</Link>*/}
                    {/*</li>*/}
                </ul>
                <ul className={"lst2"}>
                    <li>
                        <Link to="/Members">Members</Link>
                    </li>
                    <li>
                        <Link to="/Spotify">Spotify</Link>
                    </li>
                    <li>
                        <Link to="/Login">Login</Link>
                    </li>
                </ul>
            </nav>

        </div>

    );
}

export default NavBar;
