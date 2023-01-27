import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Hot from './components/Hot/hot'
import Tags from './components/Tags/tags'
import Other from './components/Other/other'
import Carousel from './components/Carousel/carousel'
import './App.css'

function App () {
  return (
      <body className='body'>
        <Header />
        <Carousel />
        <Hot />
        <Tags />
        <Other />
        <Footer />
      </body>
  )
}

export default App
