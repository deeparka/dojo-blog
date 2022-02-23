import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
    return (
        <div className="App">
            {/* Navbar */}
            <Navbar />
            <div className="content">
                <Home />
            </div>
        </div>
    );
}

export default App;
