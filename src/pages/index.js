import '../styles/style.css';
import React, { Component } from 'react';
import dogputer from '../img/dogputer.gif'

class Index extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="component-About">
                <img className="dogputer" src={dogputer} alt="dog typing"/>
                <p>UNDER CONSTRUCTION</p>
            </div>
        )
    }
}

export default Index;