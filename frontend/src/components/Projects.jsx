import React from 'react'

import aditya from '../assets/aditya_aura.jpg'
import Carousel from './Carousel'

import dunklytics from '../assets/dunklytics.png'
import rickbot from '../assets/rickbot.png'
import adatest from '../assets/adatest.png'
import levelingup from '../assets/levelingup.jpg'

const Projects = () => {

    const projects = [
        {
            name: 'AIBAT',
            techStack: ['Next.js', 'Django', 'Docker', 'AWS'],
            image: adatest,
            description: 'Full-stack web application for evaluating ML models in sentiment analysis. Hosted on AWS EC2 instance with Docker containerization. Used in user studies based out of UW-Madison.',
            link: 'https://github.com/landerson02/Adatest-App',
            github: 'https://github.com/landerson02/Adatest-App',
        },
        {
            name: 'Dunklytics',
            techStack: ['React.js', 'Django', 'Docker', 'GCP'],
            image: dunklytics,
            description: 'Full-stack web application for analyzing basketball statistics. Utiltized GCP for data storage, and Docker for containerization. Currently public with 100 active users.',
            link: 'https://dunklytics-app.vercel.app/',
            github: 'https://github.com/adityaanandan/Dunklytics-App',

        },
        {
            name: 'RickBot',
            techStack: ['Django', 'Scikit-learn', 'Transformers'],
            image: rickbot,
            description: 'Machine Learning model trained to converse like Rick Sanchez from Rick and Morty. Utilizes Transformers and Scikit-learn for NLP tasks. Packaged using Django ORM.', 
            link: 'https://web-production-d232.up.railway.app/',
            github: 'https://github.com/adityaanandan/RickBot',
        }, 

        {
            name: 'Leveling Up',
            techStack: ['Python', 'Java', 'C++', 'Solidity'],
            image: levelingup,
            description: 'Comprehensive guide to game design and development, with a focus on the technical aspects of game development. Includes tutorials on Python, Java, C++, and Solidity with individual projects for each language and skill.', 
            link: 'https://levelingup.adityaanandan.com/',
            github: 'https://github.com/adityaanandan/Leveling-Up-Project-Files',
        }
    ];

  return (

        <div id = "projects" className="h-full mt-64">

        <div className="flex flex-col items-center justify-center pb-4">
            <h1 className="font-poppins text-center text-6xl font-bold">Projects</h1>
        </div>
        <div className="justify-center w-4/5 sm:w-3/5 lg:w-2/5 mx-auto">
        <p className = "text-center font-poppins text-xl">
            Here are some of my projects over the years. Some of my technical interests lie in the intersections of AI, ML, and Web Development. I'm always open to working on new and interesting things so feel free to contact me with any ideas!
        </p>
        </div>
        

        <div className="flex items-center justify-center">
            <Carousel projects={projects} />
        </div>
        </div>
        

    
   
    

    

    

  )
}

export default Projects