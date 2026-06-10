import Placement from "../assets/Placement.png";
import RateX from "../assets/RateX.png"
import StickyNotes from "../assets/StickyNotes.png";
import Myntra from "../assets/Myntra.png"
import Spotify from "../assets/Spotify.png";
import Taskora from "../assets/Taskora.png";
import ProjectCard from "./ProjectCard";

function Projects() {
    return <>
        <section id="projects" className="min-h-screen bg-slate-50 px-10 pt-25">
            <div className="text-center mb-8">
                <h1 className="text-6xl font-bold text-blue-600">
                    Projects</h1>
                <p className="text-slate-500 text-lg mt-4">
                    Some of the projects I've built using modern web technologies.</p>
            </div>
            <div className="grid grid-flow-col auto-cols-[85%] md:auto-cols-[25%] gap-22 overflow-x-auto scroll-smooth px-4">
                <ProjectCard
                    image={Taskora}
                    title="Taskora"
                    description="A responsive task management application that helps users organize, track, and manage daily tasks efficiently."
                    link="https://github.com/kirandikshit124/Project7-Task-Manager"
                    techStack={["React.js", "Node.js", "Express.js", "Tailwind CSS", "REST API"]}
                    >
                </ProjectCard>
                <ProjectCard
                    image={Placement}
                    title="PlaceTrack"
                    description="A productivity dashboard designed to help students track placement preparation progress."
                    link="https://github.com/kirandikshit124/Project4-Placement_prep"
                    techStack={["HTML", "CSS", "Javascript", "LocalStorage"]}
                    >
                </ProjectCard>
                <ProjectCard
                    image={RateX}
                    title="Ratex"
                    description="A real-time currency converter web application that fetches live exchange rates using APIs."
                    link="https://github.com/kirandikshit124/Project5-Currency_converter"
                    techStack={["HTML", "CSS", "Javascript", "API"]}
                    />
                <ProjectCard 
                    image={StickyNotes}
                    title="Sticky Notes"
                    description="A notes management application that allows users to create, organize, and manage notes efficiently."
                    link="https://github.com/kirandikshit124/Project6-StickyNotes"
                    techStack={["HTML", "CSS", "Javascript", "LocalStorage"]}
                />
                <ProjectCard 
                    image={Myntra}
                    title="FitFkex"
                    description="An e-commerce web application inspired by Myntra, featuring cart management, order summary, coupon handling, and responsive shopping UI."
                    link="https://github.com/kirandikshit124/Project3-Myntra_Clone"
                    techStack={["HTML", "CSS", "JavaScript"]}
                />
                <ProjectCard 
                    image={Spotify}
                    title="Vibify"
                    description="A responsive music streaming UI with music controls, playlists, and interactive user interface components for an immersive music experience."
                    link="https://github.com/kirandikshit124/Project1-Spotify_clone"
                    techStack={["HTML", "CSS"]}
                />
            </div>
        </section>
    </>
}

export default Projects;