import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Star, TrendingUp, Users, Globe } from 'lucide-react';

const Home = () => {
  const stats = [
    { icon: Users, number: '30+', label: 'Brands Transformed' },
    { icon: Globe, number: '5+', label: 'Countries Served' },
    { icon: TrendingUp, number: '200%', label: 'Average Growth' },
    { icon: Star, number: '4.9/5', label: 'Client Satisfaction' },
  ];

  const services = [
    {
      title: 'Web Development & UI/UX Design',
      description: 'Websites that convert traffic to trust and visitors to customers.',
      color: 'from-electric-orange to-red-500'
    },
    {
      title: 'Digital Marketing & Social Media Management',
      description: 'Complete growth systems that build audiences and drive revenue.',
      color: 'from-lime-green to-green-500'
    },
    {
      title: 'Branding & Graphics Design',
      description: 'Visual systems that communicate value and build recognition.',
      color: 'from-rich-violet to-purple-500'
    },
    {
      title: 'Motion Graphics & Video',
      description: 'Content that captures attention and drives action across all platforms.',
      color: 'from-blue-500 to-indigo-600'
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-deep-blue via-slate-gray to-deep-blue flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-electric-orange/10 to-rich-violet/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-lime-green/10 to-electric-orange/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="max-w-4xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              The Creative Engine Behind the 
              <span className="bg-gradient-to-r from-electric-orange to-rich-violet bg-clip-text text-transparent">
                {' '}Next Billion-Dollar{' '}
              </span>
              Brands
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              We build digital identities, content systems, and design that scales. 
              Rapid execution. World-class results. Built for the now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center bg-gradient-to-r from-electric-orange to-rich-violet text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Book Creative Strategy Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="group inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-deep-blue transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Our Work
              </Link>
            </div>
          </div>
        </div>

        {/* Enhanced Floating Elements */}
        <div className="absolute top-1/4 right-10 animate-float">
          <div className="w-20 h-20 bg-gradient-to-r from-electric-orange to-rich-violet rounded-full opacity-20 blur-sm"></div>
        </div>
        <div className="absolute bottom-1/4 left-10 animate-float" style={{ animationDelay: '-1s' }}>
          <div className="w-32 h-32 bg-gradient-to-r from-lime-green to-rich-violet rounded-full opacity-15 blur-sm"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-float" style={{ animationDelay: '-2s' }}>
          <div className="w-16 h-16 bg-gradient-to-r from-rich-violet to-electric-orange rounded-full opacity-10 blur-sm"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up group" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-electric-orange to-rich-violet rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-deep-blue mb-2 group-hover:text-electric-orange transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-deep-blue mb-6">
              Services Built for Scale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every solution designed to accelerate growth, amplify impact, and position your brand for the next level.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300`}></div>
                  <h3 className="text-2xl font-bold text-deep-blue mb-4 group-hover:text-electric-orange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-electric-orange font-semibold hover:text-rich-violet transition-colors group-hover:translate-x-2 duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-deep-blue to-slate-gray relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-deep-blue/90 to-slate-gray/90"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-electric-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rich-violet/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Something Unstoppable?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the brands that chose to scale with design. Let's create your visual transformation.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center bg-gradient-to-r from-electric-orange to-rich-violet text-white px-10 py-5 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Start Your Transformation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;