function ProjectCard({ image, title, description, link, techStack }) {
    // const handleOnClick = () => {
    //     window.open({ link },"_blank");
    // };

    return <>
        <div className="group bg-white overflow-hidden border border-slate-200 hover:-translate-y-3 transition duration-500">
            <div className="relative overflow-hidden">
                <img src={image} alt="Project" className="w-full h-[200px] object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center gap-4">
                    <button className="bg-white text-black px-5 py-2 rounded-xl font-semibold hover:scale-105 transition">
                        <a href={link} > GitHub </a>
                    </button>
                </div>
            </div>
            <div className="p-8">
                <h1 className="text-3xl font-bold text-slate-800">
                    {title}</h1>
                <p className="text-slate-500 leading-7 mt-4">
                    {description}
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                    {techStack.map((tech) => (
                        <span key={tech} className="bg-cyan-100 text-cyan-500 px-4 py-2 rounded-full text-sm font-semibold">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </>
}

export default ProjectCard;