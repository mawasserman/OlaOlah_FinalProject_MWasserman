import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import EpisodeList from './components/episodelist';
import Footer from './components/Footer.tsx';
import Header from './components/Header.tsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header 
          title="Olá Olah Podcast" 
          description="Hello, or better, Olá! The podcast of two Brazilians that decided to do aliah and live as Olah" 
          bannerImage="/path/to/banner-image.jpg"
        />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/episodes" element={<EpisodeList />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

const Home = () => <div>Welcome to the Podcast!</div>;
const About = () => <div>About this podcast...</div>;
const Contact = () => <div>Contact us!</div>;

export default App;
