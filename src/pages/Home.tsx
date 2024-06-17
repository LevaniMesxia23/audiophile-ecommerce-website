import HomeMain from '../components/HomeMain';
import SuggestItems from '../components/SuggestItems';
import SeeProducts from '../components/SeeProducts';
import Information from '../components/Information';

function Home() {
  return (
    <div>
      <HomeMain />
      <SuggestItems />
      <SeeProducts />
      <Information />
    </div>
  )
}

export default Home