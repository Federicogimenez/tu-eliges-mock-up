import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import PrivacyPolicy from './PrivacyPolicy';
import TermsAndConditions from './TermsAndConditions';
import { Link } from 'react-router-dom';

import icon_shop from '/icons/category/shop.png'
import icon_travel from '/icons/category/travel.png'
import icon_dining from '/icons/category/dining.png'
import icon_entertainment from '/icons/category/entertainment.png'

import icon_ig from '/icons/socials/ig.png'
import icon_tiktok from '/icons/socials/tiktok.png'
import icon_facebook from '/icons/socials/facebook.png'
import icon_youtube from '/icons/socials/youtube.png'
import icon_linkedin from '/icons/socials/linkedin.png'

export const Footer: React.FC = () => {
  const { theme } = useTheme();

  const socials = [
    {
      path: "https://www.instagram.com/uchooseit.us/" ,
      img: icon_ig
    },
    {
      path: "https://www.tiktok.com/@uchooseit.us" ,
      img: icon_tiktok
    },
    {
      path: "https://www.facebook.com/Uchooseit.us/",
      img: icon_facebook
    },
    {
      path: "https://youtube.com/@uchooseit?si=Xx9-EpEcR8iK0Gks",
      img: icon_youtube
    },
    {
      path: "https://www.linkedin.com/company/uchooseit-us",
      img: icon_linkedin
    },
  ]

  const navigationLinks = [
    {
      label: "Shop",
      img: icon_shop,
      path: "/shop"
    },
    {
      label: "Travel",
      img: icon_travel,
      path: "/travel"
    },
    {
      label: "Dining",
      img: icon_dining,
      path: "/dining"
    },
    {
      label: "Entertainment",
      img: icon_entertainment,
      path: "/entertainment"
    },
  ]

  return (
    <footer className=" py-12 px-4">
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
                socials.map(( { path, img }, i )=>{
                  return <a href={path} target='_blank' key={i}>
                    <img src={img} alt="logo" className='w-7 rounded-lg' />
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
                navigationLinks.map(( { label, path, img  }, i )=>{
                  return <Link to={path} key={i} className='flex justify-start items-center transition-all hover:-translate-y-0.5'>
                            {label}
                            <img src={img} alt="shop" className='w-5 ml-3' />
                        </Link>
                })}
              <Link to={'/product'} className='flex justify-start items-center'>
                {/* <img src={} alt="entertainment" className='w-5 mr-3' /> */}
                Learn More
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-400 *:block">
              <a href='mailto:support@uchooseit.us' >Email: support@uchooseit.us</a>
              <a href='https://uchooseitus.recurly.com/account/create_account' target='_target'>Manage Membership</a>
            </div>
          </div>
          

          {/* Legal */}
          <div>
            <h3 className="font-semibold  text-lg mb-4">Legals</h3>
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-400">
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
              © {new Date().getFullYear()} UChooseIt. All rights reserved.
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