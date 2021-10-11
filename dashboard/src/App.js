
import './styles.css';
import NavBar from './components/NavBar';
import Rating from './components/Rating';
import Reviews from './components/Reviews';
import Sentiment from './components/Sentiment';
import Visitors from './components/Visitors';




const App = () => {
  return (
    <div className='container'>
      <h4 className='navbar'><NavBar /></h4>
      <h4 className='reviews'><Reviews /></h4>
      <h4 className='rating'> <Rating /></h4>
      <h4 className='sentiment'><Sentiment /> </h4>
      <h4 className='visitors'><Visitors /></h4>
    </div>
  )
}

export default App;
