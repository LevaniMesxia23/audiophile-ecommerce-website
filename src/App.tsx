import Header from "./components/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import Home from "./pages/Home";

function App() {
  return (
    <>
     <BrowserRouter>
     <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
