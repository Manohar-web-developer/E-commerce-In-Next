"use client"

import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaPinterest, FaWhatsapp, FaComments } from "react-icons/fa";

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-white">
      {/* Top Section */}
      <div className="border-t border-gray-200 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
            
            {/* Showroom */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Showroom</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p className="font-medium">LIVING SHAPES</p>
                <p>14,15, 8/1, Plot No 12 13, Khasra No 32,</p>
                <p>Tanawada Phanta, Jodhpur, Rajasthan 342013</p>
                <p className="mt-3">
                  <span className="font-medium">Monday – Saturday:</span> <br />
                  10am – 5pm
                </p>
                <a 
                  href="#" 
                  className="inline-block mt-3 font-medium text-gray-900 hover:underline"
                >
                  VIEW MAP
                </a>
              </div>
            </div>

            {/* Help & Support */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Help & Support</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li>
                  <a href="#" className="hover:text-gray-900 hover:underline">
                    Delivery & Return
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 hover:underline">
                    Track Your Order
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 hover:underline">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 hover:underline">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li>
                  <a href="#" className="hover:text-gray-900 hover:underline">
                    All Collection
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 hover:underline">
                    Catalogue
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 hover:underline">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 hover:underline">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>

            {/* Find Us On */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Find Us On</h3>
              <div className="space-y-4">
                {/* Brand Logos */}
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900 text-lg">AJIO LUXE</p>
                  <p className="text-2xl font-bold text-blue-500">amazon</p>
                </div>
                
                {/* Social Icons */}
                <div className="flex gap-4 pt-2">
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    <FaInstagram size={20} />
                  </a>
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    <FaFacebook size={20} />
                  </a>
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    <FaPinterest size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

         
        </div>
      </div>

      {/* Bottom Section - Dark Background */}
      <div className="bg-[#3C1D04] text-white">
        <div className=" w-[90%] mx-auto px-1 md:py-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            
            {/* Logo & Copyright */}
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-light tracking-widest">
                  LIVING
                  <br />
                  <span className="text-xs tracking-[0.2em]">SHAPES</span>
                </h2>
              </div>
              <p className="text-gray-400 text-sm">
                ©2026 Living Shapes. All rights reserved.
              </p>
            </div>

            {/* For Collaboration */}
            <div>
              <h4 className="font-semibold text-white mb-4">
                For Collaboration/Partnership:
              </h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>
                  <a href="mailto:store@livingshapes.com" className="hover:text-white">
                    store@livingshapes.com
                  </a>
                </p>
                <p>
                  <a href="tel:+919664312845" className="hover:text-white">
                    +91 9664312845
                  </a>
                </p>
              </div>
            </div>

            {/* For Project/Bulk Order */}
            <div>
              <h4 className="font-semibold text-white mb-4">
                For Project/Bulk Order:
              </h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>
                  <a href="mailto:info@livingshapes.com" className="hover:text-white">
                    info@livingshapes.com
                  </a>
                </p>
                <p>
                  <a href="mailto:buying@livingshapes.com" className="hover:text-white">
                    buying@livingshapes.com
                  </a>
                </p>
                <p>
                  <a href="tel:+919233587524" className="hover:text-white">
                    +91 9233587524
                  </a>
                </p>
                <p>
                  <a href="tel:+917340345377" className="hover:text-white">
                    +91 7340345377
                  </a>
                </p>
              </div>
            </div>

            {/* For Customer Service */}
            <div>
              <h4 className="font-semibold text-white mb-4">
                For Customer Service:
              </h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>
                  <a href="mailto:cs@livingshapes.com" className="hover:text-white">
                    cs@livingshapes.com
                  </a>
                </p>
                <p>
                  <a href="tel:+919928300706" className="hover:text-white">
                    +91 9928300706
                  </a>
                </p>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </footer>
  );
}

export default Footer;
