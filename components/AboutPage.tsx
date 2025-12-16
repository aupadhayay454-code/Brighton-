
import React from 'react';
import { MapPin, Target, BookOpen, ExternalLink, Award, Globe, Sparkles, Heart, Zap } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Hero Section - Neo Glass Compact */}
      <div className="relative rounded-[2rem] overflow-hidden p-6 md:p-12 text-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 text-white shadow-xl shadow-primary-900/30 border border-white/10 group ring-1 ring-white/20 transform-gpu">
        <div className="absolute top-[-50%] right-[-20%] w-[400px] h-[400px] bg-primary-500/30 rounded-full blur-[80px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-50%] left-[-20%] w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[80px]"></div>
        
        <div className="relative z-10 flex flex-col items-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-widest mb-4 text-primary-100 shadow-lg">
                <Sparkles size={10} className="mr-1.5 text-yellow-300" /> Est. 2013
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight drop-shadow-lg">
                We Build <br className="md:hidden"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-100 to-blue-200">Global Futures</span>
            </h2>
            <p className="text-primary-100/90 text-sm md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
                Bridging the gap between ambitious students and world-class education with transparency, ethics, and personalized expertise.
            </p>
        </div>
      </div>

      {/* Mission & Services Grid - Compact Bento Style */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Mission Card */}
        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-2xl backdrop-saturate-150 rounded-[2rem] p-6 border border-white/60 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-400/10 rounded-full blur-2xl -mr-8 -mt-8 group-hover:bg-green-400/20 transition-all"></div>
            
            <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/40 dark:to-green-800/40 rounded-xl flex items-center justify-center text-green-600 dark:text-green-400 shadow-inner ring-1 ring-white/50 dark:ring-white/10 group-hover:scale-110 transition-transform duration-500">
                    <Target size={24} />
                </div>
                <div className="ml-4 mt-0.5">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">Our Mission</h3>
                    <p className="text-[10px] font-bold text-green-600 dark:text-green-400 uppercase tracking-wider mt-0.5">Vision & Values</p>
                </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-medium text-xs md:text-sm relative z-10">
                To empower students with the right guidance, ensuring their journey from counseling to campus is seamless. We believe in honest advice and personalized pathways for every individual.
            </p>
        </div>

        {/* Services Card */}
        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-2xl backdrop-saturate-150 rounded-[2rem] p-6 border border-white/60 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl -mr-8 -mt-8 group-hover:bg-blue-400/20 transition-all"></div>
            
            <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/40 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-inner ring-1 ring-white/50 dark:ring-white/10 group-hover:scale-110 transition-transform duration-500">
                    <Award size={24} />
                </div>
                <div className="ml-4 mt-0.5">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">Expertise</h3>
                    <p className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mt-0.5">What we do</p>
                </div>
            </div>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-3">
                {[
                  { label: 'Career Counseling', icon: Heart }, 
                  { label: 'Visa Assistance', icon: Zap }, 
                  { label: 'University Selection', icon: BookOpen }, 
                  { label: 'Scholarship Help', icon: Award }, 
                  { label: 'IELTS/PTE Classes', icon: Globe }, 
                  { label: 'Pre-departure', icon: MapPin }
                ].map((service, i) => (
                    <li key={i} className="flex items-center text-xs font-bold text-gray-700 dark:text-gray-200 group/item">
                        <service.icon size={12} className="mr-1.5 text-blue-500 group-hover/item:text-blue-600 transition-colors" />
                        {service.label}
                    </li>
                ))}
            </ul>
        </div>
      </div>

      {/* Locations */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 px-1 flex items-center tracking-tight">
            <Globe size={20} className="mr-2 text-primary-600 dark:text-primary-400" /> Our Offices
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
            {[
            { city: 'Kathmandu', loc: 'Aardhana Complex, Bagbazar', phone: '01-5909351', color: 'from-purple-500 to-indigo-600', link: 'https://www.google.com/maps/search/?api=1&query=27.70525387707616,85.32145334503' },
            { city: 'Chitwan', loc: 'Lions Chowk, Narayanghat', phone: '9846454390', color: 'from-orange-500 to-pink-600' },
            { city: 'Jhapa', loc: 'Damak-6, Jhapa', phone: '9852041632', color: 'from-emerald-500 to-teal-600' }
            ].map((office, i) => (
            <div key={i} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${office.color} rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-[2rem] p-5 h-full border border-white/50 dark:border-gray-600 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                    
                    <div className="flex justify-between items-start mb-4">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${office.color} flex items-center justify-center text-white shadow-lg shadow-current/20`}>
                            <MapPin size={18} />
                        </div>
                        {office.link && (
                            <a href={office.link} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-gray-50 dark:bg-white/10 rounded-full text-gray-400 hover:text-primary-600 dark:hover:text-white transition-colors">
                                <ExternalLink size={14} />
                            </a>
                        )}
                    </div>
                    
                    <h4 className="font-bold text-base text-gray-900 dark:text-white mb-0.5">{office.city}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-3 h-8">{office.loc}</p>
                    <div className="inline-flex items-center bg-gray-50 dark:bg-gray-700/50 px-2.5 py-1 rounded-lg text-[10px] font-bold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5 animate-pulse"></span>
                        {office.phone}
                    </div>
                </div>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
