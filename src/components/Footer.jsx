import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaSquareInstagram } from "react-icons/fa6";


function Footer(){
    return<>
    <br></br>
    <hr></hr>
    <footer id="contact" className="text-Gray-500 py-10 bg-gradient-to-br from-slate-950 to-blue-950">
        <div className="flex flex-col items-center justify-center gap-5">
            <p className="text-gray-500 italic">
                Building modern and responsive digital experiences
            </p>
            <div className="flex gap-8 text-2xl mt-2 text-white">
                <a href="https://www.linkedin.com/in/kiran-dikshit-5ba23a2b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:scale-125 transition-all duration-300 ease-in-out">
                    <FaLinkedin /></a>
                <a href="https://github.com/kirandikshit124" className="hover:scale-125 transition-all duration-300 ease-in-out">
                    <FaGithub /></a>
                <a href="https://www.instagram.com/kirandikshit124?igsh=N3lqcGx0Z3Q5c3Y=" className="hover:scale-125 transition-all duration-300 ease-in-out">
                    <FaSquareInstagram /></a>
                <a href="mailto:kirandikshit124@gmail.com" className="hover:scale-125 transition-all duration-300 ease-in-out">
                    <BiLogoGmail /></a>
            </div>
            <p className="text-gray-400 text-sm mt-4">
                © {new Date().getFullYear()} Kiran Dikshit. All Rights Reserved.</p>
        </div>
    </footer>
    </>
}

export default Footer;