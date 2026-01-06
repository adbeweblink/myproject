
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => (
  <section className="h-screen py-10 px-6 md:px-20 bg-black flex flex-col justify-center border-t border-white/5" id="contact">
    <div className="w-full mx-auto max-w-4xl">
      <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
        Marketing for Success
      </h2>
      
      <div className="bg-gray-900/50 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="bg-white p-2 rounded-xl shadow-lg shrink-0 group relative overflow-hidden">
          {/* QR Code generator using mailto link */}
          <img 
            src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=mailto:Mark.tsao@weblink.com.tw`} 
            alt="Contact QR" 
            className="w-28 h-28 md:w-36 md:h-36 relative z-10"
          />
          <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
        </div>
        
        <div className="text-center md:text-left flex-1 space-y-3">
          <div>
            <h3 className="text-2xl font-black text-white mb-1">
              Mark Tsao <span className="text-base text-gray-400 font-medium ml-2">專案經理</span>
            </h3>
            <p className="text-blue-400 font-bold tracking-wide text-sm">Weblink Project Manager</p>
            <p className="text-gray-500 text-xs mt-1">
              綜理 Adobe 產品線 技術 / 行銷 / 社群 統籌
            </p>
          </div>
          
          <div className="space-y-2 text-gray-400 text-sm pt-2">
            <p className="flex items-center justify-center md:justify-start gap-3">
              <MapPin size={16} /> 展碁國際股份有限公司
            </p>
            <p className="flex items-center justify-center md:justify-start gap-3">
              <Phone size={16} /> (02) 2371-6000 # 739
            </p>
            <p className="flex items-center justify-center md:justify-start gap-3">
              <Mail size={16} /> 
              <a href="mailto:Mark.tsao@weblink.com.tw" className="hover:text-white transition border-b border-white/10 pb-0.5">
                Mark.tsao@weblink.com.tw
              </a>
            </p>
          </div>
          
          <div className="pt-4 flex justify-center md:justify-start">
            <span className="text-[9px] text-gray-600 uppercase tracking-[0.2em] bg-white/5 px-3 py-1 rounded-full border border-white/5">
              Scan QR to Send Email
            </span>
          </div>
        </div>
      </div>
      
      <p className="text-center text-gray-600 text-[10px] mt-10">
        © 2026 Weblink International Inc. All Rights Reserved. | Adobe Authorized Distributor since 2021
      </p>
    </div>
  </section>
);
