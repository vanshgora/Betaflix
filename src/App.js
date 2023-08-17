import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import IntroPage from './components/introPage/IntroPage';
import SignUpPage from './components/introPage/SignUpPage';
import SgPage1 from './components/introPage/SgPage1';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path = '/' element = {<IntroPage/>}/>
        </Routes>
        <Routes>
          <Route exact path = '/signin' element = {<SignUpPage/>}/>
        </Routes>
        <Routes>
          <Route exact path = '/signup' element = {<SgPage1/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
