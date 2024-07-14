import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import EarphonesPage from "./pages/EarphonesPage";
import Speakers from "./pages/Speakers";
import HeadPhones from "./pages/HeadPhones";
import './index.css';
import CategoryBoxes from "./components/CategoryBoxes";
import CurrentProduct from "./components/CurrentProduct";
import Checkout from "./pages/Checkout";
import Summary from "./components/Summary";
import Thanks from "./components/Thanks";

export const MyContext = createContext<MyContextType | null>(null);

function App() {
  const [show, setShow] = useState<boolean>(false);
  const [showCartBox, setShowCartBox] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0)
  const [items, setItems] = useState<Product[]>([])
  const [localCount, setLocalCount] = useState<number>(0);
  const [showThanks, setShowThanks] = useState<boolean>(false)

  useEffect(()=>{
    if(localStorage.getItem("count")){
      setItems(JSON.parse(localStorage.getItem("count")as string))
    }
  }, [])

  const calculateVAT = (price: number) => {
    return (price * 0.2).toFixed(0);
  };

  const calculateTotalWithVAT = (price: number) => {
    return (price + parseFloat(calculateVAT(price))).toFixed(0);
  };

  const calculateGrandTotal = (items: Product[]) => {
    return items.reduce((total: number, item: {
      quantity: number; price: number; 
}) => {
      const itemTotalWithVAT = calculateTotalWithVAT(item.price * item.quantity);
      return total + parseFloat(itemTotalWithVAT) + 50; 
    }, 0).toLocaleString();
  };

  return (
    <>
    {show && <div className=" fixed h-screen w-screen z-40 bg-black/40 " onClick={() => setShow(!show)}></div>}
    {showCartBox && <div className=" fixed h-screen w-screen z-40 bg-black/40 " onClick={() => setShowCartBox(!showCartBox)}></div>}
    {showThanks && <div className=" fixed h-screen w-screen z-40 bg-black/40 "></div>}
      <MyContext.Provider value={{ show, setShow, showCartBox, setShowCartBox, count, setCount, items, setItems, localCount, setLocalCount, showThanks, setShowThanks, calculateVAT, calculateGrandTotal }}>
        <BrowserRouter>
        {show && <div className=" absolute z-50 left-0 bg-white top-[89px] w-full"><CategoryBoxes /></div>}
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/earphones" element={<EarphonesPage />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/headphones" element={<HeadPhones />} />
            <Route path={"/current/:name"} element={<CurrentProduct />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/Summary" element={<Summary />} />
            <Route path="/Thanks" element={<Thanks />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </>
  );
}
export default App;
