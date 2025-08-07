import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import MentalHealthInfo from './components/MentalHealthInfo';
import Statistics from './components/Statistics';
import SDGSection from './components/SDGSection';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navigation />
        <main>
          <Hero />
          <MentalHealthInfo />
          <Statistics />
          <SDGSection />
          <Chatbot />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;