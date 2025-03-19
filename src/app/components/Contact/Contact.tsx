'use client';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Contact Hero */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get in touch with us for any questions about our services or to request a quote.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-back-color focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-back-color focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-back-color focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-back-color focus:border-transparent"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-back-color text-white py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Contact Information */}
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-back-color">Address</h3>
                <p className="text-gray-600">123 Electric Avenue, Tech City, TC 12345</p>
              </div>
              <div>
                <h3 className="font-semibold text-back-color">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="font-semibold text-back-color">Email</h3>
                <p className="text-gray-600">info@voltranger.com</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Business Hours</h2>
            <div className="space-y-2 text-gray-600">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 