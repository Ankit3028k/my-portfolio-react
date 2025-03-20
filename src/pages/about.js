import React from 'react';

function About() {
    return (
        <div id="about-us" className="bg-gray-900 w-full h-auto flex justify-center py-12">
            <div className="about-in-container w-full max-w-screen-lg px-4 lg:px-0">
                {/* Title */}
                <div className="text-center relative">
                    <h2 className="text-gray-300 uppercase text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-semibold leading-tight tracking-wide mb-6">
                        About Me
                    </h2>
                    <div className="absolute w-[220px] h-[3px] bg-gray-400 left-1/2 transform -translate-x-1/2 bottom-0"></div>
                </div>

                {/* Image and Text Section */}
                <div className="img-text flex flex-col lg:flex-row mt-8 lg:mt-16 space-y-8 lg:space-y-0 lg:space-x-8">
                    {/* Image Frame */}
                    <div className="image-frame bg-white flex justify-center w-80 items-center rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
                        <img
                            src="https://res.cloudinary.com/dtezcrxpw/image/upload/f_auto,q_auto/v1/my%20pic/vha9xmkrvuk0ku2cfntg"
                            alt="Portrait of Ankit Gangrade, Full Stack Developer"
                            className="w-[245.1px] h-[302.933px] object-cover rounded-lg"
                        />
                    </div>

                    {/* About Details */}
                    <div className="about-detail text-gray-300 font-sans">
                        <h3 className="text-yellow-500 text-2xl sm:text-3xl lg:text-[30px] font-semibold uppercase mb-2">
                            Name:{" "}
                            <a
                                href="https://www.linkedin.com/in/ankit-gangrade-90b89b259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                className="text-yellow-500 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Ankit Gangrade
                            </a>
                        </h3>
                        <span className="text-lg font-light block mb-4">Full Stack Developer</span>

                        {/* Info List */}
                        <ul className="space-y-4">
                            {/* <li className="flex">
                                <strong className="w-[80px]">Address:</strong>
                                <address className="ml-4">Housing Board Colony, Nariyal Kheda, Bhopal</address>
                            </li> */}
                            <li className="flex">
                                <strong className="w-[80px]">Profession:</strong> Full Stack Developer
                            </li>
                            <li className="flex">
                                <strong className="w-[80px]">Gmail:</strong>
                                <a href="mailto:ankitgangrade9617@gmail.com" className="ml-4 hover:underline">ankitgangrade9617@gmail.com
                                </a>
                            </li>
                            {/* <li className="flex">
                                <strong className="w-[80px]">Interest:</strong>Playing Cricket
                            </li> */}
                        </ul>

                        {/* About Text */}
                        <p className="text-md leading-relaxed mt-4">
                        Web Development Intern at Integration IT Services Pvt. Ltd. Energetically contributed to the team while honing skills in React and Node.js. Full-stack development expertise achieved significant application performance improvements through innovative problem-solving and effective API integration. Excelled in teamwork, showcasing fast-learning ability and commitment to continuous improvement.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
