import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import EarphonesPage from "./pages/EarphonesPage";
import Speakers from "./pages/Speakers";
import HeadPhones from "./pages/HeadPhones";
import './index.css';

export const MyContext = createContext<MyContextType | null>(null);

function App() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className={`${show ? "bg-black/40" : null} z-10`}>
      <MyContext.Provider value={{ show, setShow }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/earphones" element={<EarphonesPage />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/headphones" element={<HeadPhones />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
