import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">About P.P EV Energy Co., Ltd.</h1>
          <p className="text-xl max-w-4xl mx-auto text-center">
            Learn about our company, mission, and vision
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Company</h2>
              <p className="text-gray-700 mb-6">
                P.P EV Energy Co., Ltd. is a company that focuses on providing services
                and distributing vehicles for government agencies. We are experts in the
                maintenance of all types of government vehicles, providing Rumble Strips
                services on expressways (motorways), and distributing vehicles to
                government agencies.
              </p>
              <p className="text-gray-700">
                With our team of skilled professionals and dedication to quality, we have
                established ourselves as a trusted partner for government agencies across Thailand.
              </p>
            </div>
            <div className="flex justify-center">
              {/* Placeholder for company image - replace with actual image */}
              <div className="bg-neutral bg-opacity-20 w-full h-80 rounded-lg flex items-center justify-center">
                <p className="text-lg text-gray-500">Company Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-primary bg-opacity-10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-gray-700">
                P.P EV Energy Co., Ltd. is committed to providing quality services and creating
                maximum satisfaction for customers, emphasizing professionalism, responsibility,
                and safety.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-secondary bg-opacity-10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be a leader in providing and distributing vehicles for government agencies
                with high quality and standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Products and Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-primary">Government Vehicle Maintenance</h3>
              <p className="text-gray-700">
                Providing comprehensive maintenance services for government vehicles by a team of skilled technicians.
              </p>
            </div>

            {/* Service 2 */}
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-primary">Rumble Strips on Motorways</h3>
              <p className="text-gray-700">
                Installation of speed-reducing strips on intercity expressways to increase driving safety.
              </p>
            </div>

            {/* Service 3 */}
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-primary">Distribution of Government Vehicles</h3>
              <p className="text-gray-700">
                Distributing high-quality vehicles to various government agencies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
