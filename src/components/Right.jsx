import KiranImage from "../assets/Kiran.jpeg";
// import KiranImage1 from "../assets/Kiran1.jpeg";
// import KiranImage2 from "../assets/Kiran2.jpeg";
// import KiranImage3 from "../assets/Kiran3.jpeg";
// import KiranImage4 from "../assets/Kiran4.jpeg";
// import KiranImage5 from "../assets/Kiran5.jpeg";

function Right() {
    return <>
        <div className="w-1/2 flex justify-center hidden md:flex">
            <div className="relative">
                <img src={KiranImage} alt="Kiran Dikshit" className="w-[400px] h-[400px] object-cover rounded-full border-4 border-cyan-400 hover:shadow-[0_0_50px_rgba(34,211,238,0.5)]" />
                {/* <img src={KiranImage} alt="Kiran Dikshit" className="w-[400px] h-[400px] object-cover rounded-full border-4 border-cyan-400"/> */}

                {/* <div className="absolute -top-5 left-5 text-cyan-400 text-2xl animate-float">
                    <img src={KiranImage2} alt="Kiran Dikshi" className="w-15 h-15 rounded-full" />
                </div>
                <div className="absolute top-10 -right-8 text-green-500 text-2xl animate-float">
                    <img src={KiranImage1} alt="Kiran Dikshi" className="w-15 h-15 rounded-full" />
                </div>
                <div className="absolute bottom-10 -left-12 text-green-400 text-2xl animate-float">
                    <img src={KiranImage3} alt="Kiran Dikshi" className="w-15 h-15 rounded-full" />
                </div>
                <div className="absolute -bottom-20 right-25 text-yellow-400 text-2xl animate-float">
                    <img src={KiranImage4} alt="Kiran Dikshi" className="w-15 h-15 rounded-full" />
                </div>
                <div className="absolute top-60 -right-16 text-orange-500 text-2xl animate-float">
                    <img src={KiranImage5} alt="Kiran Dikshi" className="w-15 h-15 rounded-full" />
                </div> */}
            </div>
        </div>
    </>
}

export default Right;