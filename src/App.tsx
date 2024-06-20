import Header from "./components/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import Home from "./pages/Home";
import EarphonesPage from "./pages/EarphonesPage";
import HeadPhones from "./pages/HeadPhones";

function App() {
  return (
    <>
     <BrowserRouter>
     <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/earphones" element={<EarphonesPage />} />
        <Route path="/headphones" element={<HeadPhones />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
