import React from 'react';
import '../styles/home.css'


const Project = (props) => {

    return (
        <div className='projectContent'>
            <div className="project hvr-float">
                <img className='projectImg' src='https://media-exp1.licdn.com/dms/image/C5622AQHlrqPUMe20Lg/feedshare-shrink_1280-alternative/0/1606085018003?e=1609372800&v=beta&t=XollLtd1n1svX-psPwidbc5GSz5UCy9Fi1V39oumt80' />
                <div className='projectInfo'>
                    <p className='projectTitle'>The SQL To-Do List</p>
                    <p>Tech Used: JavaScript - jQuery - PostgreSQL</p>
                    <p>--Brief project description goes here--</p>
                </div>
            </div>
        </div>
    )
}

export default Project