import Layout from '../hocs/Layout'
import SwiperSlideComponent from '../components/SwiperSlide'
import Leading from '../components/ItemHome/Leading'
import Newsletter from '../components/Newsletter'
import OfferLeading from '../components/ItemHome/OfferLeading'

const Home = () => {
  return (
    <Layout>
      <div>
        <SwiperSlideComponent />
      </div>
      <div className="flex flex-col gap-24">
        <OfferLeading />
        <Leading />
        <Newsletter />
      </div>
    </Layout>
  )
}

export default Home
