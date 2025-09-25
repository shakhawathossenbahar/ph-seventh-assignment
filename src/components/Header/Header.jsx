import React from "react";

const Header = () => {
return (
   <header className="bg-white shadow-sm">
      <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex justify-between items-center h-16">
         <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-[#130B2D]">
               CS <span className="font-normal">— Ticket System</span>
            </h1>
         </div>

         <div className="flex gap-5">
            <div className="hidden md:flex space-x-6 text-sm text-gray-700 items-center">
               <a href="#" className="hover:text-purple-600">Home</a>
               <a href="#" className="hover:text-purple-600">FAQ</a>
               <a href="#" className="hover:text-purple-600">Changelog</a>
               <a href="#" className="hover:text-purple-600">Blog</a>
               <a href="#" className="hover:text-purple-600">Download</a>
               <a href="#" className="hover:text-purple-600">Contact</a>
            </div>
            <div>
               <button className="flex items-center gap-1 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-md hover:bg-purple-700">
               <span className="text-lg">＋</span> New Ticket</button>
            </div>
         </div>

         </div>
      </div>
   </header>
);
};

export default Header;
