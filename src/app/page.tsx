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
            <div className="md:w-1/2 flex justify-center">
              {/* Placeholder for an image - replace with actual company image */}
              <div className="bg-neutral bg-opacity-20 w-full h-80 rounded-lg flex items-center justify-center">
                <p className="text-lg">Company Image</p>
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
            <p className="text-lg max-w-3xl mx-auto">We provide specialized services focused on government vehicles and infrastructure</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary bg-opacity-10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1h3.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1v-6a1 1 0 00-.293-.707l-3-3A1 1 0 0016 3H3z" />
                </svg>
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
              <div className="bg-primary bg-opacity-10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                </svg>
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
              <div className="bg-primary bg-opacity-10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                </svg>
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
            <p className="text-lg max-w-3xl mx-auto">We proudly serve these government agencies</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Customer 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="mb-4 h-20 flex items-center justify-center">
                {/* Placeholder for customer logo - replace with actual logo */}
                <div className="bg-neutral w-32 h-16 rounded flex items-center justify-center">
                  <p className="text-sm text-gray-500">Logo</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Department of Disaster Prevention and Mitigation</h3>
            </div>

            {/* Customer 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="mb-4 h-20 flex items-center justify-center">
                {/* Placeholder for customer logo - replace with actual logo */}
                <div className="bg-neutral w-32 h-16 rounded flex items-center justify-center">
                  <p className="text-sm text-gray-500">Logo</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Department of Highways</h3>
            </div>

            {/* Customer 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="mb-4 h-20 flex items-center justify-center">
                {/* Placeholder for customer logo - replace with actual logo */}
                <div className="bg-neutral w-32 h-16 rounded flex items-center justify-center">
                  <p className="text-sm text-gray-500">Logo</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Royal Thai Police</h3>
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
