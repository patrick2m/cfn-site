import './Home.scss'
import CarouselContainer from './partials/Carousel'
import Cards from './partials/Cards'
import Gallery from './partials/Gallery'
import Brands from './partials/Brands'

export default function Home() {
  return (
    <>
      <CarouselContainer/>
      <Cards />
      <Gallery />
      <Brands />
    </>
  )
}
