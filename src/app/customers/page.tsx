import React from 'react';
import Image from 'next/image';

const CustomersPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our Main Customers</h1>
          <p className="text-xl max-w-4xl mx-auto text-center">
            We proudly serve government agencies across Thailand
          </p>
        </div>
      </section>

      {/* Customers Overview */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Trusted by Government Agencies</h2>
            <p className="text-gray-700">
              P.P EV Energy Co., Ltd. has established strong partnerships with various government
              agencies across Thailand. We are proud to provide our expertise in vehicle maintenance,
              Rumble Strips installation, and vehicle distribution to these prestigious organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Customer 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col">
                <div className="mb-6 flex justify-center">
                  <Image
                    src="/images/our_customers/bangkok_company.png"
                    alt="Department of Disaster Prevention and Mitigation Logo"
                    width={192}
                    height={96}
                    className="object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Bangkok Metropolitan Administration</h3>
                  <p className="text-gray-600">
                    Providing specialized vehicles and maintenance services to support disaster prevention efforts.
                  </p>
                </div>
              </div>
            </div>

            {/* Customer 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col">
                <div className="mb-6 flex justify-center">
                  <Image
                    src="/images/our_customers/highways_company.png"
                    alt="Department of Highways Logo"
                    width={192}
                    height={96}
                    className="object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Department of Highways</h3>
                  <p className="text-gray-600">
                    Installing Rumble Strips on expressways to prevent accidents caused by falling asleep while driving.
                  </p>
                </div>
              </div>
            </div>

            {/* Customer 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col">
                <div className="mb-6 flex justify-center">
                  <Image
                    src="/images/our_customers/royal_thai_police_company.png"
                    alt="Royal Thai Police Logo"
                    width={192}
                    height={96}
                    className="object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Royal Thai Police</h3>
                  <p className="text-gray-600">
                    Supplying and maintaining police vehicles to support law enforcement operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Success Stories</h2>
          {/* Case Study 1 */}
          <div className="bg-white p-8 rounded-lg shadow-sm mb-10">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="md:col-span-3">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Repair and Maintenance 499 fire truck to Royal Thai Police</h3>
                <p className="text-gray-700 mb-4">
                  We provided comprehensive repair and maintenance services for a fleet of 499 fire trucks
                  for the Royal Thai Police, ensuring these critical emergency vehicles remain in optimal condition.
                </p>
                <p className="text-gray-700 mb-4">
                  Our specialized technicians implemented a preventive maintenance program with
                  24/7 emergency repair services to support the Royal Thai Police&apos;s firefighting operations nationwide.
                </p>
                <div className="flex items-center text-primary">
                  <span className="font-medium mr-2">Results:</span>
                  <span className="text-gray-700">98% operational readiness achieved with 45% reduction in major repair costs</span>
                </div>
              </div>
              <div className="md:col-span-2 flex items-center justify-center">
                <div className="relative w-full h-80 rounded-lg overflow-hidden">
                  <Image
                    src="/images/achievements/achievements_3.png"
                    alt="Fire Truck Maintenance Project"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="md:col-span-2 flex items-center justify-center md:order-1 order-2">
                <div className="relative w-full h-80 rounded-lg overflow-hidden">
                  <Image
                    src="/images/achievements/achievements_5.png"
                    alt="Rumble Strips Implementation Project"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="md:col-span-3 md:order-2 order-1">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Rumble Strips Implementation on Motorway</h3>
                <p className="text-gray-700 mb-4">
                  Install Milled-In Shoulder Rumble Strips on Motorway No. 7 to prevent accidents caused by
                  falling asleep at the wheel. Working closely with the Department of Highways, we successfully
                  installed Rumble Strips on over 280 kilometers of Thailand&apos;s motorway network.
                </p>
                <p className="text-gray-700 mb-4">
                  Our specialized team deployed high-durability, noise-optimized Rumble Strips
                  strategically positioned to alert drivers before critical sections of the motorway.
                </p>
                <div className="flex items-center text-primary">
                  <span className="font-medium mr-2">Results:</span>
                  <span className="text-gray-700">Significant reduction in fatigue-related accidents on treated motorway sections</span>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 3 */}
          <div className="bg-white p-8 rounded-lg shadow-sm mt-10">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="md:col-span-3">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Upgrade the V150 armored vehicle</h3>
                <p className="text-gray-700 mb-4">
                  We successfully completed the comprehensive upgrade of V150 armored vehicles for the Royal Thai Army,
                  enhancing combat capabilities while extending the operational lifespan of these critical assets.
                </p>
                <p className="text-gray-700 mb-4">
                  Our technical team implemented advanced armor plating, modernized weapon systems, and upgraded
                  powertrains to meet current military standards while maintaining the vehicles&apos; mobility and reliability.
                </p>
                <div className="flex items-center text-primary">
                  <span className="font-medium mr-2">Results:</span>
                  <span className="text-gray-700">40% increase in protection capability and 25% improvement in operational efficiency</span>
                </div>
              </div>
              <div className="md:col-span-2 flex items-center justify-center">
                <div className="relative w-full h-80 rounded-lg overflow-hidden">
                  <Image
                    src="/images/achievements/achievements_14.png"
                    alt="V150 Armored Vehicle Upgrade Project"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomersPage;
