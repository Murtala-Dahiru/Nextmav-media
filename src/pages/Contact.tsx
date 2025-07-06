import { supabase } from '../lib/supabaseClient'; // make sure this is your initialized client
import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Calendar, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };



const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const { data, error } = await supabase
    .from('contact_submissions')
    .insert([formData]);

  if (error) {
    console.error('Error submitting form:', error);
    alert('Oops! Something went wrong. Please try again.');
  } else {
    console.log('Form submitted:', data);
    alert("Thank you for your message! We'll get back to you within 24 hours.");
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    });
  }
};


  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@mavmedia.co',
      link: 'mailto:hello@mavmedia.co'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+234 (0) 123 456 789',
      link: 'tel:+2341234567890'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Lagos, Nigeria',
      link: 'https://maps.google.com'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: 'Start a conversation',
      link: 'https://wa.me/2341234567890'
    }
  ];

  const services = [
    'Web Design & Development',
    'Digital Marketing',
    'Brand Identity & Design',
    'Video & Motion Graphics',
    'Complete Digital Transformation',
    'Other'
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
            Let's Launch Something{' '}
            <span className="bg-gradient-to-r from-electric-orange to-rich-violet bg-clip-text text-transparent">
              Unstoppable
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your brand and accelerate your growth? 
            Let's discuss how we can bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-deep-blue mb-8">
                Tell Us About Your Project
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-orange focus:border-transparent transition-all duration-300 hover:border-electric-orange"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-orange focus:border-transparent transition-all duration-300 hover:border-electric-orange"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-orange focus:border-transparent transition-all duration-300 hover:border-electric-orange"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-orange focus:border-transparent transition-all duration-300 hover:border-electric-orange"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-orange focus:border-transparent transition-all duration-300 hover:border-electric-orange"
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-electric-orange to-rich-violet text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-bold text-deep-blue mb-8">
                Get In Touch
              </h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300 group hover:scale-105"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-electric-orange to-rich-violet rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-deep-blue group-hover:text-electric-orange transition-colors">
                        {info.title}
                      </h3>
                      <p className="text-gray-600">
                        {info.content}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <a
                  href="https://calendly.com/mavmedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full bg-gradient-to-r from-electric-orange to-rich-violet text-white px-6 py-4 rounded-full font-semibold text-center hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Schedule Strategy Call
                </a>
                <a
                  href="https://wa.me/2341234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full border-2 border-lime-green text-lime-green px-6 py-4 rounded-full font-semibold text-center hover:bg-lime-green hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                  <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  WhatsApp Us
                </a>
              </div>

              {/* Office Hours */}
              <div className="mt-8 p-6 bg-deep-blue rounded-2xl text-white hover:scale-105 transition-transform duration-300">
                <h3 className="font-semibold mb-4">Office Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mt-4">
                  *We're also available for urgent projects outside these hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-blue mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about working with Mav Media.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on scope. Web projects typically take 2-6 weeks, brand identity 1-3 weeks, and digital marketing campaigns are ongoing. We prioritize speed without compromising quality."
              },
              {
                question: "Do you work with businesses outside Africa?",
                answer: "Absolutely! While we're Africa-born, we serve clients globally. Our remote-first approach and proven systems allow us to deliver world-class results regardless of location."
              },
              {
                question: "What's included in your strategy calls?",
                answer: "Our strategy calls include business analysis, competitive research, opportunity identification, and a custom roadmap. It's a comprehensive consultation to ensure we understand your goals and challenges."
              },
              {
                question: "Can you handle rush projects?",
                answer: "Yes, we specialize in rapid execution. We can accommodate urgent timelines while maintaining our quality standards. Rush projects may have premium pricing based on scope and timeline."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group hover:scale-105">
                <h3 className="font-semibold text-deep-blue mb-3 group-hover:text-electric-orange transition-colors">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;