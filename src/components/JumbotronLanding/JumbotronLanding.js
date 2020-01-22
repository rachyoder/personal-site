import React from "react";
import "../JumbotronLanding/JumbotronLanding.css";
export default class JumbotronLanding extends React.Component {
    render() {
        return (
            <div className="jumbotron main my-auto">
                <h1 className="display-1 text-center" >
                    Rachael Yoder
                    </h1>
                <hr />
                <nav>
                    <ul className="nav">
                        <li>
                            Projects
                        </li>
                        <li>
                            Blog Posts
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}