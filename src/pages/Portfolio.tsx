import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Filter } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web Design', 'Branding', 'Digital Marketing', 'Video'];

  const projects = [
    {
      id: 1,
      title: 'TechStart Pro',
      category: 'Web Design',
      description: 'Complete digital transformation for a fintech startup. 300% increase in conversions.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      tags: ['UI/UX', 'Conversion Optimization', 'Mobile-First'],
      results: '+300% Conversions'
    },
    {
      id: 2,
      title: 'AfriGrow Brand Identity',
      category: 'Branding',
      description: 'Brand system for agricultural tech company expanding across 5 African countries.',
      image: 'https://images.pexels.com/photos/3803517/pexels-photo-3803517.jpeg',
      tags: ['Logo Design', 'Brand Guidelines', 'Print Design'],
      results: '5 Country Expansion'
    },
    {
      id: 3,
      title: 'EcoMart E-commerce',
      category: 'Web Design',
      description: 'Modern e-commerce platform with integrated payment systems and inventory management.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      tags: ['E-commerce', 'Payment Integration', 'Admin Dashboard'],
      results: '250% Revenue Growth'
    },
    {
      id: 4,
      title: 'FitLife Growth Campaign',
      category: 'Digital Marketing',
      description: 'Complete digital marketing overhaul driving 500K+ followers and 400% engagement.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg',
      tags: ['Social Strategy', 'Paid Ads', 'Content Marketing'],
      results: '500K+ Followers'
    },
    {
      id: 5,
      title: 'InnovateHub Rebranding',
      category: 'Branding',
      description: 'Complete rebrand for innovation hub, including new identity and digital presence.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      tags: ['Rebranding', 'Digital Identity', 'Marketing Materials'],
      results: '180% Brand Recognition'
    },
    {
      id: 6,
      title: 'MediCare App Interface',
      category: 'Web Design',
      description: 'Healthcare app design focusing on accessibility and user experience.',
      image: 'https://images.pexels.com/photos/3784324/pexels-photo-3784324.jpeg',
      tags: ['Mobile App', 'Healthcare', 'Accessibility'],
      results: '4.9★ App Store Rating'
    },
    {
      id: 7,
      title: 'SportsPro Video Series',
      category: 'Video',
      description: 'High-impact video content series generating 2M+ views across platforms.',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
      tags: ['Video Production', 'Motion Graphics', 'Social Content'],
      results: '2M+ Views'
    },
    {
      id: 8,
      title: 'GreenTech Digital Strategy',
      category: 'Digital Marketing',
      description: 'Sustainable tech company digital marketing strategy increasing ROI by 450%.',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg',
      tags: ['SEO', 'Content Strategy', 'Paid Campaigns'],
      results: '+450% ROI'
    },
    {
      id: 9,
      title: 'FinanceFlow Platform',
      category: 'Web Design',
      description: 'B2B financial platform with advanced analytics and real-time reporting.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      tags: ['B2B Platform', 'Analytics', 'Real-time Data'],
      results: '85% User Retention'
    },
    {
      id: 10,
      title: 'ArtisanCraft Brand Launch',
      category: 'Branding',
      description: 'Complete brand identity for luxury craft marketplace targeting global markets.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      tags: ['Luxury Branding', 'Marketplace', 'Global Launch'],
      results: '12 Country Launch'
    },
    {
      id: 11,
      title: 'TravelAfrica Campaign',
      category: 'Digital Marketing',
      description: 'Multi-channel marketing campaign promoting African tourism destinations.',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg',
      tags: ['Tourism Marketing', 'Multi-channel', 'Destination Branding'],
      results: '2.5M Reach'
    },
    {
      id: 12,
      title: 'EduTech Motion Graphics',
      category: 'Video',
      description: 'Educational video series with animated explanations for complex concepts.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
      tags: ['Educational Content', 'Animation', 'Explainer Videos'],
      results: '95% Completion Rate'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-deep-blue via-slate-gray to-deep-blue relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-electric-orange/10 to-rich-violet/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-lime-green/10 to-electric-orange/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Work That{' '}
            <span className="bg-gradient-to-r from-electric-orange to-rich-violet bg-clip-text text-transparent">
              Drives Results
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every project is a testament to our commitment to excellence. 
            See how we've helped brands transform their presence and scale their success.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Filter className="h-5 w-5 text-gray-500" />
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-electric-orange to-rich-violet text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-semibold">
                          {project.results}
                        </span>
                        <Link
                          to="/contact"
                          className="text-white hover:text-electric-orange transition-colors"
                        >
                          <ExternalLink className="h-5 w-5 group-hover:scale-110 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-electric-orange">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {project.results}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-deep-blue mb-3 group-hover:text-electric-orange transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full hover:bg-electric-orange hover:text-white transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className="group inline-flex items-center text-electric-orange font-semibold hover:text-rich-violet transition-colors"
                  >
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-deep-blue to-slate-gray relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-deep-blue/90 to-slate-gray/90"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-electric-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rich-violet/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Results That Speak Volumes
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every project is measured by impact. Here's what we've achieved for our clients.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-electric-orange mb-2 group-hover:scale-110 transition-transform">
                200+
              </div>
              <div className="text-gray-300">
                Projects Delivered
              </div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-lime-green mb-2 group-hover:scale-110 transition-transform">
                300%
              </div>
              <div className="text-gray-300">
                Average Growth
              </div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-rich-violet mb-2 group-hover:scale-110 transition-transform">
                15+
              </div>
              <div className="text-gray-300">
                Countries Served
              </div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-electric-orange mb-2 group-hover:scale-110 transition-transform">
                98%
              </div>
              <div className="text-gray-300">
                Client Retention
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-deep-blue mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create something extraordinary together. Your success story starts with a conversation.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center bg-gradient-to-r from-electric-orange to-rich-violet text-white px-10 py-5 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;