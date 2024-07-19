import React from 'react'
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { NavLink } from 'react-router-dom'
import {Link} from 'react-scroll'


const Navbar = () => {
  return (
    <>
        <nav className="flex items-center justify-between p-8">
      <div className="text-5xl font-poppins ">Aditya Anandan</div>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-6 bg-white shadow-lg rounded-md">
          <div className="grid gap-6 text-3xl font-medium">
            <Link
              to="about"
              className="font-poppins flex items-center gap-4 px-2.5 text-muted-foreground hover:text-gray-700 hover:underline-offset-8	hover:underline"
              spy={true} 
      smooth={true} 
      offset={0} 
      duration={500}>
            
              About
            </Link>
            <Link
              to="skills"
              className="font-poppins flex items-center gap-4 px-2.5 text-muted-foreground hover:text-gray-700 hover:underline-offset-8	hover:underline"
              spy={true} 
      smooth={true} 
      offset={0} 
      duration={500}
            >
              Skills
            </Link>
            <Link
              to="projects"
              className="font-poppins flex items-center gap-4 px-2.5 text-muted-foreground hover:text-gray-700 hover:underline-offset-8	hover:underline"
              spy={true} 
      smooth={true} 
      offset={0} 
      duration={500}
            >
              Projects
            </Link>
            
            <Link
              to="contact"
              className="font-poppins flex items-center gap-4 px-2.5 text-muted-foreground hover:text-gray-700 hover:underline-offset-8	hover:underline"
              spy={true} 
      smooth={true} 
      offset={0} 
      duration={500}
            >
              Contact
            </Link>
          </div>
        </PopoverContent>
      </Popover>
      <div className="hidden space-x-8 lg:flex">
        <Link to="about" className="font-poppins text-3xl font-medium text-black hover:text-gray-700 hover:underline hover:underline-offset-8" spy={true} 
      smooth={true} 
      offset={-50} 
      duration={500}>
          About
        </Link>
        <Link to="skills" className="font-poppins text-3xl font-medium text-black hover:text-gray-700 hover:underline hover:underline-offset-8	" spy={true} 
      smooth={true} 
      offset={-50} 
      duration={500}>
          Skills
        </Link>
        
        <Link to="projects" className="font-poppins text-3xl font-medium text-black hover:text-gray-700 hover:underline hover:underline-offset-8	" spy={true} 
      smooth={true} 
      offset={-50} 
      duration={500}>
          Projects
        </Link>
        
        <Link to="contact" className="font-poppins text-3xl font-medium text-black hover:underline-offset-8 hover:underline hover:text-gray-700" spy={true} 
      smooth={true} 
      offset={-50} 
      duration={500}>
          Contact
        </Link>
      </div>
    </nav>
    </>
  )
}

export default Navbar

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}