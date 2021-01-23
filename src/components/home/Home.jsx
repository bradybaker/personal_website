import React from 'react';
import './styles/home.css'
import Project from '../home/components/Project'
import brady from '../../assets/images/bradypic.jpg'


const Home = (props) => {



    return (
        <div className="home">

            <div className='topProfile'>
                <div className='topContent'>
                    <img className='bradyPic' width={400} src={brady} />
                    <div className='name'>Brady Baker</div>
                    <div className='email'>bradybaker82@gmail.com</div>
                    <div className="links">
                        <img className='proLink' width={200} src='https://cdn.worldvectorlogo.com/logos/linkedin-logo-2013.svg' onClick={() => window.open('https://www.linkedin.com/in/brady-baker-6587651bb/', '_blank')} />
                        <img className='proLink' width={200} src='https://aimansoliman.files.wordpress.com/2020/02/github_owler_20180612_070358_original.png' onClick={() => window.open('https://github.com/bradybaker', '_blank')} />
                    </div>
                </div>
            </div>
            <div>
                <Project />
            </div>
        </div>
    )
}

export default Home