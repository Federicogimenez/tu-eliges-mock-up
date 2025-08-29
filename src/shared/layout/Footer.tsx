import React from 'react';
import { useTheme } from '../../hooks/useTheme';

export const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <img
              src={theme === 'light' ? '/uchooseit-white.svg' : '/uchooseit-white.svg'}
              alt="UChooseIt"
              className="h-8 mb-4"
            />
            <p className="text-gray-400 text-sm mb-4">
              Your VIP key to everyday savings. Join thousands of families saving up to 50% on their favorite brands.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📧 support@uchooseit.us</p>
              {/* <p>📞 1-800-UCHOOSE</p> */}
            </div>
          </div>

          {/* Support */}
          <div>
            {/* <h3 className="font-semibold text-lg mb-4">Support</h3> */}
            {/* <div className="space-y-2 text-sm">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Help Center
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                How It Works
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Member Benefits
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Contact Us
              </a>
            </div> */}
          </div>

          {/* Legal */}
          {/* <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Refund Policy
              </a>
            </div>
          </div> */}
        </div>

        {/* Social Media and Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Media */}
            {/* <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-xl">📘</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-xl">🐦</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-xl">📷</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-xl">💼</span>
              </a>
            </div> */}

            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} UChooseIt. All rights reserved.
            </div>
            <div className="text-sm text-gray-400">
              <p>Based in Orlando, FL - USA</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};