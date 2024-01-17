import { Router } from "./Router";

function App() {
    return (
        <div className="relative App bg-[#0c1414] min-w-screen min-h-screen">
            {/* <div className="absolute top-10 right-20 z-[1] w-[30%] h-[30%] opacity-10" style={{ transform: "translate(-50%, 50%)" }}>
                <img src="/svgexport-3.svg" alt="Description of the SVG" />
                <object type="image/svg+xml" data="/svgexport-3.svg">Your browser does not support SVG</object>
            </div> */}
            <Router />
        </div >
    );
}

export default App;
