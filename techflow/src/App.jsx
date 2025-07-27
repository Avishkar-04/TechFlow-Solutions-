import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SearchProvider } from './context/SearchContext';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Contact from './pages/Contact';
import Solutions from './pages/Solutions';
import Login from './pages/Login';
import SearchResults from './pages/SearchResults';

export default function App() {
  return (
    <SearchProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </Router>
    </SearchProvider>
  );
}