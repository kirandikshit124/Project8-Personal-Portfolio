import { FaReact, FaNodeJs, FaGithub, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiTailwindcss, SiExpress, SiCplusplus, SiRedux, SiPostman, SiMongoose } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IoGitBranch } from "react-icons/io5";
import { BiLogoDocker } from "react-icons/bi";


function Skills(){
    return <>
        <section id="skills" className="min-h-screen relative overflow-hidden px-10 py-24 bg-gradient-to-br from-slate-950 to-blue-950">
            <div className="text-center mb-20">
                <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                    Skills
                </h1>
                <p className="text-gray-400 mt-4 text-lg">
                    Technologies and tools I worked with.</p>
            </div>
            <div className="relative w-full">
                <div className="absolute md:top-30 md:left-60 top-100 left-10 text-yellow-400 text-5xl animate-float hover:scale-110 transition duration-300">
                    <SiJavascript />
                    <p className="font-thin text-xs text-white">JavaScript</p>  
                </div>
                <div className="absolute md:top-40 md:right-72 top-25 right-10 text-green-500 text-5xl animate-float hover:scale-110 transition duration-300">
                    <FaNodeJs />   
                    <p className="font-thin text-xs text-white">&nbsp; NodeJs</p>  
                </div>
                <div className="absolute md:bottom md:left-100 top-10 left-25 text-green-500 text-5xl animate-float hover:scale-110 transition duration-300">
                    <SiMongodb />   
                    <p className="font-thin text-xs text-white">MongoDB</p>  
                </div>
                <div className="absolute md:top-57 md:left-[35%] top-40 left-[40%] text-cyan-400 text-5xl animate-float hover:scale-110 transition duration-300">
                    <FaReact />   
                    <p className="font-thin text-xs text-white">&nbsp;ReactJs</p>  
                </div>
                <div className="absolute md:top-24 md:left-[50%] top-66 left-[45%] text-gray-400 text-5xl animate-float hover:scale-110 transition duration-300">
                    <SiExpress />   
                    <p className="font-thin text-xs text-white">ExpressJs</p>  
                </div>
                <div className="absolute md:top-40 md:right-[35%] top-25 text-yellow-300 text-5xl animate-float hover:scale-110 transition duration-300">
                    <FaCss3 />   
                    <p className="font-thin text-xs text-white">&nbsp;&nbsp;&nbsp; CSS</p>  
                </div>
                <div className="absolute md:bottom md:right-100 top-70 right-10 text-orange-500 text-5xl animate-float hover:scale-110 transition duration-300">
                    <FaHtml5 />   
                    <p className="font-thin text-xs text-white">&nbsp;&nbsp; HTML</p>  
                </div>
                <div className="absolute md:top-80 md:left-60 top-77 left text-white text-5xl animate-float hover:scale-110 transition duration-300">
                    <FaGithub />   
                    <p className="font-thin text-xs text-white">&nbsp; Github</p>  
                </div>
                <div className="absolute md:top-80 md:right-[50%] top-95 right-24 text-blue-800 text-5xl animate-float hover:scale-110 transition duration-300">
                    <SiCplusplus />   
                    <p className="font-thin text-xs text-white">&nbsp;&nbsp;&nbsp; C++</p>  
                </div>
                <div className="absolute md:top-80 md:right-55 bottom right-2 text-cyan-400 text-5xl animate-float hover:scale-110 transition duration-300">
                    <SiRedux />   
                    <p className="font-thin text-xs text-white">&nbsp; Redux</p>  
                </div>
                <div className="absolute md:top-10 md:right-55 right-[85%] text-blue-500 text-5xl animate-float hover:scale-110 transition duration-300">
                    <VscVscode />   
                    <p className="font-thin text-xs text-white"> &nbsp;VsCode</p>  
                </div>
                <div className="absolute md:top-2 md:left-35 left-[40%] bottom-1 text-green-700 text-5xl animate-float hover:scale-110 transition duration-300">
                    <IoGitBranch />   
                    <p className="font-thin text-xs text-white">Git Bash</p>  
                </div>
                <div className="absolute md:top-60 md:left-15 top-50 left-4 text-orange-600 text-5xl animate-float hover:scale-110 transition duration-300">
                    <SiPostman className="bg-white rounded-full" />   
                    <p className="font-thin text-xs text-white">Postman</p>  
                </div>
                <div className="absolute md:top-90 md:right-[35%] top-45 right-2 text-red-800 text-5xl animate-float hover:scale-110 transition duration-300">
                    <SiMongoose />   
                    <p className="font-thin text-xs text-white">Mongoose</p>  
                </div>
                <div className="absolute md:top-92 md:right-20 top-99 right-1.5 text-white text-5xl animate-float hover:scale-110 transition duration-300">
                    <BiLogoDocker className="bg-blue-500 rounded-full" />   
                    <p className="font-thin text-xs text-white">&nbsp; Docker</p>  
                </div>
            </div>
        </section>
    </>
}

export default Skills;