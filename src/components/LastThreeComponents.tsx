import Information from './Information'
import Footer from './Footer'
import CategoryBoxes from './CategoryBoxes'

function LastThreeComponents() {
  return (
    <div>
      <CategoryBoxes animation={false} />
      <Information />
      <Footer />
    </div>
  )
}

export default LastThreeComponents