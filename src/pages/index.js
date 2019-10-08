import '../styles/style.css';
import React, { Component } from 'react';
import hui from '../img/profile_picture.jpg'
import TemplateWrapper from '../components/default';

class Index extends Component {

    render() {
        return (
            <TemplateWrapper>
                <div className="page-index">
                    <div className="focus-article-body">
                        <h1>Hello, World!</h1>
                        <p>
                            I am an IT professional based in London.
                            Originally, I am from Germany (Ja, wirklich!). I was
                            born and raised in the most beautiful city in the world, Hamburg.
                            Two years ago, I came to Scotland to pursue my
                        <span> </span><span className="line-through">whisky tasting career</span><span> </span>
                            masters degree in Software Development at the University of Glasgow.
                        </p>

                        <p>
                            Fast forward to the days beyond whisky - After starting my developer journey
                        at <a href="https://www.thg.com/" target="_blank" rel="noopener noreferrer">The Hut Group</a>, I joined<span> </span> 
                        <a href="https://www.thoughtworks.com/" target="_blank" rel="noopener noreferrer">ThoughtWorks</a>. I was initially part of the Manchester branch but then I deserted and moved to London.
                            I experienced some really fun months as a consultant and learnt a lot about agile practices and software practices thanks to excellent colleagues, role models and mentors.
                        <p>

                            Now I work at <a href="https://www.askattest.com/" target="_blank" rel="noopener noreferrer">Attest</a><span> </span>
                            where I am a backend engineer in the platform squad. Because of the exposure to product thinking I had 
                            at ThoughtWorks, I also regularly wear a product manager hat to help the squad getting to know platform
                            as a product. Luckily, Attest supports me in doing whatever I want to do even though it's not aligned with my official job title.
                        </p>
                    </p>
                        <p>
                            I am not quite sure what this site is supposed to be or show but mainly,
                            building it was a valuable learning experience for me.
                    </p>
                    </div>
                    <p className="self-description">
                        It's tricky to describe oneself in a single sentence but here goes:
                        I'm a German-citizenship-holding, UK-tax-paying, Chinese and Vietnamese child of globalisation
                        and generally a very conflicted being and as millennial as they come.
                    </p>
                    <div className="huiImageWrapper"><img className="huiImage" src={hui} alt="portait of Cynthia Lee" /></div>
                </div>
            </TemplateWrapper>
        )
    }
}

export default Index;
