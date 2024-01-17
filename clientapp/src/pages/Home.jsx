import { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import SideBar from "../components/SideBar.jsx";

function Home() {
  const [allTeams, setAllTeams] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/peoples", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => console.log(res.json()))
      .then((data) => setAllTeams(data));
  }, []);

  return (
    <div className="Home">
      <Header />
      <h1 className="text-4xl font-bold mb-10 text-center my-5">El Famoso 6tm trombinoscope</h1>

      <div className="grid grid-cols-3 p-[30px]">
        <SideBar />
        <div className="col-span-2 flex flex-col justify-center items-center">
        </div>
      </div>
    </div>
  );
}

export default Home;
