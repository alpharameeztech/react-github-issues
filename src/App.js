import './App.css';
import Issues from "./Issues";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Details from "./Details";
import NoMatch from "./NoMatch";
import 'github-markdown-css/github-markdown.css';
function App() {
  const fakeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
      <>
          <Router>
              <nav>
                  <ul>
                      <li>
                          <Link to="/">Home</Link>
                      </li>
                  </ul>
              </nav>
              <div className="container">
                <h1>React Github Reported Issues</h1>
                      <div className="todo-app-container">
                          <div className="content">
                              <Routes>
                                  <Route path="/" element={<Issues />} />
                                  <Route path="/issues/:id" element={<Details />} />
                                  <Route path="*" element={<NoMatch />} />
                              </Routes>
                          </div>
                      </div>
              </div>
          </Router>
      </>
  );
}

export default App;
