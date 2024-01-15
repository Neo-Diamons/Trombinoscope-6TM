// import logo from './logo.svg';
import './App.css';

import Header from "./pages/Header.jsx";
import Columns from "./pages/Columns.jsx";

function App() {
    return (
        <div className="App">
            <Header />

            <div className="
                grid grid-cols-3
                p-[30px]
            ">
                <Columns />
                <div class="
                    col-span-2 bg-red-900
                ">
                </div>
            </div>
        </div>
    );
}

export default App;
