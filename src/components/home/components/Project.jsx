import React from 'react';
import '../styles/home.css'



const Project = (props) => {

    const projectsArray = [
        {
            img: '../../assets/images/soloProject.png',
            title: 'MYSIZE',
            tech: 'React - React-Redux - Redux-Saga - PostgresSQL - Material-UI',
            link: 'https://github.com/bradybaker/solo-project'
        },
        {
            img: '../../assets/images/movieSaga.png',
            title: 'Movie Gallery with Redux-Sagas',
            tech: 'React - React-Redux - Redux-Saga - PostgresSQL - Material-UI',
            link: 'https://github.com/bradybaker/movie-sagas'
        },
        {
            img: '../../assets/images/feedback.png',
            title: 'React Feedback Collector',
            tech: 'React - React-Redux - PostgresSQL - Material-UI',
            link: 'https://github.com/bradybaker/redux-feedback-loop'
        },
        {
            img: '../../assets/images/to_do_list.png',
            title: 'The SQL To Do List',
            tech: 'JavaScript - jQuery - PostgesSQL',
            link: 'https://github.com/bradybaker/weekend-sql-to-do-list'
        },
    ]

    return (
        <div className='projectContent'>
            <h1 className='projectHeader'>Portfolio</h1>
            <div className='projectContainer' >
                {
                    projectsArray.map(project => {
                        return (
                            <>
                                <div className="project hvr-float">
                                    <img className='projectImg' src={project.img} />
                                    <div className='projectInfo'>
                                        <p className='projectTitle'>{project.title}</p>
                                        <p style={{ textAlign: 'center' }}>Tech Used: {project.tech}</p>
                                        <a style={{ textAlign: 'center' }} href={project.link}>GO TO REPO</a>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Project