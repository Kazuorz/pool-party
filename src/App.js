import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Maprequest from "./components/Forms/maprequest";
import Createpool from "./components/Forms/createpool";
import CreateTournament from "./components/Forms/createTournament";

import Landing from "./routes/landing";
import Beatmaps from "./routes/beatmaps";
import Tournaments from "./routes/tournaments";
import Mappools from "./routes/mappools";
import SearchResults from "./routes/search-results";

import Authcallback from "./routes/authcallback";

import { AppContextProvider } from "./contexts/AppContext";

function App() {
  return (
    <AppContextProvider>
      <Router className="App">
        <Navbar />
        <main className="xl:w-3/4 mx-auto">
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path="/beatmaps">
              <Beatmaps />
            </Route>
            <Route path="/tournaments">
              <Tournaments />
            </Route>
            <Route path="/Mappools">
              <Mappools />
            </Route>
            <Route path="/oauth/osu/callback">
              <Authcallback />
            </Route>
            <Route path="/new/beatmap">
              <Maprequest />
            </Route>
            <Route path="/new/pool">
              <Createpool />
            </Route>
            <Route path="/new/tournament">
              <CreateTournament />
            </Route>
            <Route path="/search-results">
              <SearchResults />
            </Route>
          </Switch>
        </main>
      </Router>
    </AppContextProvider>
  );
}

export default App;
