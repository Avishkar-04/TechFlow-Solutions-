import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Solutions() {
  const solutions = [
    {
      id: 1,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to modernize your business operations with enhanced flexibility and cost-efficiency.',
      features: [
        'AWS & Azure Integration',
        'Auto-scaling Infrastructure',
        'Disaster Recovery',
        'Cloud Security'
      ],
      icon: (
        <svg className="h-10 w-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'AI & Machine Learning',
      description: 'Intelligent automation and predictive analytics solutions to transform your data into actionable insights and competitive advantages.',
      features: [
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision',
        'Recommendation Systems'
      ],
      icon: (
        <svg className="h-10 w-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      id: 3,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance for uninterrupted operations.',
      features: [
        'Priority Support',
        'Dedicated Account Manager',
        'SLA Guarantees',
        'Proactive Monitoring'
      ],
      icon: (
        <svg className="h-10 w-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Our Solutions</h1>
        
        <div className="space-y-12">
          {solutions.map((solution) => (
            <div key={solution.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-6">
                    {solution.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">{solution.title}</h2>
                    <p className="text-gray-700 mb-4">{solution.description}</p>
                    
                    <div className="mt-6">
                      <h3 className="text-lg font-medium mb-3">Key Features:</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {solution.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}