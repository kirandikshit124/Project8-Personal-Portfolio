import Resume from "../assets/Kiran_resume.pdf"

function Left() {

    const handleOnClick = () => {
        window.open(Resume, "_blank");
    };

    return <>
        <div className="md:w-1/2">
            <p className="text-cyan-400 text-xl mb-4">
                Hello, I'm
            </p>
            <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Kiran Dikshit
            </h1>
            <p className="text-gray-300 text-lg leading-8 mt-8 max-w-2xl">
                I'm a <span className="bg-cyan-300 bg-clip-text text-transparent">Full Stack Developer</span> passionate about building modern, responsive,
                and visually engaging web applications. I enjoy creating seamless user
                experiences and transforming ideas into real-world digital solutions using
                technologies like React.js, Node.js, Express.js, and MongoDB.
            </p>
            <div className="mt-10 flex gap-6">
                <button className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300"
                    onClick={handleOnClick}>
                    Resume
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-xl hover:scale-105 transition duration-300">
                    <a href="https://github.com/kirandikshit124">
                    Github
                </a>
            </button>
        </div>
    </div >
    </>
}

export default Left;