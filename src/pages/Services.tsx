import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Smartphone, Palette, Video, ArrowRight, Check, TrendingUp, Target, Users, BarChart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Web Development & UI/UX Design',
      subtitle: 'Websites that convert traffic to trust',
      description: 'Custom-crafted websites and landing pages designed for conversion and built for speed—with premium UI systems that scale with your business.',
      features: [
        'Custom Website Design & Development (React, WordPress, Webflow, etc.)',
        'UI/UX Design (Wireframing, Prototyping, Design Systems)',
        'Landing Pages & Portfolio Sites',
        'E-Commerce Website Development (Shopify, WooCommerce, etc.)',
        'Web Application Development (MVPs, Portals, Dashboards)',
        'Website Redesign, Revamp, Maintenance & Support',
        'Design Systems & Component Libraries',


      ],
      color: 'from-electric-orange to-red-500',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing & Social Media Management',
      subtitle: 'Complete growth systems that build audiences and drive revenue',
      description: 'Comprehensive digital marketing strategies that transform your online presence into a revenue-generating machine through data-driven campaigns and strategic execution.',
      features: [
        'Social Media Management (Content Calendar, Posting, Engagement)',
        'Social Media Strategy & Audit',
        'Paid Ad Campaigns (Facebook, Instagram, Google Ads, LinkedIn)',
        'Influencer Marketing Coordination',
        'Content Creation (Captions, Visuals, Carousels, Copywriting)',
        'Email Marketing (Newsletters, Funnels, Automation)',
        'Search Engine Optimization (SEO Audit, On-page, Off-page)',
        'Online Reputation Management',
        'Analytics, Reporting & Data Insights',
        'Marketing Automation Setup (e.g. CRM, Email triggers)'
      ],
      color: 'from-lime-green to-green-500',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg'
    },
    {
      icon: Palette,
      title: 'Brand Identity & Graphic Design',
      subtitle: 'Visual systems that communicate value',
      description: 'End-to-end brand systems, logos, visual kits, and brand assets for digital and print platforms that build recognition and trust.',
      features: [
        'Brand identity, positioning & messaging',
        'Complete visual identity and Design systems',
        'Brand guidelines & style guides',
        'Print, digital, & marketing collateral(Flyers, Brochures, Stationaries & more)',
        'Digital Assets (Social media,Ads, Emails Banners, etc)',
        'Packaging & product design',
        'Social Media Brand Kit (Templates, Highlight Covers, etc.)',
        'Event or Elite Campaign Branding',
        'Illustration & custom Graphic(Infographics, Custom Icons, Characters Design)'
      ],
      color: 'from-rich-violet to-purple-500',
      image: 'https://images.pexels.com/photos/3803517/pexels-photo-3803517.jpeg'
    },
    {
      icon: Video,
      title: 'Motion Graphics & Video',
      subtitle: 'Content that captures attention and drives action',
      description: 'High-impact mobile content: Reels, TikTok promos, motion brand intros, ad visuals, and storytelling animation that stops the scroll.',
      features: [
        'Social media video content',
        'Motion graphics & animation',
        'Brand intro & logo animations',
        'Social Media Motion Graphics (Reels, Stories, Shorts)',
        'Explainer Videos (2D/3D Animation, Infographics)',
        'Advertising & promotional content',
        'Video Editing (Event, Interview, Documentary)',
        'Voiceover Integration & Subtitling'
      ],
      color: 'from-blue-500 to-indigo-600',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery Call',
      description: 'We dive deep into your business, goals, and challenges to create a strategic roadmap.'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Custom strategy development with clear timelines, deliverables, and success metrics.'
    },
    {
      step: '03',
      title: 'Creative Execution',
      description: 'Our team brings your vision to life with precision, creativity, and attention to detail.'
    },
    {
      step: '04',
      title: 'Launch & Optimize',
      description: 'Seamless deployment with ongoing optimization to ensure maximum impact and ROI.'
    }
  ];

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
            Services Built for{' '}
            <span className="bg-gradient-to-r from-electric-orange to-rich-violet bg-clip-text text-transparent">
              Scale
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every solution designed to accelerate growth, amplify impact, and position 
            your brand for the next level. We don't just create—we transform.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-16 items-center mb-20 ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`animate-slide-up ${index % 2 === 1 ? 'lg:col-start-2' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-6 hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-deep-blue mb-4">
                  {service.title}
                </h2>
                <p className="text-xl text-electric-orange font-semibold mb-6">
                  {service.subtitle}
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3 group">
                      <div className={`flex-shrink-0 w-5 h-5 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-700 group-hover:text-deep-blue transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className={`group inline-flex items-center bg-gradient-to-r ${service.color} text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300`}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className={`relative animate-slide-up ${index % 2 === 1 ? 'lg:col-start-1' : ''}`} style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
                <img 
                  src={service.image}
                  alt={service.title}
                  className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r ${service.color} rounded-full opacity-20 animate-pulse`}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-blue mb-6">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to launch, every project follows our battle-tested methodology 
              that ensures results, not just deliverables.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center relative group">
                <div className="relative z-10 bg-white p-8 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="text-6xl font-bold text-electric-orange mb-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-deep-blue mb-4 group-hover:text-electric-orange transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 z-0">
                    <ArrowRight className="h-8 w-8 text-electric-orange opacity-30 group-hover:opacity-60 transition-opacity" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-deep-blue relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-electric-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rich-violet/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can accelerate your growth with strategic design and 
            marketing solutions built for scale.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center bg-gradient-to-r from-electric-orange to-rich-violet text-white px-10 py-5 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Book Your Strategy Call
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;