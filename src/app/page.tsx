import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative text-primary pt-24 pb-16 md:pb-24 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/background.jpg"
            alt="Background"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0  bg-opacity-70"></div>
        </div>

        <div className="container mx-auto px-0 relative z-10">
          <div className="flex flex-col items-center justify-center">
            {/* Centered Logo */}
            <div className="w-full max-w-5xl mx-auto flex justify-center">
              <div className="relative w-full aspect-[3/1.5] max-w-5xl">
                <Image
                  src="/images/logo.png"
                  alt="P.P EV Energy Logo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Company Name */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-primary">
              P.P EV Energy Co., Ltd.
            </h1>

            {/* Company Description */}
            <p className="text-lg md:text-xl text-center max-w-2xl mb-8 text-primary">
              Providing quality services and distributing vehicles for government agencies with a focus on professionalism, responsibility, and safety.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                className="bg-secondary text-white px-6 py-3 rounded-md font-medium transition-colors hover:bg-opacity-90 text-center shadow-md"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="bg-white border-2 border-white text-primary px-6 py-3 rounded-md font-medium transition-colors hover:bg-opacity-90 text-center shadow-md"
              >
                Contact Us
              </Link>
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
                  src="/images/achievements/achievements_1.png"
                  alt="Government Vehicle Maintenance"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Government Vehicle Maintenance</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive maintenance services for all types of government vehicles by our team of skilled technicians.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 relative w-full h-80 overflow-hidden">
                <Image
                  src="/images/achievements/achievements_6.png"
                  alt="Rumble Strips on Motorways"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Rumble Strips on Motorways</h3>
              <p className="text-gray-600 mb-4">
                Installation of speed-reducing strips on intercity expressways to increase driving safety.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 relative w-full h-80 overflow-hidden">
                <Image
                  src="/images/achievements/achievements_13.png"
                  alt="Military Service and Support"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Service and Support for the Military</h3>
              <p className="text-gray-600 mb-4">
                Specialized maintenance, repair, and vehicle solutions tailored to meet the unique requirements of military operations.
              </p>
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
                  <h3 className="text-xl font-semibold mb-2 text-primary">Bangkok Metropolitan Administration</h3>
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
