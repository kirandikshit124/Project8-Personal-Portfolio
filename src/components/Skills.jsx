import { FaReact, FaNodeJs, FaGithub, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiTailwindcss, SiExpress, SiCplusplus, SiRedux, SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IoGitBranch } from "react-icons/io5";


function Skills(){
    return <>
        <section id="skills" className="min-h-screen relative overflow-hidden px-10 py-24 bg-gradient-to-br from-slate-950 to-blue-950">
            <div className="text-center mb-20">
                <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                    Skills
                </h1>
                <p className="text-gray-400 mt-4 text-lg">
                    Technologies and tools I work with.</p>
            </div>
            <div className="relative w-full">
                <div className="absolute top-30 left-60 text-yellow-400 text-5xl animate-float hover:scale-110 transition duration-300">
                    <SiJavascript />
                    <p className="font-thin text-xs text-white">JavaScript</p>  
                </div>
                <div className="absolute top-40 right-72 text-green-500 text-5xl animate-float hover:scale-110 transition duration-300">
                    <FaNodeJs />   
                    <p className="font-thin text-xs text-white">&nbsp; NodeJs</p>  
                </div>
                <div className="absolute bottom left-100 text-green-500 text-5xl animate-float hover:scale-110 transition duration-300">
                    <SiMongodb />   
                    <p className="font-thin text-xs text-white">MongoDB</p>  
                </div>
                <div className="absolute top-62 left-[35%] text-cyan-400 text-5xl animate-float hover:scale-110 transition duration-300">
                    <FaReact />   
                    <p className="font-thin text-xs text-white">&nbsp;ReactJs</p>  
                </div>
                <div className="absolute top-24 left-[50%] text-gray-400 text-5xl animate-float hover:scale-110 transition duration-300">
                    <SiExpress />   
                    <p className="font-thin text-xs text-white">ExpressJs</p>  
                </div>
                <div className="absolute top-60 right-[35%] text-yellow-300 text-5xl animate-float hover:scale-110 transition duration-300">
                    <FaCss3 />   
                    <p className="font-thin text-xs text-white">&nbsp;&nbsp;&nbsp; CSS</p>  
                </div>
                <div className="absolute bottom right-100 text-orange-500 text-5xl animate-float hover:scale-110 transition duration-300">
                    <FaHtml5 />   
                    <p className="font-thin text-xs text-white">&nbsp;&nbsp; HTML</p>  
                </div>
                <div className="absolute top-80 left-60 text-white text-5xl animate-float hover:scale-110 transition duration-300">
                    <FaGithub />   
                    <p className="font-thin text-xs text-white">&nbsp; Github</p>  
                </div>
                <div className="absolute top-90 right-[50%] text-blue-800 text-5xl animate-float hover:scale-110 transition duration-300">
                    <SiCplusplus />   
                    <p className="font-thin text-xs text-white">&nbsp;&nbsp;&nbsp; C++</p>  
                </div>
                <div className="absolute top-80 right-55 text-cyan-400 text-5xl animate-float hover:scale-110 transition duration-300">
                    <SiRedux />   
                    <p className="font-thin text-xs text-white">&nbsp; Redux</p>  
                </div>
                <div className="absolute top-10 right-55 text-blue-500 text-5xl animate-float hover:scale-110 transition duration-300">
                    <VscVscode />   
                    <p className="font-thin text-xs text-white"> &nbsp;VsCode</p>  
                </div>
                <div className="absolute top-2 left-35 text-green-700 text-5xl animate-float hover:scale-110 transition duration-300">
                    <IoGitBranch />   
                    <p className="font-thin text-xs text-white">Git Bash</p>  
                </div>
                <div className="absolute top-60 left-15 text-orange-600 text-5xl animate-float hover:scale-110 transition duration-300">
                    <SiPostman className="bg-white rounded-full" />   
                    <p className="font-thin text-xs text-white">Postman</p>  
                </div>
            </div>
        </section>
    </>
}

export default Skills;