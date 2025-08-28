import React from "react";
import Button from "../Button";
import { FaInstagram, FaFacebookF, FaApple } from "react-icons/fa";
import { SiGoogleplay } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <footer className="flex flex-row flex-wrap justify-around p-10 max-w-8xl mx-auto gap-x-10 gap-y-8">
        {/* Download Our App */}
        <div className="min-w-[200px]">
          <h1 className="text-xl font-bold mb-4">Download Our App</h1>
          <div className="text-2xl font-bold flex items-center mb-8">
            <img src="/image/popcorn.jpg" alt="Popcorn" className="w-10 mr-2" />
            M<span className="text-yellow-500">oo</span>vie
          </div>
          <div className="flex gap-5">
            <Button
              text=""
              onClick={() => {}}
              variant="outlined"
              classname="flex items-center gap-3 bg-gray-300 h-12 rounded-3xl px-4 text-black text-sm"
            >
              <FaApple className="text-3xl" />
              <div>
                Download on the
                <p className="text-lg font-semibold">App Store</p>
              </div>
            </Button>
            <Button
              text=""
              onClick={() => {}}
              variant="outlined"
              classname="flex items-center gap-3 bg-gray-300 h-12 rounded-3xl px-4 text-black text-sm"
            >
              <SiGoogleplay className="text-3xl" />
              <div>
                Get it on the
                <p className="text-lg font-semibold">Google Play</p>
              </div>
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <div className="min-w-[150px]">
          <h1 className="text-xl font-bold mb-4">Navigation</h1>
          <p className="cursor-pointer hover:text-yellow-500">Home</p>
          <p className="cursor-pointer hover:text-yellow-500">My list</p>
          <p className="cursor-pointer hover:text-yellow-500">About Us</p>
        </div>

        {/* Legal */}
        <div className="min-w-[150px]">
          <h1 className="text-xl font-bold mb-4">Legal</h1>
          <p className="cursor-pointer hover:text-yellow-500">General Info</p>
          <p className="cursor-pointer hover:text-yellow-500">Privacy Policy</p>
          <p className="cursor-pointer hover:text-yellow-500">Terms of Service</p>
        </div>

        {/* Contact Us */}
        <div className="min-w-[200px]">
          <h1 className="text-xl font-bold mb-4">Contact Us:</h1>
          <p>support@egymovies.com</p>
          <p>Tel: +201045963322</p>
          <p className="mt-2">Or by using:</p>
          <div className="flex gap-3 mt-2">
            <FaFacebookF className="border p-2 rounded-2xl text-3xl cursor-pointer hover:text-blue-600" />
            <FaInstagram className="border p-2 rounded-2xl text-3xl cursor-pointer hover:text-pink-500" />
            {/* Add other icons if needed */}
          </div>
        </div>

        {/* Share Website Via */}
        <div className="min-w-[200px]">
          <h1 className="text-xl font-bold mb-4">Share Website Via:</h1>
          <div className="flex flex-col gap-4 text-lg">
            <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600">
              <FaFacebookF className="border p-1 rounded-2xl text-3xl" /> Facebook
            </div>
            <div className="flex items-center gap-3 cursor-pointer hover:text-pink-500">
              <FaInstagram className="border p-1 rounded-2xl text-3xl" /> Instagram
            </div>
          </div>
        </div>
      </footer>

      <div className="text-center border-t border-gray-700 py-5 mt-10 max-w-7xl mx-auto">
        <p>&copy; {new Date().getFullYear()} Movies. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
