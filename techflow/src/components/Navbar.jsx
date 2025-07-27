import { motion } from 'framer-motion';
import { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { SearchContext } from '../context/SearchContext';

export default function Navbar() {
  const { setSearchQuery } = useContext(SearchContext);
  const [localQuery, setLocalQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const menuVariants = {
    open: { 
      opacity: 1,
      height: "auto",
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    closed: { 
      opacity: 0,
      height: 0,
    }
  };

  const itemVariants = {
    open: { 
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 300 }
    },
    closed: { 
      y: -20,
      opacity: 0,
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (localQuery.trim()) {
      setSearchQuery(localQuery);
      navigate('/search');
      setLocalQuery('');
    }
  };

  const handleHomeClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
    setIsOpen(false);
  };

  return (
    <motion.nav 
      className="bg-white shadow-lg fixed w-full top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* TechFlow Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button 
              onClick={handleHomeClick}
              className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors focus:outline-none"
            >
              TechFlow
            </button>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Home Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={handleHomeClick}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                Home
              </button>
            </motion.div>

            {/* Other Navigation Links */}
            {['Solutions', 'About', 'Contact'].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink 
                  to={`/${item.toLowerCase()}`} 
                  className={({ isActive }) => 
                    `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'}`
                  }
                >
                  {item}
                </NavLink>
              </motion.div>
            ))}
            
            {/* Search Bar */}
            <motion.form 
              onSubmit={handleSearch}
              className="relative"
              whileHover={{ scale: 1.02 }}
            >
              <input
                type="text"
                placeholder="Search..."
                className="border rounded-full py-1 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
                value={localQuery}
                onChange={(e) => setLocalQuery(e.target.value)}
              />
              <motion.button 
                type="submit"
                className="absolute left-3 top-1/2 transform -translate-y-1/2"
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </motion.button>
            </motion.form>

            {/* Auth Buttons */}
            <div className="flex space-x-4 ml-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <NavLink 
                  to="/login" 
                  className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-md transition"
                >
                  Login
                </NavLink>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <NavLink 
                  to="/signup" 
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  Sign Up
                </NavLink>
              </motion.div>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <motion.button
            className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {!isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </motion.button>
        </div>
        
        {/* Mobile Menu */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
        >
          <motion.div className="pb-4 space-y-2 bg-white">
            {/* Mobile Home Button */}
            <motion.div variants={itemVariants}>
              <button
                onClick={handleHomeClick}
                className="block py-2 px-4 text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                Home
              </button>
            </motion.div>

            {/* Other Mobile Links */}
            {['Solutions', 'About', 'Contact'].map((item) => (
              <motion.div key={item} variants={itemVariants}>
                <NavLink 
                  to={`/${item.toLowerCase()}`} 
                  className={({ isActive }) => 
                    `block py-2 px-4 ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-100'}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </NavLink>
              </motion.div>
            ))}
            
            {/* Mobile Search */}
            <motion.form 
              onSubmit={handleSearch}
              className="px-4 py-2"
              variants={itemVariants}
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border rounded-full py-1 px-4 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
                  value={localQuery}
                  onChange={(e) => setLocalQuery(e.target.value)}
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </motion.form>

            {/* Mobile Auth Buttons */}
            <motion.div 
              className="pt-2 border-t"
              variants={itemVariants}
            >
              <NavLink 
                to="/login" 
                className="block py-2 px-4 text-blue-600 hover:bg-blue-50"
                onClick={() => setIsOpen(false)}
              >
                Login
              </NavLink>
              <NavLink 
                to="/signup" 
                className="block py-2 px-4 bg-blue-600 text-white rounded mx-4 hover:bg-blue-700"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </NavLink>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
}