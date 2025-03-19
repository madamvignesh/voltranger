'use client';
import Image from 'next/image';

const services = [
  {
    title: "Electrical Installation",
    description: "Professional installation services for residential and commercial properties.",
    icon: "icon 1.png"
  },
  {
    title: "Maintenance & Repair",
    description: "Regular maintenance and emergency repair services for all electrical systems.",
    icon: "icon 2.png"
  },
  {
    title: "Renewable Energy",
    description: "Solar panel installation and renewable energy solutions for sustainable power.",
    icon: "icon 3.png"
  },
  {
    title: "Smart Systems",
    description: "Installation and configuration of smart home and building automation systems.",
    icon: "icon 4.png"
  }
];

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Services Hero */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We provide comprehensive electrical solutions tailored to meet your specific needs.
        </p>
      </section>

      {/* Services Grid */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
              <Image
                src={`/assets/images/${service.icon}`}
                alt={service.title}
                width={64}
                height={64}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Consultation",
              description: "We discuss your needs and provide expert advice on the best solutions."
            },
            {
              step: "2",
              title: "Planning",
              description: "Our team develops a detailed plan and timeline for your project."
            },
            {
              step: "3",
              title: "Execution",
              description: "We complete the work with precision and attention to detail."
            }
          ].map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-back-color text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-back-color text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your project and get a free consultation.
        </p>
        <button className="bg-white text-back-color px-8 py-3 rounded-md hover:bg-gray-100 transition-colors">
          Contact Us
        </button>
      </section>
    </div>
  );
} 