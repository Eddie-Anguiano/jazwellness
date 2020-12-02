import "./styles/main.scss";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/blog/:id"
          render={(routeProps) => <Blog {...routeProps} />}
        />
      </Switch>
    </div>
  );
}

export default App;
