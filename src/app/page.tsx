import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Your Trusted Partner for Government Vehicles
              </h1>
              <p className="text-xl mb-8">
                P.P EV Energy Co., Ltd. provides quality services and distributes vehicles
                for government agencies with a focus on professionalism, responsibility, and safety.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="bg-secondary text-white px-6 py-3 rounded-md font-medium transition-colors hover:bg-opacity-90 text-center"
                >
                  Learn More
                </Link>
                <Link
                  href="/contact"
                  className="bg-white text-primary px-6 py-3 rounded-md font-medium transition-colors hover:bg-opacity-90 text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 md:flex justify-center hidden">
              <div className="relative w-full h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/company_area/company_area_1.png"
                  alt="P.P EV Energy Company"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-lg max-w-3xl mx-auto text-primary">We provide specialized services focused on government vehicles and infrastructure</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 relative w-full h-80 overflow-hidden">
                <Image
                  src="/images/product_and_services/product_and_service_1.png"
                  alt="Government Vehicle Maintenance"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Government Vehicle Maintenance</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive maintenance services for all types of government vehicles by our team of skilled technicians.
              </p>
              <Link href="/services" className="text-secondary font-medium hover:underline inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 relative w-full h-80 overflow-hidden">
                <Image
                  src="/images/product_and_services/product_and_service_3.png"
                  alt="Rumble Strips on Motorways"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Rumble Strips on Motorways</h3>
              <p className="text-gray-600 mb-4">
                Installation of speed-reducing strips on intercity expressways to increase driving safety.
              </p>
              <Link href="/services" className="text-secondary font-medium hover:underline inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 relative w-full h-80 overflow-hidden">
                <Image
                  src="/images/product_and_services/product_and_service_4.png"
                  alt="Vehicle Distribution"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Vehicle Distribution</h3>
              <p className="text-gray-600 mb-4">
                Distributing high-quality vehicles to various government agencies to meet their specific needs.
              </p>
              <Link href="/services" className="text-secondary font-medium hover:underline inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Customers Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Customers</h2>
            <p className="text-lg max-w-3xl mx-auto text-primary">We proudly serve these government agencies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Customer 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col">
                <div className="mb-4 flex justify-center">
                  <Image
                    src="/images/our_customers/bangkok_company.png"
                    alt="Department of Disaster Prevention and Mitigation Logo"
                    width={128}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2 text-primary">Department of Disaster Prevention and Mitigation</h3>
                </div>
              </div>
            </div>

            {/* Customer 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col">
                <div className="mb-4 flex justify-center">
                  <Image
                    src="/images/our_customers/highways_company.png"
                    alt="Department of Highways Logo"
                    width={128}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2 text-primary">Department of Highways</h3>
                </div>
              </div>
            </div>

            {/* Customer 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col">
                <div className="mb-4 flex justify-center">
                  <Image
                    src="/images/our_customers/royal_thai_police_company.png"
                    alt="Royal Thai Police Logo"
                    width={128}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2 text-primary">Royal Thai Police</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/customers"
              className="bg-primary text-white px-6 py-3 rounded-md font-medium transition-colors hover:bg-opacity-90 inline-block"
            >
              View All Customers
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our services and how we can help your agency.
          </p>
          <Link
            href="/contact"
            className="bg-white text-secondary px-8 py-3 rounded-md font-medium transition-colors hover:bg-gray-100 inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
