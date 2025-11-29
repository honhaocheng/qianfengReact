import './App.css';
import { BrowserRouter } from 'react-router-dom';
// import { HashRouter } from 'react-router-dom';
import MRouter from './router';
import Tabbar from './components/Tabbar';

const App = () => {
  return (
    <BrowserRouter>
      <MRouter/>
      <Tabbar></Tabbar>
    </BrowserRouter>
  );
}

export default App;
