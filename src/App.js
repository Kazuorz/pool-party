import Navbar from "./components/Navbar/Navbar";
import Landing from "./routes/landing"
import Beatmaps from "./routes/beatmaps"
import Tournaments from "./routes/tournaments"
import Mappools from "./routes/mappools"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Authcallback from "./routes/authcallback";
import Maprequest from "./components/Forms/maprequest"


function App() {
  return (
    
    <Router className="App">
      <Navbar />
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
      </Switch>
    </Router>
  );
}

export default App;
