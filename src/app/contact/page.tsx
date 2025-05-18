'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // This is a placeholder for the actual form submission functionality
    // In a real implementation, you would send this data to a server
    console.log('Form submitted:', formData);

    // Simulate successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message. We will get back to you soon!'
    });

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      organization: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/company_area/company_area_4.png"
            alt="Company Background"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Contact Us</h1>
          <p className="text-xl max-w-4xl mx-auto text-center">
            Get in touch with our team to learn more about our services
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Get in Touch</h2>
              <p className="text-gray-700 mb-8">
                Whether you have a question about our services, want to request a quote, or
                would like to discuss a potential partnership, our team is here to help.
              </p>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start">
                  <div className="p-1 mr-4 relative w-8 h-8">
                    <Image
                      src="/window.svg"
                      alt="Address Icon"
                      width={32}
                      height={32}
                      className="text-primary"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">Address</h3>
                    <p className="text-gray-700">
                      P.P EV Energy Co., Ltd.<br />
                      Bangkok, Thailand
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="p-1 mr-4 relative w-8 h-8">
                    <Image
                      src="/file.svg"
                      alt="Email Icon"
                      width={32}
                      height={32}
                      className="text-primary"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">Email</h3>
                    <p className="text-gray-700">info@ppev.co.th</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="p-1 mr-4 relative w-8 h-8">
                    <Image
                      src="/globe.svg"
                      alt="Phone Icon"
                      width={32}
                      height={32}
                      className="text-primary"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">Phone</h3>
                    <p className="text-gray-700">+66 XX XXX XXXX</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-10 bg-neutral bg-opacity-20 w-full h-64 rounded-lg flex items-center justify-center">
                <p className="text-lg text-gray-500">Google Map will be integrated here</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>

              {formStatus.submitted && formStatus.success ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded mb-6">
                  {formStatus.message}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  {/* Organization */}
                  <div>
                    <label htmlFor="organization" className="block text-gray-700 font-medium mb-2">
                      Organization/Agency
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="bg-primary text-white px-6 py-3 rounded-md font-medium transition-colors hover:bg-opacity-90 w-full"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
