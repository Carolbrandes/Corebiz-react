import { BrowserRouter } from "react-router-dom";
import "./styles/App.scss";
import { Routes } from "./routes";
import { Header } from "./components/Header";
import Store from "./Store";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Store>
          <Header />
          <Routes />
          <Footer />
        </Store>
      </BrowserRouter>
    </div>
  );
}

export default App;
