import React from 'react';

const Footer = () => {
   return (
      <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo + Description */}
        <div className="md:col-span-2">
          <h2 className="text-white text-lg font-bold">CS — Ticket System</h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Our Mission</a></li>
            <li><a href="#" className="hover:text-white">Contact Sales</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Products & Services</a></li>
            <li><a href="#" className="hover:text-white">Customer Stories</a></li>
            <li><a href="#" className="hover:text-white">Download Apps</a></li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-white font-semibold mb-3">Information</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Join Us</a></li>
          </ul>
        </div>

        {/* Social Links */}

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-6"></div>

      {/* Bottom Text */}
      <div className="text-center text-sm text-gray-500 py-4">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
      </footer>
);
}

export default Footer;