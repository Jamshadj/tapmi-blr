// src/app/components/footer/Footer.tsx

import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F8F8F8] pt-12 pb-6 border-t border-gray-200">
      {/* Logo + Address Block */}
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex justify-center  items-center">
        

          <Image
            src="/tapmiLogo-Colour2.png"
            alt="TAPMI Logo"
            width={280}
            height={60}
            className="object-contain"
          />

      
        </div>

        <p className="text-[13px] text-gray-800 mt-6 leading-relaxed">
          Manipal Academy of Higher Education,<br />
          Thanisandra Main Rd, Chokkanahalli, Bengaluru, Karnataka 560064
        </p>

        <div className="w-full border-t border-gray-300 mb-6 mt-12"></div>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-">
<div className=" flex flex-col md:flex-row justify-between items-center  text-gray-900 ">
          <div className="flex items-center gap-2 text-xs">
            <Phone className="w-4 h-4" />
            <p className="font-semibold">Abhishek Singh:</p>
            <p className="text-gray-700">+91 917 955 5441</p>
          </div>

          <div className="flex items-center gap-2 text-xs mx-4 md:mx-8">
            <Phone className="w-4 h-4" />
            <p className="font-semibold">Jhonson P:</p>
            <p className="text-gray-700">+91 960 601 3114</p>
          </div>

          <div className="flex items-center gap-2 text-xs mx-4 md:mx-8 ">
            <Mail className="w-4 h-4" />
            <p className="text-gray-700">engage.tapmiblr@manipal.edu</p>
          </div>
</div>
  <div className="flex justify-center items-center gap-6 ">
          <a><FaInstagram className="w-6 h-6 text-gray-800 hover:text-black" /></a>
          <a><FaFacebookF className="w-6 h-6 text-gray-800 hover:text-black" /></a>
          <a><FaLinkedinIn className="w-6 h-6 text-gray-800 hover:text-black" /></a>
          <a><FaYoutube className="w-6 h-6 text-gray-800 hover:text-black" /></a>
        </div>
    
        </div>

        {/* Social Icons */}
      
      </div>
    </footer>
  );
}
