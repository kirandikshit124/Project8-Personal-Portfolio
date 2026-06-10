function Details({ degree, institute, year, description }) {
    return <>
        <div className="absolute w-5 h-5 bg-cyan-400 rounded-full -left-[12px] shadow-[0_0_20px_rgba(34,211,238,0.8)]"></div>
        <div className="p-8 hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                {degree}</h2>
            <p className="text-cyan-400 mt-2 text-xl">
                {institute}</p>
            <p className="text-gray-400 mt-2">
                {year}</p>
            <p className="text-gray-400 mt-4 leading-7">
                {description}</p>
        </div>
    </>
}

export default Details;