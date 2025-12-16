
import React, { useState, useEffect } from 'react';
import { ViewState, Testimonial } from '../types';
import { ArrowRight, Globe, Award, CalendarCheck, ShieldCheck, Users, Sparkles, Headphones, FileText, GraduationCap } from 'lucide-react';

interface Props {
  setView: (view: ViewState) => void;
  density?: 'comfortable' | 'compact';
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Aarav Shrestha',
    university: 'University of Sydney',
    country: 'Australia',
    quote: 'Brighton helped me secure a 50% scholarship!',
    image: 'https://ui-avatars.com/api/?name=Aarav+Shrestha&background=059669&color=fff'
  },
  {
    id: '2',
    name: 'Priya Karki',
    university: 'Seneca College',
    country: 'Canada',
    quote: 'Got my visa in just 15 days after applying.',
    image: 'https://ui-avatars.com/api/?name=Priya+Karki&background=0d9488&color=fff'
  },
  {
    id: '3',
    name: 'Rohan Maharjan',
    university: 'University of Greenwich',
    country: 'UK',
    quote: 'PTE classes were amazing. Scored 78 overall.',
    image: 'https://ui-avatars.com/api/?name=Rohan+Maharjan&background=ea580c&color=fff'
  }
];

const countryImages = [
    'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80', // UK (London)
    'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=800&q=80', // Australia (Sydney Opera House)
    'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=800&q=80', // USA (NYC)
    'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=800&q=80', // Canada (Toronto)
    'https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=800&q=80'  // Korea (Seoul)
];

