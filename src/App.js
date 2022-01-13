import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login";
import Header from "./components/Header";
import "./App.css";
import "./index.css";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Category from "./components/Category";
import Search from "./components/Search";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route path="/category/:category">
            <Category />
          </Route>
          <Route exact path="/home/search/:title/:type/:yearFrom/:yearTo" component={Search}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
