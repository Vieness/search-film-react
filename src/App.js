import './App.scss';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import PageNatFound from "./components/PageNotFound/PageNatFound";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <div className={'container'}>
                    <Routes>
                        <Route path="/" exact element={<Home/>}/>
                        <Route path="/movie/:imdbID" element={<MovieDetails/>}/>
                        <Route path="*" element={<PageNatFound/>}/>
                    </Routes>
                </div>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
