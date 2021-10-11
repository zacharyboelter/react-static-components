

import NavBar from './components/NavBar';
import Rating from './components/Rating';
import Reviews from './components/Reviews';
import Sentiment from './components/Sentiment';
import Visitors from './components/Visitors';
import './styles.css';



const App = () => {
  return (
    <div className="parent">
      <h4 className="div1"><NavBar /></h4>
      <h4 className="div2"><Reviews /></h4>
      <h4 className="div3"> <Rating /></h4>
      <h4 className="div4"><Sentiment /> </h4>
      <h4 className="div5"><Visitors /></h4>
    </div>
  )
}

export default App;
