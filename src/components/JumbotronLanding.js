import React from "react";
import { Jumbotron } from "reactstrap";

export default class JumbotronLanding extends React.Component {
    render() {
        return (
            <div className="container h-100">
                <Jumbotron className="my-auto">
                    <h1 className="text-center display-3" >
                        Rachael Yoder
                    </h1>
                    <hr />
                </Jumbotron>
            </div>
        );
    }
}