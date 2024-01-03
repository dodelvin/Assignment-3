import { Route, Routes } from "react-router";
import HomePage from "./components/HomePage/index";
import { BrowserRouter } from "react-router-dom";
import Header from "./layout/Header";
import ContactPage from "./components/ContactPage/index";
import MainPage from "./components/FlashCardPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/flashCard" exact element={<MainPage />} />
        <Route path="/contact" exact element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
