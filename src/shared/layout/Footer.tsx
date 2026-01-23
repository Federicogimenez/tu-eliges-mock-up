import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import PrivacyPolicy from './PrivacyPolicy';
import TermsAndConditions from './TermsAndConditions';
import { Link } from 'react-router-dom';
import { getCopyrightText } from '../constants';
import { FaInstagram, FaTiktok, FaFacebook, FaYoutube, FaLinkedin, FaShoppingBag, FaPlane, FaUtensils } from 'react-icons/fa';
import { GiJewelCrown } from 'react-icons/gi';

export const Footer: React.FC = () => {
  const { theme } = useTheme();

  const socials = [
    {
      path: "https://www.instagram.com/uchooseit.us/",
      icon: FaInstagram
    },
    {
      path: "https://www.tiktok.com/@uchooseit.us",
      icon: FaTiktok
    },
    {
      path: "https://www.facebook.com/Uchooseit.us/",
      icon: FaFacebook
    },
    {
      path: "https://youtube.com/@uchooseit?si=Xx9-EpEcR8iK0Gks",
      icon: FaYoutube
    },
    {
      path: "https://www.linkedin.com/company/uchooseit-us",
      icon: FaLinkedin
    },
  ]

  const navigationLinks = [
    {
      label: "Shop",
      icon: FaShoppingBag,
      path: "/shop",
      hoverColor: "hover:text-purple-shop"
    },
    {
      label: "Travel",
      icon: FaPlane,
      path: "/travel",
      hoverColor: "hover:text-blue-travel"
    },
    {
      label: "Dining",
      icon: FaUtensils,
      path: "/dining",
      hoverColor: "hover:text-yellow-dining"
    },
    {
      label: "Entertainment",
      icon: GiJewelCrown,
      path: "/entertainment",
      hoverColor: "hover:text-pink-entertainment"
    },
  ]

  return (
    <footer className="relative py-12 px-4 bg-white dark:bg-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <img
              src={theme === 'light' ? '/uchooseit-black.svg' : '/uchooseit-white.svg'}
              alt="UChooseIt"
              className="h-8 mb-4"
            />
            <p className=" text-sm mb-4">
              Your VIP key to everyday savings.
            </p>
            <div className='flex justify-start items-center gap-x-2'>
              {
                socials.map(({ path, icon: Icon }, i) => {
                  return <a href={path} target='_blank' key={i} className='text-gray-700 dark:text-gray-300 hover:text-blue-uchooseit transition-colors'>
                    <Icon className='w-6 h-6' />
                  </a>
                })
              }
            </div>
          </div>

{/* Navigate */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigate</h3>
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-400">

              {
                navigationLinks.map(({ label, path, icon: Icon, hoverColor }, i) => {
                  return <Link to={path} key={i} className={`flex justify-start items-center transition-all hover:-translate-y-0.5 ${hoverColor}`}>
                            {label}
                            <Icon className='w-4 h-4 ml-3' />
                        </Link>
                })}
              <Link to={'/product'} className='flex justify-start items-center text-gray-700 hover:text-neutral-800 dark:text-gray-400 dark:hover:text-neutral-100 w-fit'>
                {/* <img src={} alt="entertainment" className='w-5 mr-3' /> */}
                Learn More
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-gray-700 *:hover:text-neutral-800 dark:text-gray-400 *:dark:hover:text-neutral-100 *:block *:w-fit">
              <a href='mailto:support@uchooseit.us' >Email: support@uchooseit.us</a>
              <a href='https://uchooseitus.recurly.com/account/create_account' target='_target'>Manage Membership</a>
            </div>
          </div>
          

          {/* Legal */}
          <div>
            <h3 className="font-semibold  text-lg mb-4">Legals</h3>
            <div className="space-y-2 text-sm text-gray-700 *:hover:text-neutral-800 dark:text-gray-400 *:dark:hover:text-neutral-100 *:block *:w-fit">
              <div>
                <PrivacyPolicy />
              </div>
              <div>
                <TermsAndConditions />
              </div>
            </div>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="border-t border-gray-800 pt-8 text-gray-700 dark:text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center ">
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
            <div className="text-sm ">
              {getCopyrightText()}
            </div>
            <div className="text-sm ">
              <p>Based in Orlando, FL - USA</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};