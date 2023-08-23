import './App.css';
import Footer from './content/footer';
import Main from './content/main';
import Navbar from './content/navbar';
import {AnimatePresence} from 'framer-motion'

function App() {
  return (
    <div className="App">
      <div className="Navbar">
       <Navbar/>
      </div>

      <div className="Main">
        <AnimatePresence>
           <Main/>
        </AnimatePresence>
      </div>

      <div className="Footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
