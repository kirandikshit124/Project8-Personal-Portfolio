import { IoHomeOutline } from "react-icons/io5";


function Navbar(){
    return <>
        {/* <nav className="bg-blue-950 justify-between flex fixed w-[90%] px-6 py-4"></nav> */}
        <nav className="fixed top-0 px-6 bg-gradient-to-br from-slate-950 via-slate-950 to-blue-950 shadow-[0_0_50px_rgba(2, 6, 23, 1) backdrop-blur-lg flex items-center justify-between w-full z-50">
            <div>
                <a href="#home" className="text-white py-1 px-3 mt-4 transition duration-300"><IoHomeOutline className="text-2xl ml-5" /></a>
                {/* <h2 className="text-2xl">Portfolio</h2> */}
            </div>
            <div>
                <a href="#about-kiran" className="text-white py-1 px-3 mt-4 transition duration-300 ml-2">About</a>
                <a href="#skills" className="text-white py-1 px-3 mt-4 transition duration-300 ml-2">Skills</a>
                <a href="#projects" className="text-white py-1 px-3 mt-4 transition duration-300 ml-2">Projects</a>
                {/* <a href="/" className="text-white py-1 px-3 mt-4 transition duration-300 ml-2">Exprerience</a> */}
                <a href="#contact" className="text-white py-1 px-3 mt-4 transition duration-300 ml-2">Contact</a>
            </div>
        </nav>
    </>
}

export default Navbar;