import React from 'react';

function Skills() {
    // Reusable SkillItem Component
    const SkillItem = ({ skillName, skillPercentage }) => (
        <div className="skill-item text-center">
            <div className="relative w-36 h-36 rounded-full skill-circle flex items-center justify-center mx-auto mb-4">
                <div
                    className="w-full h-full rounded-full skill-percentage flex items-center justify-center text-white text-xl font-bold animate-circle"
                    style={{ background: `conic-gradient(#007bff ${skillPercentage}%, #e0e0e0 ${skillPercentage}%)` }}
                >
                    {skillPercentage}%
                </div>
            </div>
            <p className="skill-name">{skillName}</p>
        </div>
    );

    // Skill Data
    const skills = [
        { name: "HTML, CSS & JavaScript", percentage: 80 },
        { name: "TailwindCSS", percentage: 90 },
        { name: "Node.js, Express & MongoDB", percentage: 75 },
        { name: "React", percentage: 80 },
    ];

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
                    {skills.map((skill, index) => (
                        <SkillItem
                            key={index}
                            skillName={skill.name}
                            skillPercentage={skill.percentage}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Skills;
