import { BrowserRouter } from "react-router-dom";
import "./styles/App.scss";
import { Routes } from "./routes";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
