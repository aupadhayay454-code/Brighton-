
import React, { useState } from 'react';
import { Calendar, BookOpen, User, Mail, Phone, Globe, Check, Sparkles, ArrowRight, ChevronRight } from 'lucide-react';

type BookingType = 'counseling' | 'class';

const BookingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<BookingType>('counseling');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '' });
    }, 3000);
  };

  const InputField = ({ icon: Icon, type, placeholder, label, value, onChange }: any) => (
    <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon size={16} className="text-gray-400 group-focus-within:text-primary-600 dark:group-focus-within:text-primary-400 transition-colors duration-300" />
        </div>
        <input 
            type={type} 
            required 
            value={value}
            onChange={onChange}
            className="block w-full pl-10 pr-3 pt-4 pb-1.5 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-bold text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 outline-none shadow-sm transition-all hover:bg-white/80 dark:hover:bg-gray-800/80 peer"
            placeholder=" "
        />
        <label className="absolute left-10 top-3 text-gray-500 dark:text-gray-400 text-[9px] font-semibold transition-all duration-300 peer-focus:-translate-y-2 peer-focus:scale-90 peer-focus:text-primary-600 dark:peer-focus:text-primary-400 peer-not-placeholder-shown:-translate-y-2 peer-not-placeholder-shown:scale-90 origin-[0] pointer-events-none uppercase tracking-wider">
            {label}
        </label>
    </div>
  );

  return (
    <div className="max-w-xl mx-auto relative">
      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-b from-primary-500/20 to-transparent blur-[80px] -z-10 rounded-full pointer-events-none mix-blend-screen"></div>
      
      <div className="text-center mb-5 md:mb-8 animate-slideUp">
        <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/40 dark:border-white/10 text-[9px] md:text-xs font-bold text-primary-800 dark:text-primary-200 mb-2 shadow-sm">
            <Sparkles size={10} className="mr-1 text-yellow-500" /> Expert Guidance
        </div>
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight drop-shadow-sm">Book a Session</h2>
        <p className="text-gray-500 dark:text-gray-300 font-medium mt-1 text-xs md:text-base">Start your global education journey today.</p>
      </div>

      <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-3xl backdrop-saturate-150 rounded-[2rem] shadow-xl border border-white/50 dark:border-gray-700 overflow-hidden ring-1 ring-white/60 dark:ring-white/5 animate-fadeIn">
        
        {/* Neo-Glass Tab Switcher */}
        <div className="p-1.5 bg-gray-100/50 dark:bg-black/20 m-3 rounded-[1.5rem] flex relative border border-white/20 dark:border-white/5">
            <div className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-white dark:bg-gray-700 rounded-[1.2rem] shadow-md shadow-gray-200/50 dark:shadow-black/30 transition-all duration-500 ease-out-expo ${activeTab === 'class' ? 'translate-x-[calc(100%+6px)]' : 'translate-x-0'}`}></div>
            <button 
                className={`flex-1 py-2.5 rounded-[1.2rem] text-xs font-extrabold flex items-center justify-center relative z-10 transition-colors duration-300 ${activeTab === 'counseling' ? 'text-primary-700 dark:text-white' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'}`}
                onClick={() => setActiveTab('counseling')}
            >
                <User size={14} className="mr-1.5" strokeWidth={activeTab === 'counseling' ? 2.5 : 2} /> Counseling
            </button>
            <button 
                className={`flex-1 py-2.5 rounded-[1.2rem] text-xs font-extrabold flex items-center justify-center relative z-10 transition-colors duration-300 ${activeTab === 'class' ? 'text-primary-700 dark:text-white' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'}`}
                onClick={() => setActiveTab('class')}
            >
                <BookOpen size={14} className="mr-1.5" strokeWidth={activeTab === 'class' ? 2.5 : 2} /> IELTS/PTE
            </button>
        </div>

        <div className="p-5 md:p-8">
          {submitted ? (
            <div className="text-center py-8 animate-fadeIn">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mx-auto mb-4 shadow-xl">
                <Check size={32} strokeWidth={3} />
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-1">Request Sent!</h3>
              <p className="text-gray-500 dark:text-gray-300 font-medium text-xs max-w-xs mx-auto">
                  Our team will contact you shortly.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-5 px-5 py-2 bg-gray-100 dark:bg-gray-800 rounded-xl font-bold text-gray-600 dark:text-gray-300 text-[10px]"
              >
                  Book Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-5">
              <div className="grid gap-3 md:gap-5">
                <InputField 
                    icon={User} type="text" label="Full Name" 
                    value={formData.name} onChange={(e: any) => setFormData({...formData, name: e.target.value})} 
                />
                <InputField 
                    icon={Mail} type="email" label="Email Address"
                    value={formData.email} onChange={(e: any) => setFormData({...formData, email: e.target.value})} 
                />
                <InputField 
                    icon={Phone} type="tel" label="Phone Number"
                    value={formData.phone} onChange={(e: any) => setFormData({...formData, phone: e.target.value})} 
                />
              </div>

              {activeTab === 'counseling' && (
                <div className="space-y-3 animate-fadeIn">
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Globe size={16} className="text-gray-400 group-focus-within:text-primary-600 transition-colors" />
                    </div>
                    <select className="block w-full pl-10 pr-3 py-3.5 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-bold text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 outline-none shadow-sm appearance-none">
                        <option>Select Destination</option>
                        <option>Australia</option>
                        <option>United Kingdom</option>
                        <option>Canada</option>
                        <option>USA</option>
                        <option>South Korea</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <ChevronRight size={14} className="text-gray-400 rotate-90" />
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar size={16} className="text-gray-400 group-focus-within:text-primary-600 transition-colors" />
                    </div>
                    <input 
                        type="date" 
                        className="block w-full pl-10 pr-3 py-3.5 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-bold text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 outline-none shadow-sm" 
                    />
                  </div>
                </div>
              )}

              {activeTab === 'class' && (
                <div className="space-y-2.5 animate-fadeIn">
                  <label className="text-[9px] font-extrabold text-gray-400 dark:text-gray-500 uppercase tracking-widest ml-1 block mb-1.5">Select Program</label>
                  <div className="grid grid-cols-2 gap-2.5">
                    <label className="cursor-pointer group">
                        <input type="radio" name="course" className="peer sr-only" defaultChecked />
                        <div className="p-3 rounded-[1rem] bg-white/50 dark:bg-gray-800/50 border-2 border-transparent peer-checked:border-primary-500 peer-checked:bg-primary-50 dark:peer-checked:bg-primary-900/20 transition-all text-center">
                            <span className="block font-extrabold text-gray-900 dark:text-white text-sm mb-0.5">IELTS</span>
                            <span className="text-[9px] font-semibold text-gray-500">Academic/General</span>
                        </div>
                    </label>
                    <label className="cursor-pointer group">
                        <input type="radio" name="course" className="peer sr-only" />
                        <div className="p-3 rounded-[1rem] bg-white/50 dark:bg-gray-800/50 border-2 border-transparent peer-checked:border-primary-500 peer-checked:bg-primary-50 dark:peer-checked:bg-primary-900/20 transition-all text-center">
                            <span className="block font-extrabold text-gray-900 dark:text-white text-sm mb-0.5">PTE</span>
                            <span className="text-[9px] font-semibold text-gray-500">Pearson Academic</span>
                        </div>
                    </label>
                  </div>
                </div>
              )}

              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white font-extrabold text-sm py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all transform active:scale-95 mt-3 flex items-center justify-center group"
              >
                <span className="flex items-center">
                    {activeTab === 'counseling' ? 'Confirm Appointment' : 'Register Now'}
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
