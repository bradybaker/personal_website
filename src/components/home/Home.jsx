import React from 'react';
import Button from 'react-bootstrap/Button'
import './styles/home.css'
import Project from '../home/components/Project'


const Home = (props) => {

    return (
        <div className="home">

            <div className='topProfile'>
                <div className='topContent'>
                    <img className='bradyPic' width={400} src='https://scontent-msp1-1.xx.fbcdn.net/v/t1.0-9/46492905_10151005296299960_8399197731494559744_n.jpg?_nc_cat=111&ccb=2&_nc_sid=174925&_nc_ohc=WeG856zaemsAX9UaiZn&_nc_ht=scontent-msp1-1.xx&oh=72cc404c61c992ff5b36b0ee58586ea1&oe=5FE8A043' />
                    <h1>Brady Baker</h1>
                    <h3>bradybaker82@gmail.com</h3>
                    <div className='aboutMe'>
                        Hello! My name is Brady Baker and welcome to my personal website! I designed this page for people to find out a little bit
                        more about myself and the work I have done as a software engineer. In short, I am a full stack software engineer that loves meeting new people and
                        staying active in whatever way calls to me that day. That could be going for a bike ride, heading to the gym, or just a walk
                        around the lake with my dog. Feel free to connect with me on Linkedin, which is linked below, or reaching out to me at my email above.
                        You can also check out my work through my linked GitHub page. I have also highlighted some of my projects below. This sight is still
                        a work in progress!
                    </div>
                    <div className="links">
                        <img className='proLink' width={200} src='https://cdn.worldvectorlogo.com/logos/linkedin-logo-2013.svg' onClick={() => window.open('https://www.linkedin.com/in/brady-baker-6587651bb/', '_blank')} />
                        <img className='proLink' width={200} src='https://aimansoliman.files.wordpress.com/2020/02/github_owler_20180612_070358_original.png' onClick={() => window.open('https://github.com/bradybaker', '_blank')} />
                    </div>
                </div>
            </div>
            <div className="projects">
                <Project />
            </div>

        </div>
    )
}

export default Home