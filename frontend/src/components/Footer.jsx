import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
return (
    <div className = "lg:mb-32">
        <div className="hidden lg:flex justify-center items-center">
            <Link
                to="about"
                className="font-poppins text-3xl font-medium text-black hover:text-gray-700 hover:underline hover:underline-offset-8 pr-4"
                smooth={true}
                offset={-50}
                duration={500}
            >
                About
            </Link>
            <Link
                to="skills"
                className="font-poppins text-3xl font-medium text-black hover:text-gray-700 hover:underline hover:underline-offset-8 pr-4"
                smooth={true}
                offset={-50}
                duration={500}
            >
                Skills
            </Link>

            <Link
                to="projects"
                className="font-poppins text-3xl font-medium text-black hover:text-gray-700 hover:underline hover:underline-offset-8 pr-4"
                smooth={true}
                offset={-50}
                duration={500}
            >
                Projects
            </Link>

            <Link
                to="contact"
                className="font-poppins text-3xl font-medium text-black hover:underline-offset-8 hover:underline hover:text-gray-700"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
            >
                Contact
            </Link>
        </div>
    </div>
);
};

export default Footer;