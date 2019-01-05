import React, { Component } from 'react';
import { withRouter } from 'react-router';
import ButtonAppBar from "../components/header";

class Home extends Component {
    render() {
        return (
            <div>
                <ButtonAppBar />
                this is home
            </div>
        );
    }
}

export default  withRouter(Home);