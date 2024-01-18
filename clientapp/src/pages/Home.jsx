import { useEffect, useState, useRef } from "react";
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
      .then((data) => {
        setAllTeams(data);
        console.log(data);
      })
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
      <h1 className="text-4xl font-bold mb-10 text-center my-5">El Famoso 6tm trombinoscope</h1>

      <div className="grid grid-cols-3 p-[30px]">
        <SideBar allTeams={allTeams} setFilteredTeams={setFilteredTeams} />
        <div className="col-span-2 flex flex-col items-center ml-5 justify-center">
          {selectedPerson && filteredTeams.find((person) => person.photo_pro_url === selectedPerson.photo_pro_url) && (
            <div ref={descriptionRef} className="w-full bg-[#1B1B1B] rounded-[8px] shadow-md p-[30px] flex flex-row gap-10">
              <img
                className="rounded-[8px] h-full w-[300px] object-cover"
                style={{ overflow: "hidden" }}
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
          )}
          <div className="grid grid-cols-4 gap-5">
            {filteredTeams.map((person, index) => (
              <>
                {person.photo_pro_url !== null && (
                  <img
                    className={`transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer rounded-[8px] h-full w-full ${selectedPerson && selectedPerson.photo_pro_url === person.photo_pro_url
                      ? "border-4 border-blue-500"
                      : ""
                      }`}
                    onClick={() => handleCardClick(person)}
                    style={{ overflow: "hidden" }}
                    src={person.photo_pro_url}
                    alt={person.name}
                    onMouseEnter={(event) => handleImageHover(event, person.photo_fun_url)}
                    onMouseLeave={(event) => handleImageHover(event, person.photo_pro_url)}
                  />
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
