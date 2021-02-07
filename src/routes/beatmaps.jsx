import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { FaSearch } from "react-icons/fa";
import BeatmapCardsContainer from "../components/BeatmapCards/BeatmapCardsContainer"
const Beatmaps = () => {
  return (
    <div>
      <h2>beatmap search</h2>
      <div className="filter-container">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="search..."
            aria-label="search input"
            aria-describedby="search input"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary">
              <FaSearch />
            </Button>
          </InputGroup.Append>
        </InputGroup>
        <h4>Category:</h4>
        <ul>
          {/* <a href="#">Any</a>
          <a href="#">Had Leaderboard</a>
          <a href="#">Ranked</a>
          <a href="#">Qualified</a>
          <a href="#">Loved</a>
          <a href="#">Pending & Graveyard</a>
          <a href="#">My Maps</a> */}
        </ul>
        <h4>Been in Tournaments:</h4>
        <ul>
          {/* <a href="#">Yes</a>
          <a href="#">No</a> */}
        </ul>
        <h3>Search Tags</h3>
        <h4>Suggested skill level:</h4>
        <ul>
          {/* <a href="#">Little Cup (0 to 4 stars)</a>
          <a href="#">Early Oni (4 to 5 stars) </a>
          <a href="#">Difficult Oni (5 to 6 stars)</a>
          <a href="#">Inner Oni (6 to 7 stars)</a>
          <a href="#">Alien (7+ stars)</a> */}
        </ul>
        <h4>Suggested Mod:</h4>
        <ul>
          {/* <a href="#">No mods</a>
          <a href="#">Hard Rock</a>
          <a href="#">Hidden</a>
          <a href="#">Double Time</a>
          <a href="#">Free Mod</a>
          <a href="#">Tie Breaker</a> */}
        </ul>
        <h4>Length:</h4>
        <ul>
          {/* <a href="#">Long (10:00 to 3:30)</a>
          <a href="#">Regular (3:30 to 2:00)</a>
          <a href="#">Short (2:00 to 0:30)</a> */}
        </ul>
        <h4>Map type:</h4>
        <ul>
          {/* <a href="#">Consistency</a>
          <a href="#">Stream</a>
          <a href="#">Tech</a>
          <a href="#">Burst</a>
          <a href="#">SV Heavy</a>
          <a href="#">Slow Jam</a>
          <a href="#">Finisher Heavy</a>
          <a href="#">Speed</a>
          <a href="#">Memory Heavy</a>
          <a href="#">Anti-Hidden</a>
          <a href="#">Anti-Hard Rock</a>
          <a href="#">Anti-HDHR</a> */}
        </ul>
        <div className="sort-bar">
          <ul>
            <li>
              {/* <a href="#">Difficulty</a> */}
            </li>
            <li>
              {/* <a href="#">Favourites</a> */}
            </li>
            <li>
              {/* <a href="#">Play Count</a> */}
            </li>
            <li>
              {/* <a href="#">Updated</a> */}
            </li>
          </ul>
        </div>
      </div>
      <BeatmapCardsContainer />
    </div>
  );
};

export default Beatmaps;
