import React from 'react';
import { Mail, Target, Globe, BarChart } from 'lucide-react';
import SEO from '../components/SEO';

export default function About() {
  return (
    <>
      <SEO 
        title="About EmailPro | Email Marketing Expertise"
        description="Learn about EmailPro's mission to help businesses succeed with email marketing. Discover our expert team, values, and commitment to delivering results-driven email marketing solutions."
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About EmailPro</h1>
          
          <div className="prose prose-indigo max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              EmailPro is your ultimate resource for mastering email marketing. We provide expert insights,
              strategies, and best practices to help you create successful email campaigns that drive results.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Target className="h-8 w-8 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expert Strategies</h3>
                <p className="text-gray-600">
                  Learn from industry experts about proven email marketing strategies that deliver results.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Mail className="h-8 w-8 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Best Practices</h3>
                <p className="text-gray-600">
                  Stay updated with the latest email marketing best practices and industry standards.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Globe className="h-8 w-8 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Global Insights</h3>
                <p className="text-gray-600">
                  Access insights from successful email marketing campaigns worldwide.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <BarChart className="h-8 w-8 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Data-Driven</h3>
                <p className="text-gray-600">
                  Learn how to leverage analytics to optimize your email marketing performance.
                </p>
              </div>
            </div>

            <div className="bg-indigo-50 p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                We believe in empowering marketers with the knowledge and tools they need to create
                impactful email marketing campaigns that drive engagement and conversions.
              </p>
              <p className="text-gray-600">
                Our platform is designed to help you stay ahead of the curve with the latest trends,
                technologies, and strategies in email marketing.
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Join Our Community</h2>
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}