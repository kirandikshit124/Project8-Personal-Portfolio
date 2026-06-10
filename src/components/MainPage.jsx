import Left from "./Left";
import Right from "./Right";

function MainPage(){
    return <>
        <section className="min-h-screen relative overflow-hidden px-10 bg-gradient-to-br from-slate-950 to-blue-950" id="home">
            <div className="min-h-screen flex items-center justify-between md:px-20">
                <Left />
                <Right />
            </div>
        </section>
    </>
}

export default MainPage;