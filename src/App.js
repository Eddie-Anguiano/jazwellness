// this is a test

import "./styles/main.scss";
import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/blog/:id"
            render={(routeProps) => <Blog {...routeProps} />}
          />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
