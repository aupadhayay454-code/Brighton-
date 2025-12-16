
import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Globe, ExternalLink, MessageCircle, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-800 text-[10px] font-bold text-primary-700 dark:text-primary-300 mb-1">
             <MessageCircle size={10} className="mr-1.5" /> We're here to help
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight drop-shadow-sm">Get in Touch</h2>
        <p className="text-gray-500 dark:text-gray-400 font-medium max-w-md mx-auto text-sm md:text-lg">
            Visit us or drop a message.
        </p>
      </div>
      
      <div className="grid md:grid-cols-12 gap-4 lg:h-[500px]">
        
        {/* Map Section - Glass Overlay Style */}
        <div className="md:col-span-7 lg:col-span-8 relative rounded-[2rem] overflow-hidden shadow-xl border border-white/20 dark:border-gray-600 group min-h-[250px] md:min-h-[400px]">
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3532.879528871483!2d85.32145334503!3d27.70525387707616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDQyJzE4LjkiTiA4NcKwMTknMTcuMyJF!5e0!3m2!1sen!2snp!4v1710000000000!5m2!1sen!2snp" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                className="absolute inset-0 w-full h-full grayscale-[50%] contrast-[1.1] group-hover:grayscale-0 transition-all duration-700 opacity-90 hover:opacity-100"
            ></iframe>
            
            {/* Floating Location Card - Compact */}
            <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl p-4 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] border border-white/50 dark:border-gray-600 max-w-[250px] animate-slideUp">
                <div className="flex items-start space-x-3">
                    <div className="bg-primary-600 p-2.5 rounded-xl text-white shadow-lg shadow-primary-600/30">
                        <MapPin size={18} />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 dark:text-white text-sm">Kathmandu HQ</h4>
                        <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5 font-medium">Aardhana Complex, Bagbazar</p>
                        <a 
                            href="https://www.google.com/maps/search/?api=1&query=27.70525387707616,85.32145334503" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center mt-2 text-[9px] font-bold bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/30 text-gray-700 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-400 transition-colors"
                        >
                            Get Directions <ExternalLink size={10} className="ml-1"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        {/* Contact Details Column - Neo-Glass Cards */}
        <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-3 h-full">
            
            {/* Phone Card */}
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-2xl backdrop-saturate-150 p-5 rounded-[1.5rem] shadow-md border border-white/50 dark:border-gray-700 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 group hover:scale-[1.02]">
                <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3 group-hover:rotate-12 transition-transform duration-300 shadow-inner">
                        <Phone size={18} />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900 dark:text-white text-base">Call Us</h3>
                        <p className="text-[9px] font-bold text-blue-500 uppercase tracking-wider">Direct Line</p>
                    </div>
                </div>
                <div className="space-y-2 pl-1">
                    <a href="tel:015909351" className="flex justify-between items-center text-xs font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-1.5 hover:bg-white/50 dark:hover:bg-gray-700/50 rounded-lg">
                        <span>Kathmandu</span>
                        <span className="font-bold bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded-md text-[10px]">01-5909351</span>
                    </a>
                    <a href="tel:9846454390" className="flex justify-between items-center text-xs font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-1.5 hover:bg-white/50 dark:hover:bg-gray-700/50 rounded-lg">
                        <span>Chitwan</span>
                        <span className="font-bold bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded-md text-[10px]">9846454390</span>
                    </a>
                     <a href="tel:9852041632" className="flex justify-between items-center text-xs font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-1.5 hover:bg-white/50 dark:hover:bg-gray-700/50 rounded-lg">
                        <span>Jhapa</span>
                        <span className="font-bold bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded-md text-[10px]">9852041632</span>
                    </a>
                </div>
            </div>

            {/* Email & Hours Grid */}
            <div className="grid grid-cols-2 gap-3 flex-grow">
                 {/* Email */}
                <a href="mailto:info@brightoncareer.edu.np" className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-2xl p-4 rounded-[1.5rem] shadow-md border border-white/50 dark:border-gray-700 flex flex-col justify-center items-center text-center hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all hover:-translate-y-1 group">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-2 shadow-inner group-hover:scale-110 transition-transform">
                        <Mail size={18} />
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-xs">Email Us</h3>
                    <p className="text-[9px] text-gray-500 mt-0.5">Click to send</p>
                </a>

                 {/* Hours */}
                <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-2xl p-4 rounded-[1.5rem] shadow-md border border-white/50 dark:border-gray-700 flex flex-col justify-center items-center text-center">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 mb-2 shadow-inner">
                        <Clock size={18} />
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-xs">10 AM - 6 PM</h3>
                    <p className="text-[9px] text-gray-500 mt-0.5">Sun - Fri</p>
                </div>
            </div>

            {/* Socials - Vivid Gradients */}
            <div className="flex gap-2.5 mt-auto">
                <a href="https://www.facebook.com/brightoncareer" target="_blank" rel="noopener noreferrer" className="flex-1 bg-gradient-to-br from-[#1877F2] to-[#0056b3] text-white py-3 rounded-xl shadow-lg shadow-blue-500/30 flex items-center justify-center hover:scale-105 transition-transform active:scale-95 border border-white/10">
                    <Facebook size={18} />
                </a>
                <a href="https://www.instagram.com/brightoncareer" target="_blank" rel="noopener noreferrer" className="flex-1 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white py-3 rounded-xl shadow-lg shadow-pink-500/30 flex items-center justify-center hover:scale-105 transition-transform active:scale-95 border border-white/10">
                    <Instagram size={18} />
                </a>
                <a href="https://www.brightoncareer.edu.np" target="_blank" rel="noopener noreferrer" className="flex-1 bg-gradient-to-br from-gray-800 to-black text-white py-3 rounded-xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform active:scale-95 border border-white/10">
                    <Globe size={18} />
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
