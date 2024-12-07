import React, { useState } from "react";
import {
  ExternalLink,
  Star,
  Users,
  Mail,
  Megaphone,
  PenTool,
  BarChart,
} from "lucide-react";
import SEO from "../components/SEO";
import ContactForm from "../components/ContactForm";
import { services } from "../data/services-data";

const iconComponents = {
  Megaphone,
  PenTool,
  Mail,
  Users,
  BarChart,
};

export default function Services() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <SEO
        title="Professional Email Marketing Services | EmailPro"
        description="Expert email marketing services including strategy development, template design, automation setup, and campaign optimization. Get started with our professional services today."
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Email Marketing Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional email marketing services to help you grow your business
            and engage your audience effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconComponents[service.icon];

            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg">
                      {IconComponent && (
                        <IconComponent className="h-6 w-6 text-indigo-600" />
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  </div>
                  <p className="text-2xl font-bold text-indigo-600 mb-4">
                    Starting at {service.price}
                  </p>
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    View Service
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-indigo-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact us for customized email marketing services tailored to your
            specific needs.
          </p>
          <button
            onClick={() => setIsContactOpen(true)}
            className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </main>

      <ContactForm
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
