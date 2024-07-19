import React from 'react'

const Contact = () => {
  return (
    <div className = "lg:mb-32 mb-16 "id = "contact">
        <div className="flex flex-col items-center justify-center pb-4 mt-32">
            <h1 className="font-poppins text-center text-6xl font-bold">Contact Me</h1>
        </div>

        <div className="lg:mt-8 flex flex-col items-center justify-center">
            <div className="rounded-3xl p-4  bg-gray-100">
                <div className="lg:flex">
                    <div className="flex">
                        <svg className = "text-2xl md:text-4xl mr-3" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 56 56"><path fill="currentColor" d="M28 51.906c13.055 0 23.906-10.851 23.906-23.906c0-13.078-10.875-23.906-23.93-23.906C14.899 4.094 4.095 14.922 4.095 28c0 13.055 10.828 23.906 23.906 23.906m-.023-22.664c-.399 0-.844-.14-1.313-.61L16.328 18.298c.281-.235.984-.469 1.969-.469h19.336c1.008 0 1.687.235 1.968.469L29.266 28.633c-.446.445-.891.61-1.29.61M23.336 28l-8.133 8.133c-.164-.281-.234-.867-.234-1.688V21.461c0-.82.07-1.383.21-1.617Zm9.187 0l8.18-8.156c.117.234.188.797.188 1.617v12.984c0 .82-.07 1.407-.235 1.688Zm-4.57 3.094c.844 0 1.5-.305 2.414-1.149l.75-.703l8.414 8.414c-.281.258-.937.422-1.922.422H18.297c-.985 0-1.64-.164-1.922-.422l8.414-8.414l.75.703c.914.844 1.57 1.149 2.414 1.149"></path></svg>
                        <a href="mailto:anandan2@wisc.edu"><p className="font-poppins text-lg md:text-2xl mr-3 hover:underline hover:underline-offset-8">anandan2@wisc.edu</p>
                        </a>
                    </div>
                    
                    <div className="flex">
                        <svg className = "text-2xl md:text-4xl mr-3" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4M7.65 13.979H5.706V7.723H7.65zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973m8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699z"></path></svg>
                        <a href="https://www.linkedin.com/in/adityaanandan/"><p className="font-poppins text-lg md:text-2xl hover:underline hover:underline-offset-8">LinkedIn</p></a>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact