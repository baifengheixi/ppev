'use client';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">P.P EV Energy Co., Ltd.</h3>
            <p className="mb-4">
              Providing services and distributing vehicles for government agencies with a focus on professionalism, responsibility, and safety.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/customers" className="hover:text-secondary transition-colors">
                  Customers
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="relative w-5 h-5 mr-2 mt-1">
                  <Image 
                    src="/window.svg" 
                    alt="Address Icon" 
                    width={20}
                    height={20}
                  />
                </div>
                <span>Thailand</span>
              </li>
              <li className="flex items-start">
                <div className="relative w-5 h-5 mr-2 mt-1">
                  <Image 
                    src="/file.svg" 
                    alt="Email Icon" 
                    width={20}
                    height={20}
                  />
                </div>
                <span>info@ppev.co.th</span>
              </li>
              <li className="flex items-start">
                <div className="relative w-5 h-5 mr-2 mt-1">
                  <Image 
                    src="/globe.svg" 
                    alt="Phone Icon" 
                    width={20}
                    height={20}
                  />
                </div>
                <span>+66 XX XXX XXXX</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>&copy; {currentYear} P.P EV Energy Co., Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
