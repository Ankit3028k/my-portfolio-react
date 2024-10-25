function About() {
    return (
        <div id="about-us" className="bg-gray-900 w-full h-auto flex justify-center py-12">
            <div className="about-in-container w-full max-w-screen-lg px-4 lg:px-0">
                {/* Title */}
                <div className="text-center relative">
                    <h2 className="text-gray-400 uppercase text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold leading-tight tracking-wide mb-6">
                        About me
                    </h2>
                    <div className="absolute w-[220px] h-[3px] bg-gray-400 left-1/2 transform -translate-x-1/2 bottom-0"></div>
                </div>

                {/* Image and Text Section */}
                <div className="img-text flex flex-col lg:flex-row mt-8 lg:mt-16 space-y-8 lg:space-y-0 lg:space-x-8">
                    {/* Image Frame */}
                    <div className="image-frame bg-white flex justify-center w-80 items-center rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105">
                        <img src="https://res.cloudinary.com/dtezcrxpw/image/upload/f_auto,q_auto/v1/my%20pic/vha9xmkrvuk0ku2cfntg" alt="Ankit Gangrade" className="w-[245.1px] h-[302.933px] object-cover rounded-lg" />
                    </div>

                    {/* About Details */}
                    <div className="about-detail text-gray-400 italic">
                        <h3 className="text-gold text-2xl sm:text-3xl lg:text-[30px] font-bold uppercase mb-2">
                            Name: <a href="#" className="text-gold hover:underline">Ankit Gangrade</a>
                        </h3>
                        <span className="text-lg font-light block mb-4">Full Stack Developer</span>

                        {/* Info List */}
                        <ul className="space-y-4">
                            <li className="flex">
                                <strong className="w-[80px]">Address:</strong>
                                <address className="ml-4">Housing Board Colony, Nariyal Kheda, Bhopal</address>
                            </li>
                            <li className="flex">
                                <strong className="w-[80px]">Profession:</strong> Full Stack Developer
                            </li>
                            <li className="flex">
                                <strong className="w-[80px]">Gmail:</strong>
                                <a href="mailto:ankitgangrade9617@gmail.com" className="ml-4 hover:underline">ankitgangrade9617@gmail.com</a>
                            </li>
                            <li className="flex">
                                <strong className="w-[80px]">Interest:</strong> Playing Cricket
                            </li>
                        </ul>

                        {/* About Text */}
                        <p className="text-md leading-relaxed mt-4">
                            Hello, I'm Ankit Gangrade, currently a B.Tech CS student in my 6th semester. I’m gaining hands-on 
                            experience in full-stack development. Passionate about coding and technology, I'm eager to expand my 
                            skills and knowledge in the field. Excited about what the future holds!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
