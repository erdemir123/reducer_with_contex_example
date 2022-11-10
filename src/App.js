import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainContext from './context/MainContext';
import Card from './Pages/Card';
import Store from './Pages/Store';
import Header from './components/Header';


function App() {
  return (
    <MainContext>
      <Header />
      <Routes>
        <Route path='/' element={<Store />}/>
        <Route path='/card' element={<Card />}/>
      </Routes>
    </MainContext>
  );
}

export default App;
