import { useEffect, useState, useRef } from "react";
import {Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import SideBar from "../components/SideBar.jsx";

const port = process.env.PORT || 8080;

function Home() {
  const [allTeams, setAllTeams] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:${port}/api/peoples`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setAllTeams(data))
      .catch((err) => console.log(err));
  }, []);

  const handleCardClick = (person) => {
    if (selectedPerson && selectedPerson.photo_pro_url === person.photo_pro_url) {
      setSelectedPerson(null);
    } else {
      setSelectedPerson(person);
    }
  };

  const handleImageHover = (event, newSrc) => {
    event.target.src = newSrc;
  };

  const descriptionRef = useRef(null);

  useEffect(() => {
    if (descriptionRef.current) {
      descriptionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedPerson]);

  const [filteredTeams, setFilteredTeams] = useState(allTeams);

  useEffect(() => {
    setFilteredTeams(allTeams);
  }, [allTeams]);

  return (
    <div className="Home">
      <Header />

      <div className="grid grid-cols-3 px-[10vw] pt-[17.5vh]">
        <SideBar allTeams={allTeams} setFilteredTeams={setFilteredTeams} />
        <div className="flex flex-col col-span-2">
          {selectedPerson && filteredTeams.find((person) => person.photo_pro_url === selectedPerson.photo_pro_url) && (
            <>
              <div ref={descriptionRef} className="
                w-full bg-backgroundLight rounded-[8px] p-[30px] flex flex-row gap-10 
                border-[3px] border-border mb-[10vh]
                relative z-10
              ">
                <img
                  className="rounded-[8px] h-full w-[300px] overflow-hidden"
                  src={selectedPerson.photo_pro_url}
                  alt={selectedPerson.name}
                  onMouseEnter={(event) => handleImageHover(event, selectedPerson.photo_fun_url)}
                  onMouseLeave={(event) => handleImageHover(event, selectedPerson.photo_pro_url)}
                />
                <div className="flex flex-col text-white justify-center items-start">
                  <h1 className="text-4xl font-bold mb-10 text-center my-5">{selectedPerson.name} {selectedPerson.firstname}</h1>
                  <p className="text-2xl font-bold mb-10 text-center my-5">{selectedPerson.job}</p>
                  <p className="text-2xl font-bold mb-10 text-center my-5">{selectedPerson.agency}</p>
                </div>
              </div>
              <div className="
                relative w-0 h-0
              ">
                <div className="
                  absolute z-0
                  -top-[31vw] h-[27.5vw]
                  -left-[1vw] w-[53vw]
                  bg-backgroundShadow 
                  rounded-[8px]
                "/>
              </div>
            </>
          )}
          <div className="grid grid-cols-3 place-content-around gap-x-[15%] gap-y-[10vh]">
            {filteredTeams.map((person, index) => (
              <>
                {person.photo_pro_url !== null && (
                  <div key={index} className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer">
                    <img
                      className={`
                        relative rounded-[8px] overflow-hidden z-10 border-[3px] border-border
                        ${selectedPerson?.photo_pro_url === person.photo_pro_url ? "border-4 border-blue-500" : ""}
                      `}
                      onClick={() => handleCardClick(person)}
                      src={person.photo_pro_url}
                      alt={person.name}
                      onMouseEnter={(event) => handleImageHover(event, person.photo_fun_url)}
                      onMouseLeave={(event) => handleImageHover(event, person.photo_pro_url)}
                    />
                    <div className="
                      relative w-0 h-0
                    ">
                      <div className="
                        absolute
                        -top-[17vw] h-[18vw]
                        -left-[1vw] w-[12vw] 
                        bg-backgroundShadow 
                        rounded-[8px]
                      "/>
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
