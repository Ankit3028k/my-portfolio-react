function Skills() {
    return (
        <div className="w-full bg-gray-900 flex justify-center py-12 skills-section">
            <section className="w-full max-w-screen-lg px-4 lg:px-0 skills-container">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl text-white uppercase font-bold tracking-widest mb-4">
                        My Skills
                    </h2>
                    <hr className="mx-auto w-1/2 border-gray-600" />
                </div>

                {/* Skills Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                    {/* Skill Item */}
                    <div className="skill-item text-center">
                        <div className="relative w-36 h-36 rounded-full skill-circle flex items-center justify-center mx-auto mb-4">
                            <div className="w-full h-full rounded-full skill-percentage flex items-center justify-center text-white text-xl font-bold">
                                95%
                            </div>
                        </div>
                        <p className="skill-name">HTML & CSS</p>
                    </div>

                    {/* Skill Item */}
                    <div className="skill-item text-center">
                        <div className="relative w-36 h-36 rounded-full skill-circle flex items-center justify-center mx-auto mb-4">
                            <div className="w-full h-full rounded-full skill-percentage flex items-center justify-center text-white text-xl font-bold">
                                80%
                            </div>
                        </div>
                        <p className="skill-name">Bootstrap</p>
                    </div>

                    {/* Skill Item */}
                    <div className="skill-item text-center">
                        <div className="relative w-36 h-36 rounded-full skill-circle flex items-center justify-center mx-auto mb-4">
                            <div className="w-full h-full rounded-full skill-percentage flex items-center justify-center text-white text-xl font-bold">
                                75%
                            </div>
                        </div>
                        <p className="skill-name">JavaScript</p>
                    </div>

                    {/* Skill Item */}
                    <div className="skill-item text-center">
                        <div className="relative w-36 h-36 rounded-full skill-circle flex items-center justify-center mx-auto mb-4">
                            <div className="w-full h-full rounded-full skill-percentage flex items-center justify-center text-white text-xl font-bold">
                                60%
                            </div>
                        </div>
                        <p className="skill-name">Photoshop</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Skills;
