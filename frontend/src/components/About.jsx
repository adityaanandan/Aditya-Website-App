import React from 'react'
import aura from '../assets/aditya_aura.jpg'

const About = () => {
return (

<div className="h-full md:h-screen">
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-poppins text-center text-6xl font-bold">About Me</h1>
    </div>

    <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
      <div className="w-80 h-80 lg:w-1/4 lg:h-auto">
        <img src={aura} alt="Aura" className="w-full rounded-3xl h-full object-cover" />
      </div>

      <div className = "lg:pl-12">
      <div className="py-6 flex items-center flex-col"> 
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="rounded-3xl p-4 w-80 lg:w-96 border border-gray-400 border-2">
        <svg className="mx-auto text-4xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="currentColor" fillRule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m1.53-15.53l-1-1a.75.75 0 0 0-1.06 0l-1 1a.75.75 0 0 0 .78 1.237v5.035a2.448 2.448 0 0 0-.22-.08l-1.403-.44a1.25 1.25 0 0 1-.877-1.192v-.448a1.75 1.75 0 1 0-1.5 0v.448a2.75 2.75 0 0 0 1.93 2.624l1.403.439a.95.95 0 0 1 .667.907v.418a1.75 1.75 0 1 0 1.645.078a.95.95 0 0 1 .522-.403l1.403-.439a2.75 2.75 0 0 0 1.93-2.624v-.322c.2-.039.433-.123.634-.324c.236-.236.311-.516.341-.735c.025-.188.025-.41.025-.614v-.07c0-.205 0-.426-.025-.614c-.03-.219-.105-.5-.341-.735a1.239 1.239 0 0 0-.735-.341c-.188-.025-.41-.025-.614-.025h-.07c-.205 0-.426 0-.614.025c-.219.03-.5.105-.735.341a1.239 1.239 0 0 0-.341.735a4.844 4.844 0 0 0-.025.615v.068c0 .206 0 .427.025.615c.03.219.105.5.341.735c.2.2.434.285.634.324v.322a1.25 1.25 0 0 1-.877 1.193l-1.404.438a2.72 2.72 0 0 0-.219.08V7.708a.75.75 0 0 0 .78-1.237" clipRule="evenodd"></path>
        </svg>
        <h2 className="font-poppins text-center text-2xl font-bold">Technical Interests</h2>
        <h2 className="text-xl text-center font-poppins text-gray-700">Fullstack Development, Machine Learning, Cloud Computing, Data Analytics, Statistics</h2>
          </div>
          <div className="rounded-3xl p-4 w-80 lg:w-96 border border-gray-400 border-2">
        <svg className="mx-auto text-4xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="currentColor" fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m-.773 6.569l-2.015 1.605c-.845.673-1.268 1.01-1.185 1.385l.004.019c.094.373.63.517 1.702.804c.595.16.893.24 1.033.465l.007.012c.135.229.058.515-.095 1.087l-.04.15c-.426 1.586-.638 2.379-.229 2.635c.41.256 1.06-.262 2.363-1.3l2.015-1.604c.846-.674 1.268-1.01 1.186-1.386l-.004-.019c-.095-.373-.63-.517-1.702-.804c-.595-.16-.893-.24-1.033-.465l-.007-.012c-.135-.228-.058-.514.095-1.086l.04-.15c.425-1.586.638-2.38.229-2.636c-.41-.256-1.061.263-2.364 1.3" clipRule="evenodd"></path>
        </svg>
        <h2 className="font-poppins text-center text-2xl font-bold">Hobbies</h2>
        <h2 className="text-xl text-center font-poppins text-gray-700">Music, Percussion, Basketball, Badminton, Table Tennis, Writing, Gaming</h2>
          </div>
        </div> 
      </div>

      <h1 className = "font-poppins text-center text-xl max-w-3xl">Hello, my name is Aditya. I'm a rising Junior at UW-Madison majoring in Computer Science. I have a passion for tech, computation, and building products that improve lives. I've been coding for over 7 years now, and I love building projects, improving my skills, and collaborating with fellow developers!</h1>
        <br />

        <h1 className = "font-poppins text-center text-xl max-w-3xl">Outside of school, I love working on personal projects, playing sports, and gaming. I'm also a professional musician, and I've been learning Indian Classical singing/percussion for over 15 years. For an overview of my performances, click <a href=""> <span className = "underline underline-offset-4">here</span></a>.  </h1>
      </div>
    
    
    </div>
    </div>
    

)
}

export default About