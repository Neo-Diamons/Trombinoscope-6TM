import Header from "../components/Header.jsx";
import SideBar from "../components/SideBar.jsx";

function Home() {
    return (
        <div className="Home">
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

export default Home;
