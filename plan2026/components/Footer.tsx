
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => (
  <section className="py-20 px-6 md:px-20 bg-black" id="contact">
    <div className="w-full mx-auto">
      <h2 className="text-3xl md:text-5xl font-black mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
        Marketing for Success
      </h2>
      
      <div className="bg-gray-900/50 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center gap-12">
        <div className="bg-white p-3 rounded-xl shadow-lg shrink-0 group relative overflow-hidden">
          {/* QR Code generator using mailto link */}
          <img 
            src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=mailto:Mark.tsao@weblink.com.tw`} 
            alt="Contact QR" 
            className="w-32 h-32 md:w-40 md:h-40 relative z-10"
          />
          <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
        </div>
        
        <div className="text-center md:text-left flex-1 space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Mark Tsao <span className="text-lg text-gray-400 font-medium ml-2">專案經理</span>
            </h3>
            <p className="text-blue-400 font-bold tracking-wide">Weblink Project Manager</p>
            <p className="text-gray-500 text-sm mt-1">
              綜理 Adobe 產品線 技術 / 行銷 / 社群 統籌
            </p>
          </div>
          
          <div className="space-y-2 text-gray-400 text-sm md:text-base pt-2">
            <p className="flex items-center justify-center md:justify-start gap-3">
              <MapPin size={18} /> 展碁國際股份有限公司
            </p>
            <p className="flex items-center justify-center md:justify-start gap-3">
              <Phone size={18} /> (02) 2371-6000 # 739
            </p>
            <p className="flex items-center justify-center md:justify-start gap-3">
              <Mail size={18} /> 
              <a href="mailto:Mark.tsao@weblink.com.tw" className="hover:text-white transition border-b border-white/10 pb-0.5">
                Mark.tsao@weblink.com.tw
              </a>
            </p>
          </div>
          
          <div className="pt-4 flex justify-center md:justify-start">
            <span className="text-[10px] text-gray-600 uppercase tracking-[0.2em] bg-white/5 px-3 py-1 rounded-full border border-white/5">
              Scan QR to Send Email
            </span>
          </div>
        </div>
      </div>
      
      <p className="text-center text-gray-600 text-xs mt-12">
        © 2026 Weblink International Inc. All Rights Reserved. | Adobe Authorized Distributor since 2021
      </p>
    </div>
  </section>
);
