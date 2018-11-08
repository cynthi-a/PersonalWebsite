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
                        I am a 23-year-old IT professional based in Manchester, UK.
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
                        Fast forward to today - After having spent some exciting months as a graduate software engineer
                        at <a href="https://www.thg.com/" target="_blank">The Hut Group</a>, I am now
                        employed at <a href="https://www.thoughtworks.com/" target="_blank">ThoughtWorks</a><span>. </span>
                        Here, I am given the opportunity to learn more and more about
                        good software engineering while also meeting loads of interesting people.
                    </p>
                    <p>
                        I am not quite sure what this site is supposed to be or show but mainly,
                        building it was an excellent learning experience for me.
                    </p>
                </div>
                <p className="self-description">
                    It's tricky to describe oneself in a single sentence but here goes:
                    I'm a German-citizenship-holding, UK-tax-paying, Chinese and Vietnamese child of globalisation
                    and generally a very conflicted being and as millennial as they come.
                </p>
                <div className="huiImageWrapper"><img className="huiImage" src={hui} alt="picture of Cynthia Lee"/></div>
            </div>
        )
    }
}

export default Index;
