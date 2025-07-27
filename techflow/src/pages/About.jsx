import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">About TechFlow</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2020, TechFlow has been at the forefront of delivering innovative 
              software solutions to businesses worldwide. Our team of experts combines 
              technical excellence with business acumen to create transformative digital 
              experiences.
            </p>
            <p className="text-gray-700">
              We believe in the power of technology to solve complex problems and 
              create opportunities for growth and efficiency.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              To empower businesses through cutting-edge technology solutions that drive 
              innovation, efficiency, and growth.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 mt-6">Our Values</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Innovation at our core</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Client-centric approach</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Transparency and integrity</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="h-40 bg-gray-200 rounded mb-4"></div>
              <h3 className="text-xl font-semibold">Sarah Johnson</h3>
              <p className="text-blue-600">CEO & Founder</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="h-40 bg-gray-200 rounded mb-4"></div>
              <h3 className="text-xl font-semibold">Michael Chen</h3>
              <p className="text-blue-600">CTO</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="h-40 bg-gray-200 rounded mb-4"></div>
              <h3 className="text-xl font-semibold">Emma Wilson</h3>
              <p className="text-blue-600">Lead Developer</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}