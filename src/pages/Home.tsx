import HomeMain from "../components/HomeMain";
import CategoryBoxes from "../components/CategoryBoxes";
import Information from "../components/Information";
import Footer from "../components/Footer";
import SeeProducts from "../components/SeeProducts";
import { useContext } from "react";
import { MyContext } from "../App";

function Home() {
  const context = useContext(MyContext)

  if(!context){
    throw new Error("Header must be used within a MyContext.Provider")
  }
  const {show} = context

  return (
    <div>
      <HomeMain />
      <CategoryBoxes />
      <SeeProducts />
      <Information />
      <Footer />
    </div>
  );
}

export default Home;