const HomePage: React.FC<Props> = ({ setView, density = 'comfortable' }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isCompact = density === 'compact';

  useEffect(() => {
    const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % countryImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={isCompact ? "space-y-4 font-condensed" : "space-y-8 md:space-y-12"}>
      {/* Cinematic Hero Section - Liquid Glass Effect */}
      <div className={`relative overflow-hidden group transform-gpu transition-all duration-500 glass-panel ${isCompact ? 'h-[200px] rounded-2xl mx-1' : 'h-[500px] md:h-[600px] rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl shadow-primary-900/10'}`}>
        
        {/* Background Slider with Smooth Fade */}
        <div className="absolute inset-0 z-0">
            {countryImages.map((img, index) => (
                <div 
                    key={index}
                    className={`absolute inset-0 bg-cover bg-center transition-all duration-[1500ms] ease-in-out ${index === currentImageIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
                    style={{ backgroundImage: `url(${img})` }}
                />
            ))}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/50 to-transparent z-10 backdrop-contrast-125"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent z-10"></div>
        </div>
        
        <div className={`relative z-20 h-full flex flex-col justify-center max-w-4xl ${isCompact ? 'px-6 space-y-2' : 'px-8 md:px-16 space-y-6 md:space-y-8'}`}>
           <div className={`inline-flex items-center px-3 py-1 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full font-bold uppercase tracking-wider text-emerald-300 w-fit animate-pop shadow-lg ${isCompact ? 'text-[9px] px-2.5' : 'text-[10px] md:text-xs'}`}>
                <Sparkles size={isCompact ? 10 : 12} className="mr-2 text-yellow-300 animate-pulse" /> Future Starts Here
           </div>
           
           <h1 className={`font-black tracking-tight leading-[1] animate-slideUp drop-shadow-2xl ${isCompact ? 'text-4xl' : 'text-5xl md:text-8xl'} text-white`}>
               Study Abroad <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-white to-cyan-200 animate-gradient-x">Without Limits</span>
           </h1>
           
           {!isCompact && (
               <p className="text-base md:text-xl text-gray-200 max-w-xl font-medium leading-relaxed animate-slideUp drop-shadow-md opacity-90" style={{animationDelay: '0.1s'}}>
                   Expert counseling for UK, Australia, Canada & USA. 
                   <span className="block text-sm md:text-base mt-2 text-gray-300 font-normal">We guide you through university selection, visa applications, and test preparation.</span>
               </p>
           )}
           
           <div className={`flex flex-wrap pt-2 animate-slideUp ${isCompact ? 'gap-2' : 'gap-4'}`} style={{animationDelay: '0.2s'}}>
               <button 
                onClick={() => setView(ViewState.BOOKING)}
                className={`bg-white text-emerald-900 font-black flex items-center shadow-[0_0_20px_rgba(255,255,255,0.3)] ios-btn ${isCompact ? 'px-5 py-2.5 rounded-xl text-xs' : 'px-8 py-4 rounded-2xl text-base'}`}
               >
                   Book Free Session <ArrowRight size={isCompact ? 14 : 18} className="ml-2" />
               </button>
               <button 
                onClick={() => setView(ViewState.DESTINATIONS)}
                className={`bg-black/30 text-white border border-white/30 font-bold flex items-center backdrop-blur-md ios-btn ${isCompact ? 'px-5 py-2.5 rounded-xl text-xs' : 'px-8 py-4 rounded-2xl text-base'}`}
               >
                   <Globe size={isCompact ? 14 : 18} className="mr-2" /> Explore Unis
               </button>
           </div>
        </div>
      </div>

      {/* Stats Grid - Floating Glass Cards */}
      {isCompact ? (
          /* Compact Stats - Horizontal Scroll */
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar px-1 py-1 mask-fade-sides">
              {[
                  { label: 'Success', val: '98%', icon: ShieldCheck, color: 'text-emerald-500', bg: 'bg-emerald-50' },
                  { label: 'Universities', val: '150+', icon: GraduationCap, color: 'text-blue-500', bg: 'bg-blue-50' },
                  { label: 'Students', val: '5k+', icon: Users, color: 'text-orange-500', bg: 'bg-orange-50' },
                  { label: 'Years', val: '10+', icon: CalendarCheck, color: 'text-purple-500', bg: 'bg-purple-50' }
              ].map((stat, i) => (
                  <div key={i} className="glass-panel min-w-[100px] p-3 rounded-2xl flex flex-col items-center justify-center border border-white/60 dark:border-gray-700">
                       <stat.icon size={18} className={`mb-1 ${stat.color}`} />
                       <span className="font-black text-lg text-gray-900 dark:text-white leading-none">{stat.val}</span>
                       <span className="text-[9px] text-gray-500 uppercase font-bold mt-0.5">{stat.label}</span>
                  </div>
              ))}
          </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 -mt-12 md:-mt-20 relative z-30 px-4 md:px-12">
            {[
                { label: 'Visa Success', val: '98%', icon: ShieldCheck, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
                { label: 'Universities', val: '150+', icon: GraduationCap, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20' },
                { label: 'Students', val: '5k+', icon: Users, color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-900/20' },
                { label: 'Years Exp.', val: '10+', icon: CalendarCheck, color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-900/20' }
            ].map((stat, i) => (
                <div key={i} className="glass p-5 md:p-8 rounded-[2rem] flex flex-col items-center justify-center text-center hover:-translate-y-2 transition-transform duration-300">
                    <div className={`p-3.5 rounded-2xl mb-4 shadow-sm ${stat.bg}`}>
                        <stat.icon size={28} className={stat.color} />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight">{stat.val}</h3>
                    <p className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest mt-2">{stat.label}</p>
                </div>
            ))}
        </div>
      )}

      {/* Services Preview - Bento Grid Style */}
      <div className={isCompact ? "px-1" : "px-4 md:px-8"}>
          {!isCompact && (
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Why Choose Brighton?</h2>
            </div>
          )}
          
          {isCompact ? (
              <div className="grid grid-cols-2 gap-2">
                {[
                    { title: 'Global Reach', icon: Globe, color: 'blue', action: () => setView(ViewState.DESTINATIONS) },
                    { title: 'Test Prep', icon: Headphones, color: 'purple', action: () => setView(ViewState.MOCK_TEST) },
                    { title: 'Visa Help', icon: FileText, color: 'orange', action: () => setView(ViewState.BOOKING) },
                    { title: 'Success', icon: Award, color: 'green', action: () => {} }
                ].map((item, i) => (
                    <div key={i} onClick={item.action} className="ios-btn glass-panel p-3 rounded-2xl flex items-center gap-3 active:bg-gray-50 dark:active:bg-gray-800">
                         <div className={`p-2 rounded-xl bg-${item.color}-100 dark:bg-${item.color}-900/30 text-${item.color}-600`}>
                             <item.icon size={18} />
                         </div>
                         <div className="min-w-0">
                             <h3 className="font-bold text-xs text-gray-900 dark:text-white truncate">{item.title}</h3>
                         </div>
                    </div>
                ))}
              </div>
          ) : (
              <div className="grid md:grid-cols-3 gap-6">
                <div 
                    onClick={() => setView(ViewState.DESTINATIONS)}
                    className="glass-panel p-8 rounded-[2.5rem] cursor-pointer hover:shadow-2xl transition-all group relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>
                    <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform shadow-sm relative z-10">
                        <Globe size={28} />
                    </div>
                    <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3 relative z-10">Global Reach</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed relative z-10">Direct partnerships with top-tier universities in UK, Australia, Canada, USA & South Korea.</p>
                </div>

                <div 
                    onClick={() => setView(ViewState.MOCK_TEST)}
                    className="glass-panel p-8 rounded-[2.5rem] cursor-pointer hover:shadow-2xl transition-all group relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>
                    <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/50 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform shadow-sm relative z-10">
                        <Headphones size={28} />
                    </div>
                    <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3 relative z-10">IELTS/PTE Prep</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed relative z-10">High-scoring classes with official resources, AI grading, and unlimited mock tests.</p>
                </div>

                <div 
                    onClick={() => setView(ViewState.BOOKING)}
                    className="glass-panel p-8 rounded-[2.5rem] cursor-pointer hover:shadow-2xl transition-all group relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 dark:bg-orange-900/20 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>
                    <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/50 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform shadow-sm relative z-10">
                        <FileText size={28} />
                    </div>
                    <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3 relative z-10">Visa Assistance</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed relative z-10">End-to-end documentation guidance, interview prep, and post-visa support.</p>
                </div>
              </div>
          )}
      </div>

      {/* Testimonials Section */}
      <div className={isCompact ? "pb-4 px-1" : "py-8 md:py-12 px-4 md:px-8"}>
          <div className="flex items-center justify-between mb-4 px-2">
            <h2 className={`${isCompact ? 'text-base' : 'text-2xl'} font-bold text-gray-900 dark:text-white flex items-center`}>
                <Award size={isCompact ? 18 : 28} className="mr-2 text-yellow-500" /> Success Stories
            </h2>
          </div>
          <div className={`grid ${isCompact ? 'grid-cols-1 gap-3' : 'md:grid-cols-3 gap-6'}`}>
              {testimonials.map((t, index) => (
                  <div key={t.id} className={`glass-panel border-white/40 dark:border-gray-700 relative group hover:-translate-y-1 transition-transform duration-500 ${isCompact ? 'p-3 rounded-2xl flex items-center gap-3' : 'p-8 rounded-[2.5rem] shadow-lg'}`} style={{animationDelay: `${index * 100}ms`}}>
                      {!isCompact && <div className="absolute top-6 right-8 text-8xl text-gray-200 dark:text-gray-800 font-serif leading-none select-none group-hover:text-emerald-100 dark:group-hover:text-emerald-900/30 transition-colors">"</div>}
                      
                      <div className={`flex items-center relative z-10 ${isCompact ? 'flex-shrink-0' : 'mb-6'}`}>
                          <img src={t.image} alt={t.name} className={`${isCompact ? 'w-10 h-10' : 'w-14 h-14'} rounded-full ring-4 ring-white dark:ring-gray-800 shadow-md ${!isCompact && 'mr-4'}`} />
                          {!isCompact && (
                              <div>
                                  <h4 className="font-bold text-gray-900 dark:text-white text-base">{t.name}</h4>
                                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wide">{t.university}</p>
                              </div>
                          )}
                      </div>
                      
                      <div className={isCompact ? "flex-1 min-w-0" : ""}>
                          {isCompact && (
                              <div className="flex justify-between items-center mb-1">
                                  <h4 className="font-bold text-gray-900 dark:text-white text-sm truncate">{t.name}</h4>
                                  <span className="text-[10px] bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 px-1.5 py-0.5 rounded font-bold truncate max-w-[100px]">{t.university}</span>
                              </div>
                          )}
                          <p className={`text-gray-600 dark:text-gray-300 leading-relaxed relative z-10 font-medium ${isCompact ? 'text-xs truncate' : 'text-base'}`}>
                              {t.quote}
                          </p>
                      </div>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default HomePage;
