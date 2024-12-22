import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar.tsx';
import Home from './pages/Home.tsx';
import Episodes from './pages/Episodes.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import Signup from './pages/Signup.tsx';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/episodes" element={<Episodes />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
    );
}

export default App;
