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
                <div className="focus-article-body">
                    <h1>Hello, World!</h1>
                    <p>
                        I am a 22-year-old IT professtional based in Manchester, UK.
                        Originally, I am German (Ja, wirklich!) from the most beautiful city in the world, Hamburg.
                        I came to the beautiful country of Scotland two years ago to pursue my 
                        <span> </span><span className="line-through">whisky tasting career</span><span> </span>
                        masters degree in Software Development at the University of Glasgow.
                    </p>
                    <p>
                        This leads me to today. A bit more than a year of coding experience later,
                        in late 2017, a company took a pity on me and employed me as a web developer.
                        Ever since, I picked up forntend technologies, despite not having any previous
                        training in it, since I only did backend up until that point.
                        Now I enjoy forntend more than I initially expected.
                        Wanting to pick up the JavaScript framework React 
                        led me to experiement and build my own website/blog.
                    </p>
                    <p>
                        Enough now. Take your time and browse through the rest of the website.
                    </p>
                </div>
                <p className="self-description">I'm a German-citizenship-holding, UK-tax-paying and generally very conflicted <a href="https://en.wikipedia.org/wiki/Banana_(slur)">banana</a> that was born and raised in Hamburg, Germany in 1995. I am as milennial as they come.</p>
                <div className="huiImageWrapper"><img className="huiImage" src={hui} alt="picture of me"/></div>
            </div>
        )
    }
}

export default Index;