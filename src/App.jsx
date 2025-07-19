import './styles.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import MaterialsPage from './pages/MaterialsPage';
import ContactPage from './pages/ContactPage';
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/materials" element={<MaterialsPage />} />
        <Route path="/contact" element={<ContactPage />} />
       

      </Routes>
    </>
  );
}

export default App;
