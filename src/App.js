import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import IntroPage from './components/introPage/IntroPage';
import SignUpPage from './components/introPage/SignUpPage';
import SgPage1 from './components/introPage/SgPage1';
import MainPage from './components/MainPage/MainPage';
import DetailPage from './components/DetailPage/DetailPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<IntroPage/>} />
        </Routes>
        <Routes>
          <Route exact path='/signin' element={<SignUpPage />} />
        </Routes>
        <Routes>
          <Route exact path='/signup' element={<SgPage1 />} />
        </Routes>
        <Routes>
          <Route exact path='/home' element={<MainPage />} />
        </Routes>
        <Routes>
          <Route exact path='/detail_page' element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
