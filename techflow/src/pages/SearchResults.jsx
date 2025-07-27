import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const searchIndex = [
  {
    id: 1,
    title: 'Cloud Solutions',
    content: 'Scalable cloud infrastructure and migration services to modernize your business operations with enhanced flexibility and cost-efficiency.',
    path: '/solutions',
    category: 'Solutions'
  },
  {
    id: 2,
    title: 'AI & Machine Learning',
    content: 'Intelligent automation and predictive analytics solutions to transform your data into actionable insights and competitive advantages.',
    path: '/solutions',
    category: 'Solutions'
  },
  {
    id: 3,
    title: 'About TechFlow',
    content: 'TechFlow is a leading provider of innovative software solutions for modern businesses. Our team of experts delivers cutting-edge technology solutions.',
    path: '/about',
    category: 'Company'
  },
  {
    id: 4,
    title: 'Contact Us',
    content: 'Get in touch with our team for inquiries or support. Our office is located at 123 Tech Street, Silicon Valley.',
    path: '/contact',
    category: 'Support'
  },
  {
    id: 5,
    title: '24/7 Support',
    content: 'Round-the-clock technical support and maintenance for uninterrupted operations.',
    path: '/solutions',
    category: 'Support'
  }
];

export default function SearchResults() {
  const { searchQuery } = useContext(SearchContext);

  const filteredResults = searchIndex.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Search Results for "{searchQuery}"</h1>
        
        {filteredResults.length > 0 ? (
          <div className="space-y-6">
            {filteredResults.map(result => (
              <div key={result.id} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{result.title}</h2>
                    <p className="text-gray-600 mb-4">{result.content}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {result.category}
                  </span>
                </div>
                <Link 
                  to={result.path} 
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  View more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">No results found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Try different keywords or check out our <Link to="/solutions" className="text-blue-600 hover:text-blue-500">solutions page</Link>
            </p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}