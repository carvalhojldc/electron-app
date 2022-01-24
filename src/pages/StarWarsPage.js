import React, { useEffect, useState } from "react";
import NavPages from "./NavPages.js";
import axios from "axios";

const api = axios.create({
  baseURL: "https://swapi.dev/api",
});

export const StarWarsPage = () => {
  const [isLoading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [info, setInfo] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [starships, setStarships] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [species, setSpecies] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  function _RunServerRequest(content, updateFunc) {
    updateFunc("");
    let names = "";
    for (var i in content) {
      var url = content[i];
      axios.get(url).then((response) => {
        if (names !== "") {
          names += ", ";
        }
        names += response.data.name;
        updateFunc(names);
      });
    }
  }

  function UpdateSpecies(content) {
    _RunServerRequest(content.species, setSpecies);
  }

  function UpdateVehicles(content) {
    _RunServerRequest(content.vehicles, setVehicles);
  }

  function UpdateCharacters(content) {
    _RunServerRequest(content.characters, setCharacters);
  }

  function UpdateStarships(content) {
    _RunServerRequest(content.starships, setStarships);
  }

  function UpdatePlanets(content) {
    _RunServerRequest(content.planets, setPlanets);
  }

  async function ShowMovieInfo(content) {
    console.log(content);
    let items = [];

    for (var c in content) {
      switch (c) {
        case "title":
        case "episode_id":
        case "opening_crawl":
        case "producer":
        case "director":
        case "release_date":
          {

            items.push(
              <tr key={c}>
                <td>{c}</td>
                <td>{content[c]}</td>
              </tr>
            );
          }
          break;
      }
    }

    setInfo(items);
  }


  async function  ShowInfo(movie) {
    
    ShowMovieInfo(movie);
    UpdatePlanets(movie);
    UpdateStarships(movie);
    UpdateCharacters(movie);
    UpdateVehicles(movie);
    UpdateSpecies(movie);
    setLoading(false);
  }

  const handleChange = (event) => {
    const movieId = event.target.value;

    if (movieId !== "") {
      const movie = movies.results[movieId];
      setLoading(true);
      ShowInfo(movie);
    }
  };

  const ShowMovies = () => {
    let items = [];
    for (var i = 0; i < movies.count; i++) {
      items.push(
        <option key={i} value={i}>
          {movies.results[i].title}
        </option>
      );
    }

    return (
      <div>
        <br />
        Select the movie:{" "}
        <select onChange={handleChange}>
          <option disabled defaultValue value="">
            -- select an option --
          </option>
          {items}
        </select>
      </div>
    );
  };

  function ShowMovideInformation() {
    
    return (
      <div>
        {isLoading ? <h1>Loading.. </h1> : 
      <table>
        <tbody>
          {info}
          <tr key="planets">
            <td>planets</td>
            <td>{planets}</td>
          </tr>
          <tr key="characters">
            <td>characters</td>
            <td>{characters}</td>
          </tr>
          <tr key="species">
            <td>species</td>
            <td>{species}</td>
          </tr>
          <tr key="starships">
            <td>starships</td>
            <td>{starships}</td>
          </tr>
          <tr key="vehicles">
            <td>vehicles</td>
            <td>{vehicles}</td>
          </tr>
        </tbody>
      </table>
        }
        </div>
    );
  }

  useEffect(() => {
    axios.get("https://swapi.dev/api/films").then((response) => {
      setMovies(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <NavPages />
      <ShowMovies />

      <br />
      <ShowMovideInformation />
    </div>
  );
};
