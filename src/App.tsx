import Header from "./components/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import Home from "./pages/Home";
import EarphonesPage from "./pages/EarphonesPage";

function App() {
  return (
    <>
     <BrowserRouter>
     <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/earphones" element={<EarphonesPage />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
