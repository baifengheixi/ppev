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
              <div className="relative w-full h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/company_area/company_area_2.png"
                  alt="P.P EV Energy Company Headquarters"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10 relative w-full h-[300px] md:h-[400px] lg:h-[38rem] overflow-hidden rounded-lg">
              <Image
                src="/images/mission_vision.png"
                alt="Our Mission and Vision"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                priority
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-8">
              {/* Mission */}
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  P.P EV Energy Co., Ltd. is committed to providing quality services and creating
                  maximum satisfaction for customers, emphasizing professionalism, responsibility,
                  and safety.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  To be a leader in providing and distributing vehicles for government agencies
                  with high quality and standards.
                </p>
              </div>
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
              <h3 className="text-xl font-semibold mb-4 text-primary">Service and Support for the Military</h3>
              <p className="text-gray-700">
                Service and support for the military.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
