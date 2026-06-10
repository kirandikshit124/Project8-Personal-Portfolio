import Details from "./Details";

function Education(){
    return <>
        <section id="education" className="min-h-screen bg-slate-50 px-10 py-24">
            <div className="text-center mb-20">
                <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                    Education
                </h1>
                <p className="text-gray-400 mt-4 text-lg">
                    My academic journey and learning path.
                </p>
            </div>
            <div className="relative border-l-4 border-cyan-400 max-w-4xl mx-auto">
                <div className="mb-16 ml-10">
                    <Details 
                    degree="Bachelor of Technology | Computer Science"
                    institute="Arya College of Engineering & IT"
                    year="2022 - 2026"
                    description="Completed Computer Science Engineering with strong interest in Full Stack Development, Data Structures & Algorithms, 
                            and modern web technologies. Actively building projects and improving problem-solving skills through continuous 
                            learning and practical development experience."
                    />
                </div>
                <div className="mb-16 ml-10">
                    <Details 
                    degree="Senior Secondary (12th)"
                    institute="Kendriya Vidyalaya No. 2 Jaipur"
                    year="2021 - 2022"
                    description="Completed higher secondary education focuses on Science and Mathematics, with strong academic performance and 
                            developing analytical thinking and a strong foundation in technology and problem-solving."
                    />
                </div>
                <div className="mb-16 ml-10">
                    <Details 
                    degree="Secondary (10th)"
                    institute="Kendriya Vidyalaya No. 2 Jaipur"
                    year="2019 - 2020"
                    description="Completed secondary education with consistent academic performance while building curiosity toward computers, 
                            logical reasoning, and emerging technologies."
                    />
                    <div className="absolute w-5 h-5 bg-cyan-400 rounded-full -left-[12px] shadow-[0_0_20px_rgba(34,211,238,0.8)]"></div>
                </div>
            </div>
        </section>
    </>
}

export default Education;