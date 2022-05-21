import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import ThankYou from './components/ThankYou';
import HomeScreen from './HomeScreen';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<HomeScreen/>}/>
          <Route path='story' element={<Form/>}/>
          <Route path='/thanks' element={<ThankYou/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
