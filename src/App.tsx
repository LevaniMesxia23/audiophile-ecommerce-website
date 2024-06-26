import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import EarphonesPage from "./pages/EarphonesPage";
import Speakers from "./pages/Speakers";
import HeadPhones from "./pages/HeadPhones";
import './index.css';
import CategoryBoxes from "./components/CategoryBoxes";


export const MyContext = createContext<MyContextType | null>(null);

function App() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
    {show && <div className=" fixed h-screen w-screen z-40 bg-black/40 " onClick={() => setShow(!show)}></div>}
      <MyContext.Provider value={{ show, setShow }}>
        <BrowserRouter>
        {show && <div className=" absolute z-50 left-0 bg-white top-[89px] w-full"><CategoryBoxes /></div>}
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/earphones" element={<EarphonesPage />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/headphones" element={<HeadPhones />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </>
    
  );
}

export default App;
