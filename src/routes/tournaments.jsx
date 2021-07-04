import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { FaSearch } from "react-icons/fa";

import TournamentCardsContainer from "../components/TournamentCards/TournamentCardsContainer"

const Tournaments = () => {
  return (
    <div>
      <h2>Tournaments</h2>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Looking for something specific?"
          aria-label="search input"
          aria-describedby="search input"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">
            <FaSearch />
          </Button>
        </InputGroup.Append>
      </InputGroup>
      {/*allowCreation == true &&
        <h3>
          Or maybe looking forward to create a <a href="#">new tournament</a>?
        </h3>*/}
        <div>
            <h2>Active Tournaments</h2>
            <TournamentCardsContainer />
        </div>
        <div>
            <h2>Archived Tournaments</h2>
            <TournamentCardsContainer />
        </div>
    </div>
  );
};

export default Tournaments;
