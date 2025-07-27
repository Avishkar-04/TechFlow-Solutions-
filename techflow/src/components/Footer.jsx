// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TechFlow</h3>
            <p className="text-gray-400">
              Innovative software solutions for modern businesses.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Mobile Apps</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Cloud Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">AI Development</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">123 Tech Street, Silicon Valley</p>
            <div className="flex space-x-4 mt-2">
              <a href="mailto:info@techflow.com" className="text-gray-400 hover:text-white">info@techflow.com</a>
              <a href="tel:+15551234567" className="text-gray-400 hover:text-white">+1 (555) 123-4567</a>
            </div>
          </div>
          <p className="text-gray-400">© 2024 TechFlow Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}