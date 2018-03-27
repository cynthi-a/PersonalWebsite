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
                        I am a 22-year-old IT professional based in Manchester, UK.
                        Originally, I am from Germany (Ja, wirklich!). I was
                        born and raised in the most beautiful city in the world, Hamburg.
                        Two years ago, I came to Scotland to pursue my 
                        <span> </span><span className="line-through">whisky tasting career</span><span> </span>
                        masters degree in Software Development at the University of Glasgow.
                    </p>
                    <p>
                        So far, deciding that I want to pursue a career in IT instead of
                        business psychology, which I studied in my undergrad, is the best decision I have made.
                        The degree was at times very demanding but I can also confidently say that
                        I spent the best year of my life so far in Glasgow.
                    </p>
                    <p>
                        Fast forward to today - A bit more than a year of programming experience later,
                        in 2017, a company took a pity on me and employed me as a web developer.
                        Ever since, I picked up forntend technologies, despite not having any previous
                        training in it, since I only did backend up until that point.
                        Now I enjoy forntend more than I initially expected.
                        Wanting to pick up the JavaScript framework React 
                        led me to experiement and build my own website.
                    </p>
                    <p>
                        I am not quite sure what this site is supposed to be or show but mainly,
                        it's an excellent learning experience for me.
                    </p>
                </div>
                <p className="self-description">
                    It's tricky to describe oneself in a single sentence but here goes:
                    I'm a German-citizenship-holding, UK-tax-paying, Chinese and Vietnamese child of globalisation
                    and generally a very conflicted being and as milennial as they come.
                </p>
                <div className="huiImageWrapper"><img className="huiImage" src={hui} alt="picture of Cynthia Lee"/></div>
            </div>
        )
    }
}

export default Index;