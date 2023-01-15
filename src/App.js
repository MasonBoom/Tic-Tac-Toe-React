import React from 'react';
import { 
  Route, 
  Routes,
  BrowserRouter,
} from 'react-router-dom';
import MainPage from './pages/mainPage/MainPage';
import Game from './pages/game/Game';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
