import React from 'react';
import '../styles/home.css';
import mySize from '../../../assets/images/soloProject.png'
import movie from '../../../assets/images/movieSaga.png'
import feedback from '../../../assets/images/feedback.png'
import todo from '../../../assets/images/to_do_list.png'



const Project = (props) => {

    const projectsArray = [
        {
            img: mySize,
            title: 'MYSIZE',
            tech: 'React - React-Redux - Redux-Saga - PostgresSQL - Material-UI',
            link: 'https://github.com/bradybaker/solo-project'
        },
        {
            img: movie,
            title: 'Movie Gallery with Redux-Sagas',
            tech: 'React - React-Redux - Redux-Saga - PostgresSQL - Material-UI',
            link: 'https://github.com/bradybaker/movie-sagas'
        },
        {
            img: feedback,
            title: 'React Feedback Collector',
            tech: 'React - React-Redux - PostgresSQL - Material-UI',
            link: 'https://github.com/bradybaker/redux-feedback-loop'
        },
        {
            img: todo,
            title: 'The SQL To Do List',
            tech: 'JavaScript - jQuery - PostgesSQL',
            link: 'https://github.com/bradybaker/weekend-sql-to-do-list'
        },
    ]

    return (
        <div className='projectContent'>
            <div className='projectHeader'>Portfolio</div>
            <div className='projectContainer' >
                {
                    projectsArray.map(project => {
                        console.log('Project image', project.img)
                        return (
                            <div className="project hvr-float">
                                <img className='projectImg' src={project.img} />
                                <div className='projectInfo'>
                                    <div className='projectTitle'>{project.title}</div>
                                    <div style={{ textAlign: 'center' }}>Tech Used: {project.tech}</div>
                                    <a style={{ textAlign: 'center' }} href={project.link}>GO TO REPO</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Project