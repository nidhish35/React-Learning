import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import AboutUs from './components/AboutUs'
import Courses from './components/Courses'

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { path: '/courses', label: 'Courses' },
    { path: '/team', label: 'Team' },
    { path: '/about', label: 'About Us' },
    { path: '/resources', label: 'Resources' },
    { path: '/contact', label: 'Contact Us' },
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-blue-600 text-white py-4 relative">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold z-50 relative">Logo</Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className="hover:text-blue-200 font-medium"
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                to="/login" 
                className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-50 transition-colors"
              >
                Login
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-white focus:outline-none z-50 relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {!isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Overlay */}
          {isMobileMenuOpen && (
            <div 
              className="fixed inset-0 bg-black/50 lg:hidden z-40"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            ></div>
          )}

          {/* Mobile Sidebar */}
          <div 
            className={`fixed top-0 right-0 h-full w-64 bg-blue-600 transform transition-transform duration-300 ease-in-out z-50 ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } lg:hidden shadow-xl`}
          >
            <div className="flex flex-col h-full pt-16">
              {/* Mobile Menu Items */}
              <div className="flex flex-col space-y-4 p-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-white hover:text-blue-200 font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/login"
                  className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-50 transition-colors text-center mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<Courses />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App