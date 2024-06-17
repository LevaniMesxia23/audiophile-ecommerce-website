import HomeMain from '../components/HomeMain';
import SuggestItems from '../components/SuggestItems';
import SeeProducts from '../components/SeeProducts';
import Information from '../components/Information';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <HomeMain />
      <SuggestItems />
      <SeeProducts />
      <Information />
      <Footer />
    </div>
  )
}

export default Home