import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Zap, Globe, Rocket, Users, Lightbulb, Brain } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Zap,
      title: 'Speed',
      description: 'We move at the pace of opportunity. Rapid execution without compromising quality.'
    },
    {
      icon: Target,
      title: 'Clarity',
      description: 'Every design decision serves a purpose. Clear communication, clear results.'
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Results-driven creativity. Every project is measured by its impact on your business.'
    },
    {
      icon: Globe,
      title: 'Scale',
      description: 'Built for growth. Our solutions evolve with your ambitions.'
    }
  ];

  const philosophy = [
    {
      icon: Brain,
      title: 'Think Global, Act Local',
      description: 'We understand African markets while building for global standards. Every solution bridges local insight with international excellence.'
    },
    {
      icon: Lightbulb,
      title: 'Design as Strategy',
      description: 'We don\'t just make things look good—we make them work better. Every pixel serves your business objectives.'
    },
    {
      icon: Rocket,
      title: 'Speed Without Compromise',
      description: 'In a world where timing is everything, we deliver world-class results at the speed of opportunity.'
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
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Africa-Born,{' '}
              <span className="bg-gradient-to-r from-electric-orange to-rich-violet bg-clip-text text-transparent">
                Globally-Minded
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We're not just another creative agency. We're the visual architects behind businesses 
              that win attention, earn trust, and build unstoppable momentum.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-deep-blue mb-6">
                Why Mav Media Exists
              </h2>
              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  In a world where brands have seconds to make an impression, mediocre design 
                  isn't just ineffective—it's expensive. Every day, brilliant businesses lose 
                  opportunities because their visual identity doesn't match their ambition.
                </p>
                <p className="text-lg leading-relaxed">
                  Mav Media was born from a simple observation: Africa is home to extraordinary 
                  entrepreneurs building world-class businesses, but many lack the visual systems 
                  to compete on the global stage.
                </p>
                <p className="text-lg leading-relaxed">
                  We bridge that gap. We're the creative engine that transforms local brilliance 
                  into global recognition. Speed, scale, and sophistication—that's our promise.
                </p>
              </div>
            </div>
            <div className="relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="Creative team collaboration"
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-electric-orange to-rich-violet rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center p-8 group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-electric-orange to-rich-violet rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-deep-blue mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become the #1 visual transformation partner for modern businesses 
                across Africa and beyond. We envision a future where every great business 
                has the visual presence it deserves.
              </p>
            </div>
            <div className="text-center p-8 group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-lime-green to-rich-violet rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-deep-blue mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To deliver rapid, world-class creative solutions that help brands launch faster, 
                grow smarter, and scale with design. We turn creative challenges into 
                competitive advantages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 bg-deep-blue relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-electric-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rich-violet/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Philosophy
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide every decision, every design, and every client relationship.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {philosophy.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-electric-orange to-rich-violet rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-blue mb-6">
              The Values That Drive Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every project, every interaction, every result is guided by these core principles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-electric-orange to-rich-violet rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-deep-blue mb-4 group-hover:text-electric-orange transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Framework Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-blue mb-6">
              Our Framework: Discover → Design → Deploy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every project follows our proven three-phase approach that ensures results, not just pretty designs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-electric-orange to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-2xl font-bold text-deep-blue mb-4 group-hover:text-electric-orange transition-colors">Discover</h3>
              <p className="text-gray-600">
                Deep-dive into your business, audience, and competitive landscape. 
                We uncover opportunities others miss.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-lime-green to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-2xl font-bold text-deep-blue mb-4 group-hover:text-lime-green transition-colors">Design</h3>
              <p className="text-gray-600">
                Strategic creative execution that balances beauty with business objectives. 
                Every pixel serves a purpose.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-rich-violet to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-2xl font-bold text-deep-blue mb-4 group-hover:text-rich-violet transition-colors">Deploy</h3>
              <p className="text-gray-600">
                Seamless implementation and optimization. We don't just deliver—we ensure success.
              </p>
            </div>
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
            <Target className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;