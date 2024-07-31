import './App.css';
import { BrowserRouter as Router,Routes ,Route} from 'react-router-dom'
import Navbar from './componants/Navbar';
import Home from './componants/Home';
import Services from './componants/Services';
import Footer from './componants/Footer';
import Contact from './componants/Contact';
import About from './componants/About';
import ScrollToTop from './componants/ScrollToTop';
function App() {
  const apikey=process.env.REACT_APP_API_KEY;
  return (
    <>
    <Router>
      <Navbar/>;
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home   />}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact apii={apikey}/>}></Route>
        
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
