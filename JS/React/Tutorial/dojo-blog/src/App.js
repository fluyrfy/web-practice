import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

function App() {
  const title = "Welcome to the new  blog";
  const like = 50;
  const link = "https://www.google.com";

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* <Home /> */}
          <Switch>
            {/* 解決路徑名匹配順序衝突方式：加上屬性 exact */}
            <Route path="/create">
              <Create />
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails></BlogDetails>
            </Route>
            <Route path={"*"}>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
