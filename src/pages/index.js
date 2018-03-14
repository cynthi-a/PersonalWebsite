import '../styles/style.css';
import React, { Component } from 'react';
import hui from '../img/profile_picture.jpg'

class Index extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="page-index">
                <h1 className="focus-article-header">Hello, World!</h1>
                <img className="huiImage" src={hui} alt="picture of me"/>
                <p className="self-description">I'm a German-nationality-holding, UK-tax-paying and generally very conflicted <a href="https://en.wikipedia.org/wiki/Banana_(slur)">banana</a> that was harvested in Hamburg, Germany in 1995. I am as milennial as they come.</p>
                <p className="focus-article-body">My first personal website</p>
            </div>
        )
    }
}

export default Index;