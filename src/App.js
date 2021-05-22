import './App.css';
import Login from "./Shared/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminMain from "./Admin/Main";
import AddContest from "./Admin/AddContest";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/admin/main" component={AdminMain}/>
        <Route path="/admin/addTournament" component={AddContest}/>
      </Switch>
    </Router>
  );
}

export default App;
