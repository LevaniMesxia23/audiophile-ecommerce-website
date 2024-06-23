import HomeMain from "../components/HomeMain";
import SuggestItems from "../components/CategoryBoxes";
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
    <div className={`${show ? "bg-black/40": null} min-h-full w-full`}>
      <HomeMain />
      <SuggestItems className={`absolute-category-boxes`} />
      <SeeProducts />
      <Information />
      <Footer />
    </div>
  );
}

export default Home;
