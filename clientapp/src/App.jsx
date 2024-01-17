import './App.css';

import Header from "./pages/Header.jsx";
import SideBar from "./pages/SideBar.jsx";

function App() {
    return (
        <div className="App">
            <Header />

            <div className="
                grid grid-cols-3
                p-[30px]
            ">
                <SideBar />
                <div class="
                    col-span-2
                ">
                </div>
            </div>
        </div>
    );
}

export default App;
