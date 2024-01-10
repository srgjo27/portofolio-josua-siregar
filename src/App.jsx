import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home'
import Navbar from './components/Navbar';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Home />
        </BrowserRouter>
    )
}

export default App;