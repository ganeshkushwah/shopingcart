import logo from './logo.svg';
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import ShowCart from './app/components/auth/ShowCart';
import PagesDetail from './app/pages/PagesDetail';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <div>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<ShowCart/>}/>
            <Route path="/pagesdetail" element={<PagesDetail/>} />
          </Routes>
          </BrowserRouter>
      
      </div>
    </>
  );
}

export default App;
