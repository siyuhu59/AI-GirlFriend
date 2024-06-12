import './styles/App.css'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainIndex from './Components/main/Index';
import GfIndex from './Components/gf/Index';

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<MainIndex />} />
        <Route path="/character/*" element={<GfIndex />} />
      </Routes>
    </Router>
  );
}

export default App;
