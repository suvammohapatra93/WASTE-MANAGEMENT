import React,{useState} from 'react';
import Navbar from './Navbar';

const FuturePlans = () => {
    const [activeIndex, setActiveIndex] = useState(null);

  const toggleSection = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <>
    <Navbar/>
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-7xl mx-auto mt-14">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-8">Future Plans for C&D Waste Connect</h2>
      
      {/* Future Scope Section */}
      <div className="space-y-4">
        <h3 className="text-3xl font-semibold text-blue-600">Future Scope</h3>
        
        <div className="space-y-2">
          {[
            { title: 'Advanced AI/ML Integration', content: 'Predictive Analytics, Waste Volume Estimation, Dynamic Pricing for Recycled Materials.' },
            { title: 'IoT Integration', content: 'Smart Bins, Waste Tracking Devices.' },
            { title: 'Blockchain for Transparency', content: 'Supply Chain Tracking, Carbon Credit Tracking.' },
            { title: 'Expansion to Other Industries', content: 'Industrial Waste Management, Household Waste Management.' },
            { title: 'Global Expansion', content: 'Regional Customization, Multi-Language Support.' },
            { title: 'Gamification and Incentives', content: 'Rewards System, Sustainability Certifications.' },
            { title: 'Integration with Smart Cities', content: 'Smart City Partnerships, Public Data Dashboards.' },
            { title: 'Augmented Reality (AR) for Waste Sorting', content: 'AR-Based Training, AR Waste Identification.' },
          ].map((section, index) => (
            <div key={index} className="border-t pt-4">
              <button 
                className="w-full text-left text-lg font-semibold text-gray-800 hover:text-green-600 focus:outline-none"
                onClick={() => toggleSection(index)}
              >
                {section.title}
              </button>
              {activeIndex === index && (
                <p className="text-gray-600 mt-2">{section.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Business Model Expansion Section */}
      <div className="space-y-4 mt-8">
        <h3 className="text-3xl font-semibold text-blue-600">Business Model Expansion</h3>
        
        <div className="space-y-2">
          {[
            { title: 'New Revenue Streams', content: 'Carbon Credit Marketplace, Waste Collection Services, Training and Certification Programs.' },
            { title: 'Partnerships and Collaborations', content: 'Government Partnerships, Recycling Facility Partnerships, Construction Material Suppliers.' },
            { title: 'Data Monetization', content: 'Waste Analytics for Insurance Companies, Market Research Reports.' },
            { title: 'Subscription Tiers', content: 'Freemium Model, Enterprise Plans.' },
            { title: 'API Licensing', content: 'Third-Party Integrations, White-Label Solutions.' },
            { title: 'Advertising and Sponsorships', content: 'Eco-Friendly Product Ads, Sponsored Content.' },
            { title: 'International Licensing', content: 'Franchise Model, Joint Ventures.' },
          ].map((section, index) => (
            <div key={index} className="border-t pt-4">
              <button 
                className="w-full text-left text-lg font-semibold text-gray-800 hover:text-green-600 focus:outline-none"
                onClick={() => toggleSection(index + 8)} // Adding offset for correct index
              >
                {section.title}
              </button>
              {activeIndex === index + 8 && (
                <p className="text-gray-600 mt-2">{section.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Long-Term Vision Section */}
      <div className="space-y-4 mt-8">
        <h3 className="text-3xl font-semibold text-blue-600">Long-Term Vision</h3>
        
        <div className="space-y-2">
          {[
            { title: 'Circular Economy Leader', content: 'Position C&D Waste Connect as a global leader in promoting the circular economy.' },
            { title: 'Sustainability as a Service (SaaS)', content: 'Expand to offer a suite of sustainability services, including energy efficiency, water conservation, and carbon footprint management.' },
            { title: 'Global Impact', content: 'Aim to reduce global construction waste by 50% over the next decade.' },
            { title: 'AI-Driven Waste-Free Construction', content: 'Develop AI tools to design projects with minimal waste generation.' },
          ].map((section, index) => (
            <div key={index} className="border-t pt-4">
              <button 
                className="w-full text-left text-lg font-semibold text-gray-800 hover:text-green-600 focus:outline-none"
                onClick={() => toggleSection(index + 16)} // Adding offset for correct index
              >
                {section.title}
              </button>
              {activeIndex === index + 16 && (
                <p className="text-gray-600 mt-2">{section.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default FuturePlans;
