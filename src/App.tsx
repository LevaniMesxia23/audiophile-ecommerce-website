import Header from "./components/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import Home from "./pages/Home";
import HeadphonesPage from "./pages/HeadphonesPage";

function App() {
  return (
    <>
     <BrowserRouter>
     <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/headphones" element={<HeadphonesPage />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
