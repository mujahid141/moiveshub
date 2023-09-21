import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Trending from "../src/Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";
import { Container } from "@mui/material";
function App() {
  return (
    <>
      <Header />

      <div className="App">
        <Container>
          <Routes>
            <Route path="/" Component={Trending} />
            <Route path="/movies" Component={Movies} />
            <Route path="/series" Component={Series} />
            <Route path="search" Component={Search} />
          </Routes>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default App;
