import HomeMain from "../components/HomeMain";
import CategoryBoxes from "../components/CategoryBoxes";
import Information from "../components/Information";
import Footer from "../components/Footer";
import SeeProducts from "../components/SeeProducts";

function Home() {
  return (
    <div>
      <HomeMain />
      <CategoryBoxes animation={false}/>
      <SeeProducts />
      <Information />
      <Footer />
    </div>
  );
}

export default Home;
