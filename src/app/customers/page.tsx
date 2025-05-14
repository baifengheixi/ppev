import React from 'react';
import Image from 'next/image';

const CustomersPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our Customers</h1>
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
                  <h3 className="text-xl font-semibold mb-4 text-primary">Department of Disaster Prevention and Mitigation</h3>
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
                    Installing Rumble Strips on expressways and providing maintenance for highway patrol vehicles.
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
                <h3 className="text-2xl font-semibold mb-4 text-primary">Vehicle Fleet Maintenance for Disaster Prevention</h3>
                <p className="text-gray-700 mb-4">
                  We established a comprehensive maintenance program for the Department of Disaster Prevention and Mitigation&apos;s
                  fleet of emergency response vehicles, ensuring they are always ready for deployment.
                </p>
                <p className="text-gray-700 mb-4">
                  Our team of skilled technicians provides regular maintenance and rapid repair services,
                  minimizing downtime for critical emergency vehicles.
                </p>
                <div className="flex items-center text-primary">
                  <span className="font-medium mr-2">Results:</span>
                  <span className="text-gray-700">Reduced vehicle downtime by 40% and extended vehicle lifespan by 3+ years</span>
                </div>
              </div>
              <div className="md:col-span-2 flex items-center justify-center">
                <div className="relative w-full h-56 rounded-lg overflow-hidden">
                  <Image
                    src="/images/achievements/achievements_3.png"
                    alt="Vehicle Fleet Maintenance Project"
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
                <div className="relative w-full h-56 rounded-lg overflow-hidden">
                  <Image
                    src="/images/achievements/achievements_5.png"
                    alt="Rumble Strips Implementation Project"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="md:col-span-3 md:order-2 order-1">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Rumble Strips Implementation on Major Highways</h3>
                <p className="text-gray-700 mb-4">
                  In partnership with the Department of Highways, we implemented Rumble Strips on over
                  500 kilometers of major highways to enhance driving safety and reduce accidents.
                </p>
                <p className="text-gray-700 mb-4">
                  Our expert team designed and installed durable, weather-resistant Rumble Strips
                  that effectively alert drivers to potential hazards.
                </p>
                <div className="flex items-center text-primary">
                  <span className="font-medium mr-2">Results:</span>
                  <span className="text-gray-700">30% reduction in accident rates in treated areas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">What Our Customers Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <svg className="w-10 h-10 text-secondary mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.032-.52.112-1.082.24-.563.128-1.145.19-1.747.19-.6 0-1.156-.09-1.663-.267-.505-.178-.905-.454-1.207-.83-.302-.373-.453-.876-.453-1.51 0-.548.14-1.05.424-1.508.283-.46.665-.86 1.146-1.19.48-.334 1.017-.602 1.613-.806.595-.204 1.18-.307 1.755-.307.8 0 1.536.15 2.21.448.675.3 1.208.784 1.6 1.45.39.67.585 1.537.585 2.6 0 1.072-.16 2.033-.487 2.883-.283.792-.7 1.496-1.255 2.114-.553.617-1.2 1.09-1.936 1.42-.736.33-1.524.5-2.362.5-.98 0-1.72-.216-2.217-.65-.497-.434-.746-1.016-.746-1.746 0-.45.122-.835.366-1.155.244-.32.614-.48 1.11-.48.453 0 .815.096 1.084.283.27.192.467.466.594.826l.157.492c.05.13.134.252.25.367.12.11.344.17.285.17.38 0 .645-.327 1.012-.983.364-.657.545-1.474.545-2.448zm8.66 0c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.032-.52.112-1.082.24-.563.128-1.145.19-1.747.19-.6 0-1.156-.09-1.663-.267-.504-.178-.905-.454-1.207-.83-.302-.373-.453-.876-.453-1.51 0-.548.14-1.05.424-1.508.283-.46.665-.86 1.146-1.19.48-.334 1.017-.602 1.613-.806.595-.204 1.18-.307 1.755-.307.8 0 1.536.15 2.21.448.675.3 1.21.784 1.6 1.45.39.67.585 1.537.585 2.6 0 1.072-.16 2.033-.487 2.883-.283.792-.7 1.496-1.255 2.114-.553.617-1.2 1.09-1.936 1.42-.736.33-1.524.5-2.362.5-.98 0-1.72-.216-2.217-.65-.497-.434-.746-1.016-.746-1.746 0-.45.122-.835.366-1.155.244-.32.614-.48 1.11-.48.453 0 .815.096 1.084.283.27.192.467.466.594.826l.157.492c.05.13.134.252.25.367.12.11.344.17.285.17.38 0 .645-.327 1.012-.983.364-.657.545-1.474.545-2.448z" />
              </svg>
              <p className="text-gray-700 mb-6 italic">
                &quot;P.P EV Energy has been an invaluable partner in maintaining our emergency response vehicles.
                Their technical expertise and quick turnaround times have greatly enhanced our operational readiness.&quot;
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/images/achievements/achievements_7.png"
                      alt="Department Director"
                      width={48}
                      height={48}
                      className="object-cover rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-primary">Director</p>
                  <p className="text-gray-600 text-sm">Department of Disaster Prevention and Mitigation</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <svg className="w-10 h-10 text-secondary mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.032-.52.112-1.082.24-.563.128-1.145.19-1.747.19-.6 0-1.156-.09-1.663-.267-.505-.178-.905-.454-1.207-.83-.302-.373-.453-.876-.453-1.51 0-.548.14-1.05.424-1.508.283-.46.665-.86 1.146-1.19.48-.334 1.017-.602 1.613-.806.595-.204 1.18-.307 1.755-.307.8 0 1.536.15 2.21.448.675.3 1.208.784 1.6 1.45.39.67.585 1.537.585 2.6 0 1.072-.16 2.033-.487 2.883-.283.792-.7 1.496-1.255 2.114-.553.617-1.2 1.09-1.936 1.42-.736.33-1.524.5-2.362.5-.98 0-1.72-.216-2.217-.65-.497-.434-.746-1.016-.746-1.746 0-.45.122-.835.366-1.155.244-.32.614-.48 1.11-.48.453 0 .815.096 1.084.283.27.192.467.466.594.826l.157.492c.05.13.134.252.25.367.12.11.344.17.285.17.38 0 .645-.327 1.012-.983.364-.657.545-1.474.545-2.448zm8.66 0c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.032-.52.112-1.082.24-.563.128-1.145.19-1.747.19-.6 0-1.156-.09-1.663-.267-.504-.178-.905-.454-1.207-.83-.302-.373-.453-.876-.453-1.51 0-.548.14-1.05.424-1.508.283-.46.665-.86 1.146-1.19.48-.334 1.017-.602 1.613-.806.595-.204 1.18-.307 1.755-.307.8 0 1.536.15 2.21.448.675.3 1.21.784 1.6 1.45.39.67.585 1.537.585 2.6 0 1.072-.16 2.033-.487 2.883-.283.792-.7 1.496-1.255 2.114-.553.617-1.2 1.09-1.936 1.42-.736.33-1.524.5-2.362.5-.98 0-1.72-.216-2.217-.65-.497-.434-.746-1.016-.746-1.746 0-.45.122-.835.366-1.155.244-.32.614-.48 1.11-.48.453 0 .815.096 1.084.283.27.192.467.466.594.826l.157.492c.05.13.134.252.25.367.12.11.344.17.285.17.38 0 .645-.327 1.012-.983.364-.657.545-1.474.545-2.448z" />
              </svg>
              <p className="text-gray-700 mb-6 italic">
                &quot;The Rumble Strips installed by P.P EV Energy have significantly improved safety on our highways.
                Their professional approach and quality workmanship have made them our preferred contractor.&quot;
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/images/achievements/achievements_8.png"
                      alt="Chief Engineer"
                      width={48}
                      height={48}
                      className="object-cover rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-primary">Chief Engineer</p>
                  <p className="text-gray-600 text-sm">Department of Highways</p>
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
