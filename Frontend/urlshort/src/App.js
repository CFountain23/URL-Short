import "./App.css";
import EnterLink from "./components/enterLink";
import Redirect from "./components/redirect";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<EnterLink></EnterLink>} />
          <Route path="*" element={<Redirect></Redirect>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
