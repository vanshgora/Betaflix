import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import IntroPage from './components/introPage/IntroPage';
import SignUpPage from './components/introPage/SignUpPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path = '/' element = {<IntroPage/>}/>
        </Routes>
        <Routes>
          <Route exact path = '/signup' element = {<SignUpPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
