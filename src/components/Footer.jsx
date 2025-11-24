// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   FaLinkedin,
//   FaInstagram,
//   FaFacebook,
//   FaReddit,
//   FaTwitter,
//   FaEnvelope,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
//   FaWhatsapp,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-white text-black pt-16">
//       CTA Section
//       <div className="text-center px-6 pb-12 relative z-10">
//         <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//           Let’s Build Your AI System
//         </h2>
//         <p className="text-gray-700 text-lg mb-6">
//           Ready to automate and scale? Just Say It.
//         </p>
//         <Link to="/contact">
//           <button className="relative px-6 py-3 bg-gradient-to-br from-black to-[#E32225] text-white font-semibold rounded-lg transition duration-300 shadow-lg hover:shadow-red-500/50">
//             Contact Us
//             <span className="absolute inset-0 bg-gradient-to-br from-black to-[#E32225] opacity-10 blur-xl animate-pulse -z-10 rounded-lg" />
//           </button>
//         </Link>
//       </div>

//       {/* Divider Glow */}
//       <div className="w-full h-[2px] bg-gradient-to-r from-black via-[#E32225] to-black blur-sm opacity-60" />

//       {/* Footer Content */}
//       <div className="px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto text-sm">
//         {/* Logo + Contact Info */}
//         <div className="space-y-4">
//           <Link to="/">
//             <img
//               src="/Full Logo02.png"
//               alt="Newlex Designs Logo"
//               className="h-[34px] w-auto"
//             />
//           </Link>
//           <p className="text-gray-600">Your AI Automation Partner</p>
//           <div className="flex items-start space-x-2 text-gray-600">
//             <FaMapMarkerAlt className="mt-1 text-yellow-400" />
//             <span>India, New Delhi</span>
//           </div>
//           <div className="flex items-start space-x-2 text-gray-600">
//             <FaEnvelope className="mt-1 text-yellow-400" />
//             <span>support@newlexdesigns.com</span>
//           </div>
//           <div className="flex items-start space-x-2 text-gray-600">
//             <FaPhoneAlt className="mt-1 text-yellow-400" />
//             <span>+91 7017288428</span>
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h4 className="text-black font-semibold mb-3">Quick Links</h4>
//           <ul className="space-y-2 text-gray-600">
//             <li>
//               <Link to="/" className="hover:text-[#E32225] transition">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/services" className="hover:text-[#E32225] transition">
//                 Services
//               </Link>
//             </li>
//             <li>
//               <Link to="/pricing" className="hover:text-[#E32225] transition">
//                 Pricing
//               </Link>
//             </li>
//             <li>
//               <Link to="/about" className="hover:text-[#E32225] transition">
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link to="/contact" className="hover:text-[#E32225] transition">
//                 Contact
//               </Link>
//             </li>
//             <li>
//               <Link to="/blog" className="hover:text-[#E32225] transition">
//                 Blog
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Legal Links */}
//         <div>
//           <h4 className="text-black font-semibold mb-3">Company</h4>
//           <ul className="space-y-2 text-gray-600">
//             <li>
//               <Link to="/why-us" className="hover:text-[#E32225] transition">
//                 Why Us
//               </Link>
//             </li>
//             <li>
//               <Link to="/privacy-policy" className="hover:text-[#E32225] transition">
//                 Privacy Policy
//               </Link>
//             </li>
//             <li>
//               <Link to="/terms-and-conditions" className="hover:text-[#E32225] transition">
//                 Terms & Conditions
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Socials */}
//         <div>
//           <h4 className="text-black font-semibold mb-3">Connect With Us</h4>
//           <div className="flex flex-wrap space-x-4 text-xl text-yellow-400">
//             <a
//               href="https://www.linkedin.com/company/newlexdesigns/"
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-[#E32225] transition"
//             >
//               <FaLinkedin />
//             </a>
//             <a
//               href="https://www.instagram.com/newlexdesigns/"
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-[#E32225] transition"
//             >
//               <FaInstagram />
//             </a>
//             <a
//               href="https://www.facebook.com/newlexdesigns"
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-[#E32225] transition"
//             >
//               <FaFacebook />
//             </a>
//             <a
//               href="https://www.reddit.com/user/newlexdesigns/"
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-[#E32225] transition"
//             >
//               <FaReddit />
//             </a>
//             <a
//               href="https://x.com/newlexdesigns"
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-[#E32225] transition"
//             >
//               <FaTwitter />
//             </a>
//             <a
//               href="http://wa.me/+917017288428"
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-green-400 transition"
//             >
//               <FaWhatsapp />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className="text-center text-gray-500 text-sm pb-6">
//         © {new Date().getFullYear()} NewlexDesigns. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaPinterest,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

// ✅ Import LetsTalk component
import LetsTalk from "./LetsTalk";
import InstagramSection from "./InstagramSection";

const Footer = () => {
  return (
    <footer className="bg-white text-black pt-16">
      {/* Replaced old CTA with LetsTalk */}
      <LetsTalk />
      <InstagramSection/>

      {/* Divider Glow */}
      <div className="w-full h-[2px] bg-gradient-to-r from-black via-[#E32225] to-black blur-sm opacity-60" />

      {/* Footer Content */}
      <div className="px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto text-sm">
        {/* Logo + Contact Info */}
        <div className="space-y-4">
          <Link to="/">
            <img
              src="/Full Logo02.png"
              alt="Newlex Designs Logo"
              className="h-[34px] w-auto"
            />
          </Link>
          <p className="text-gray-600">Unseen to unforgetable</p>
          <div className="flex items-start space-x-2 text-gray-600">
            <FaMapMarkerAlt className="mt-1 text-yellow-400" />
            <span>India, New Delhi</span>
          </div>
          <div className="flex items-start space-x-2 text-gray-600">
            <FaEnvelope className="mt-1 text-yellow-400" />
            <span>support@newlexdesigns.com</span>
          </div>
          <div className="flex items-start space-x-2 text-gray-600">
            <FaPhoneAlt className="mt-1 text-yellow-400" />
            <span>+91 7017288428</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-black font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="/" className="hover:text-[#E32225] transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#E32225] transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-[#E32225] transition">
                Work
              </Link>
            </li>
            {/* <li>
              <Link to="/pricing" className="hover:text-[#E32225] transition">
                Pricing
              </Link>
            </li> */}
            <li>
              <Link to="/about" className="hover:text-[#E32225] transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#E32225] transition">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-[#E32225] transition">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h4 className="text-black font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="/why-us" className="hover:text-[#E32225] transition">
                Why Us
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-[#E32225] transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms-and-conditions"
                className="hover:text-[#E32225] transition"
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-black font-semibold mb-3">Connect With Us</h4>
          <div className="flex flex-wrap space-x-4 text-xl text-yellow-400">
            <a
              href="https://www.linkedin.com/company/newlexdesigns/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#E32225] transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/newlexdesigns/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#E32225] transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/newlexdesigns"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#E32225] transition"
            >
              <FaFacebook />
            </a>
            
            <a
              href="https://in.pinterest.com/Newlexdesigns/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#E32225] transition"
            >
              <FaPinterest />
            </a>
            <a
              href="https://x.com/newlexdesigns"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#E32225] transition"
            >
              <FaTwitter />
            </a>
            <a
              href="http://wa.me/+917017288428"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm pb-6">
        © {new Date().getFullYear()} NewlexDesigns. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

